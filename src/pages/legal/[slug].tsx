import {DetailLegal} from "@/templates/LegalPages";
import prisma from "@/utils/prisma";
import Meta from "@/base/meta/Meta";
import {path} from "@/routes/paths";

export default function Slug({legal}: any) {
    const pages = [
        {
            name: "Mentions légales",
            href: path.legal.root,
            current: false,
        },
        {
            name: legal.title,
            href: path.legal.slug + legal.slug,
            current: true,
        },

    ]
    return (
        <div>
            <Meta
                title={legal.title}
            />
            <DetailLegal legal={legal} pages={pages}/>
        </div>
    );
}
export async function getServerSideProps({params}) {
    const legal = await prisma.legal.findUnique({
        where: {
            slug: params.slug,
        }
    })
  return {
    props: {
        legal : JSON.parse(JSON.stringify(legal))
    }, // will be passed to the page component as props
  }
}
