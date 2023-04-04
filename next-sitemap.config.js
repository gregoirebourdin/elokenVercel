/** @type {import("next-sitemap").IConfig} */

const config = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [
    "/404",
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  /*  additionalPaths: async (config) => [
      await config.transform(config, "/additional-page"),
    ],*/
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/404",
        ],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/server-sitemap.xml`,
    ],
  },
};

module.exports = config;
