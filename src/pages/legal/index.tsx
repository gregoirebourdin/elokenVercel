import {ListLegal} from "@/templates/LegalPages";
import prisma from "@/utils/prisma";
import Meta from "@/base/meta/Meta";
import {path} from "@/routes/paths";
import {metas} from "@/routes/metas";



export default function LegalPages({legals}: any) {
    const pages = [
        {
            name: "Mentions légales",
            href: path.legal.root,
            current: true,
        }
    ]

    const meta = metas.legalIndex;


    return (
        <div>
            <Meta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
            />

            <ListLegal legals={legals} pages={pages} meta={meta}/>
        </div>
    );
}
export async function getServerSideProps() {
    const legals = await prisma.legal.findMany({
        where: {
            project: {
                id: process.env.ELOKEN_PROJECT_ID
            }
        }
    });
  return {
    props: { legals : JSON.parse(JSON.stringify(legals)) }, // will be passed to the page component as props
  }
}

