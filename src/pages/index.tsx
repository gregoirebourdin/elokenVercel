import Meta from '@/base/meta/Meta';
import HomePage from "@/templates/HomePage";
import prisma from "@/utils/prisma";
import {metas} from "@/routes/metas";


export default function Home({testimonials} : any) {

    const meta = metas.home;

    return (
        <>
            <Meta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
            />
            <HomePage testimonials={testimonials}/>
        </>
    );
}

export async function getServerSideProps() {
    const portfolios = await prisma.portfolio.findMany({
        where: {
            projectId: process.env.ELOKEN_PROJECT_ID
        },
        // get last 3 items
        take: 3,
        orderBy: {
            createdAt: 'desc'
        }
    })

    const testimonials = await prisma.rating.findMany({
        where: {
            projectId: process.env.ELOKEN_PROJECT_ID
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return {
        props: {
            testimonials : JSON.parse(JSON.stringify(testimonials)),
            portfolios : JSON.parse(JSON.stringify(portfolios))

        }, // will be passed to the page component as props
    }

}