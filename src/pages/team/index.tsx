import prisma from "@/utils/prisma";
import Meta from "@/base/meta/Meta";
import {path} from "@/routes/paths";
import {ListTeam} from "@/templates/TeamPage";
import {metas} from "@/routes/metas";

export default function Team({ members }) {

    const pages = [
        {
            name: "L'équipe",
            href: path.team.root,
            current: true,
        }
    ]

    const meta = metas.team;

    return (
        <>
            <Meta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
            />

            <ListTeam members={members} pages={pages} meta={meta}/>
        </>
    )
}

export async function getServerSideProps() {
    const members = await prisma.team.findMany({
        where: {
            project: {
                id: process.env.ELOKEN_PROJECT_ID
            }
        }
    });
  return {
    props: {
        members
    }, // will be passed to the page component as props
  }
}