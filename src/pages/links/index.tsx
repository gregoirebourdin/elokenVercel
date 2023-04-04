import prisma from '@/utils/prisma';

import LinksPage from '@/templates/LinksPage';
import Meta from "@/base/meta/Meta";
import {path} from "@/routes/paths";
import {metas} from "@/routes/metas";
import {Container} from "@/templates/Globals/elements/Container";

// ----------------------------------------------------------------------

export default function Index({ links, project }: any) {
  const pages = [
    {
      name: "Liens utiles",
      href: path.faq.root,
      current: true,
    }
  ]
  const meta = metas.links;

  return (
    <>
      <Meta
          title={meta.title}
          description={meta.description}
          keywords={meta.keywords}
      />
      <Container
          color={undefined}
          className={'max-w-7xl pb-12 py-8 sm:py-12 space-y-6'}
          id={undefined}
      >
      <LinksPage links={links} project={project} pages={pages} />
        </Container>
    </>
  );
}

export async function getServerSideProps() {
  const links = await prisma.link.findMany({
    where: {
        project: {
            id: process.env.NEXT_PUBLIC_PROJECT_ID
        }
    },
    orderBy: {
      sort: 'asc',
    },
  });

  return {
    props: { links: JSON.parse(JSON.stringify(links))},
  };
}
