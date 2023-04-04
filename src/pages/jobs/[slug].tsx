import {DetailJob} from "@/templates/JobPages";
import prisma from "@/utils/prisma";
import Meta from "@/base/meta/Meta";
import {path} from "@/routes/paths";
import {metas} from "@/routes/metas";


export default function Slug({job}: any) {
    const pages = [
        {
            name: "Recrutement",
            href: path.jobs.root,
            current: false,
        },
        {
            name: job.title,
            href: path.jobs.slug + job.slug,
            current: true,
        }
    ]

    const meta = metas.jobsIndex;

    return (
        <>
            <Meta title={job.title}
                  description={job.title + ' - ' + meta.description}
                  keywords={meta.keywords + ' ' + job.title}
                  og={job.image}/>
            <DetailJob job={job} pages={pages}/>
        </>
    );
}

export async function getServerSideProps({params}) {

    const job = await prisma.job.findUnique({
        where: {
            /* @ts-ignore */
            slug: params.slug,
        }
    });

    return {
        props: {job: JSON.parse(JSON.stringify(job))}, // will be passed to the page component as props
    }
}