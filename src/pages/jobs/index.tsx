import {ListJobs} from "@/templates/JobPages";
import prisma from "@/utils/prisma";
import Meta from "@/base/meta/Meta";
import {path} from "@/routes/paths";
import {metas} from "@/routes/metas";

export default function index({jobs} : any) {
    const pages = [
        {
            name: "Recrutement",
            href: path.jobs.root,
            current: true,
        }
    ]
    const meta = metas.jobsIndex;

    return (
        <>
            <Meta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
            />
            <ListJobs jobs={jobs} pages={pages} meta={meta}/>
        </>
    );
}
export async function getServerSideProps() {

    const jobs = await prisma.job.findMany();

    console.log(jobs);

    return {
    props: {jobs : JSON.parse(JSON.stringify(jobs)) }, // will be passed to the page component as props
  }
}
