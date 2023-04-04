import prisma from "@/utils/prisma";
import Meta from "@/base/meta/Meta";
import {ListPortfolio} from "@/templates/PortfolioPages";
import {path} from "@/routes/paths";
import {metas} from "@/routes/metas";

// ----------------------------------------------------------------------

export default function Index({ portfolios }) {
    console.log("portfolios ", portfolios)
    const pages = [
        {
            name: "Portfolio",
            href: path.portfolio.root,
            current: true,
        }
    ]

    const meta = metas.portfolioIndex;

    return (
        <>
            <Meta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
            />
            <ListPortfolio portfolio={portfolios} pages={pages} meta={meta} />
        </>
    );
}

export async function getServerSideProps() {

    const portfolios = await prisma.portfolio.findMany({
        where: {
            projectId: process.env.ELOKEN_PROJECT_ID,
            published: true
        }
    })

  return {
    props: {
        portfolios : JSON.parse(JSON.stringify(portfolios))
    }, // will be passed to the page component as props
  }
}
