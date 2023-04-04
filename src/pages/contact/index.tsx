import Meta from '@/base/meta/Meta';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import {FormContact} from "@/templates/Contact";
import {path} from "@/routes/paths";
import {metas} from "@/routes/metas";

const pages = [
    {
        name: "Contact",
        href: path.contact.root,
        current: true,
    }
]
const meta = metas.contact;

export default function Contact() {
    return (
        <>
            <Meta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
            />
            <FormContact  pages={pages} meta={meta}/>
        </>
    );
}
