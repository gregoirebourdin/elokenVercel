import prisma from "@/utils/prisma";
import Meta from "@/base/meta/Meta";
import {ListArticles} from "@/templates/BlogPages";
import {path} from "@/routes/paths";
import {metas} from "@/routes/metas";

// ----------------------------------------------------------------------

export default function Index({articles, categories}: any) {
    const pages = [
        {
            name: "Blog",
            href: path.blog.root,
            current: true,
        }
    ]
    const meta = metas.blogIndex;
    return (
        <>
            <Meta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
            />

            <ListArticles articles={articles} categories={categories} pages={pages} meta={meta}/>
        </>
    );
}

export async function getServerSideProps() {

    const articles = await prisma.article.findMany({
        where: {
            published: true,
            project: {
                id : process.env.ELOKEN_PROJECT_ID
            }
        },
        include: {
            categories : true,
            author: true,
        },
    });
    const categories = await prisma.category.findMany({
        where: {
            project: {
                id : process.env.ELOKEN_PROJECT_ID
            }
        }
    });

    return {
        props: {
            articles: JSON.parse(JSON.stringify(articles)),
            categories: JSON.parse(JSON.stringify(categories)),
        },
    };
}
