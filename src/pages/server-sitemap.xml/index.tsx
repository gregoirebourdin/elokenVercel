import {getServerSideSitemapLegacy} from 'next-sitemap'
import { GetServerSideProps } from 'next'
import prisma from "@/utils/prisma";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // Method to source urls from cms
    // const urls = await fetch('https//example.com/api')
    const url = "http://localhost:3000";

    const articles = await prisma.article.findMany({
        where: {
            published: true,
        },
    });

    const jobs = await prisma.job.findMany();

    const portfolios = await prisma.portfolio.findMany();

    const articleSitemap = articles.map((article) => ({
        loc: `${url}/blog/${article.slug}`,
        lastmod: new Date().toISOString(),
        priority: 0.7,
    }));

    const jobSitemap = jobs.map((job) => ({
        loc: `${url}/jobs/${job.slug}`,
        lastmod: new Date().toISOString(),
        priority: 0.7,
    }));

    const portfolioSitemap = portfolios.map((portfolio) => ({
        loc: `${url}/portfolio/${portfolio.slug}`,
        lastmod: new Date().toISOString(),
        priority: 0.7,
    }));

    const fields = articleSitemap.concat(jobSitemap, portfolioSitemap);

    return getServerSideSitemapLegacy(ctx, fields)

}

// Default export to prevent next.js errors
export default function SitemapIndex() {}



