import prisma from '@/utils/prisma';
import dynamic from "next/dynamic";
import {ListFaq} from "@/templates/FaqPage";
import Meta from "@/base/meta/Meta";
import  {path} from "@/routes/paths";
import {metas} from "@/routes/metas";

// ----------------------------------------------------------------------

export default function QuestionsFrequentes({ faqs }: any) {
    const pages = [
        {
            name: "Foire aux questions",
            href: path.faq.root,
            current: true,
        }
    ]

    const meta = metas.faqs;

  return (
    <div>
      <Meta
          title={meta.title}
          description={meta.description}
          keywords={meta.keywords}
      />
      <ListFaq faqs={faqs} pages={pages} meta={meta} />
    </div>
  );
}

export async function getServerSideProps() {
  const faqs = await prisma.faq.findMany({
    where: {
        projectId: process.env.ELOKEN_PROJECT_ID,
    }
  });

  return {
    props: {
      faqs: JSON.parse(JSON.stringify(faqs)),
    }, // will be passed to the page components as props
  };
}
