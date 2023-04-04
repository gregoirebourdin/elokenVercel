import prisma from '@/utils/prisma';
import {DetailPortfolio} from '@/templates/PortfolioPages';
import Meta from '@/base/meta/Meta';
import {path} from "@/routes/paths";



export default function Slug({portfolio, otherPortfolios}: any) {
    const pages = [
        {
            name: "Portfolio",
            href: path.portfolio.root,
            current: false,
        },
        {
            name: portfolio.title,
            href: path.portfolio.slug + portfolio.slug,
            current: true,
        },

    ]

    return (
        <>
            <Meta title={portfolio.title} description={portfolio.description} og={portfolio.image} type='article'/>
            <DetailPortfolio portfolio={portfolio} otherPortfolios={otherPortfolios} pages={pages}/>
        </>
    );
}

export async function getServerSideProps(context) {

    const {slug} = context.params;

    const portfolios = await prisma.portfolio.findMany({
        where: {
            projectId: process.env.ELOKEN_PROJECT_ID,
            published: true
        }
    })

   // In portfolios, get the one with the slug that matches the slug in the url.
    const portfolio = portfolios.find((portfolio) => portfolio.slug === slug);

    //set otherPortfolios to all portfolios except the one that matches the slug in the url.
    const otherPortfolios = portfolios.filter((portfolio) => portfolio.slug !== slug);


    return {
        props: {
            portfolio: JSON.parse(JSON.stringify(portfolio)),
            otherPortfolios: JSON.parse(JSON.stringify(otherPortfolios)),
        },
    };
}