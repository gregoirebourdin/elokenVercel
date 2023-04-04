import prisma from '@/utils/prisma';
import {DetailArticle} from '@/templates/BlogPages';
import Meta from '@/base/meta/Meta';
import {path} from "@/routes/paths";

// ----------------------------------------------------------------------

export default function Slug({article, otherArticles}: any) {
    const pages = [
        {
            name: "Blog",
            href: path.blog.root,
            current: false,
        },
        {
            name: article.title,
            href: path.blog.slug + article.slug,
            current: true,
        },

    ]

    return (
        <>
            <Meta title={article.title} description={article.description} og={article.image} type='article'/>
            <DetailArticle article={article} otherArticles={otherArticles} pages={pages}/>
        </>
    );
}

export async function getServerSideProps(context) {
    const {slug} = context.params;
    const article = await prisma.article.findUnique({
        where: {
            slug: slug,
        },
        include: {
            author: true,
            categories: true,

        },
    });
    console.log(article);

    const otherArticles = await prisma.article.findMany({
        where: {
            published: true,
            id: {
                not: article.id,
            },
            project: {
                id : process.env.ELOKEN_PROJECT_ID
            }
        },
        include: {
            categories: true,
        },
    });

    return {
        props: {
            article: JSON.parse(JSON.stringify(article)),
            otherArticles: JSON.parse(JSON.stringify(otherArticles)),
        }, // will be passed to the page components as props
    };
}
