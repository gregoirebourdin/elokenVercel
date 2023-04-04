// ----------------------------------------------------------------------
// ⚛️ Components Dynamic Imports
import dynamic from 'next/dynamic';

import {Header} from '@/templates/Globals/components';
import {QuestionList} from './components';
import {Container} from "@/templates/Globals/elements/Container";

export default function ListFaq({faqs, pages, meta}: any) {
    return (
        <main>
            <Header
                title={meta.header}
                pages={pages}
                description={meta.introduction}
            />
            <Container color={undefined} className={'max-w-7xl py-12 sm:py-24 space-y-6'}
                       id={undefined}>
                <QuestionList faqs={faqs}/>
            </Container>
        </main>
    );
}
