import prisma from "@/utils/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
  const banners = await prisma.banner.findMany({
    where: {
      projectId: process.env.ELOKEN_PROJECT_ID,
    }
  });
  console.log(banners);

  // Map on the banners to get only one banner who have the less sort value
    const banner = banners.reduce((prev, current) => (prev.sort < current.sort) ? prev : current);

    // Extract the first banner
    const firstBanner = banners[0];

  res.send(firstBanner);
}