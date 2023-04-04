import prisma from "@/utils/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
  const legals = await prisma.legal.findMany({
    where: {
      projectId: process.env.ELOKEN_PROJECT_ID,
    }
  });

  const project = await prisma.project.findUnique({
    where: {
        id: process.env.ELOKEN_PROJECT_ID,
    }
  });
  // Put project an legals in an object
    const legalsWithProject = {
        project: project,
        legals: legals
    }

    console.log("legalsWithProject", legalsWithProject);

  res.send(legalsWithProject);
}