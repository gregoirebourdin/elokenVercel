import Meta from '@/base/meta/Meta';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import {FormContact} from "@/templates/Contact";
import {path} from "@/routes/paths";


export default function Contact() {
    return (
        <>
            <h2>Contact</h2>
    {/*        <Meta
                title={meta.title}
                description={meta.description}
                keywords={meta.keywords}
            />*/}
           {/* <FormContact  pages={pages} meta={meta}/>*/}
        </>
    );
}
