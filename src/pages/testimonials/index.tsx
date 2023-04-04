import prisma from "@/utils/prisma";

import dynamic from "next/dynamic";
import Meta from "@/base/meta/Meta";
import {path} from "@/routes/paths";
import {ListTestimonial} from "@/templates/TestimonialPage";
import {metas} from "@/routes/metas";

export default function Team({ testimonials }) {

    const pages = [
        {
            name: "Avis clients",
            href: path.testimonials.root,
            current: true,
        }
    ]

    const meta = metas.testimonials;

    return (
        <>
            <Meta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
            />
            <ListTestimonial testimonials={testimonials} pages={pages} meta={meta}/>
        </>
    )
}

export async function getServerSideProps() {
    const testimonials = await prisma.rating.findMany({
        where: {
            project: {
                id: process.env.ELOKEN_PROJECT_ID
            }
        }
    });
    return {
        props: {
            testimonials : JSON.parse(JSON.stringify(testimonials))
        }, // will be passed to the page component as props
    }
}