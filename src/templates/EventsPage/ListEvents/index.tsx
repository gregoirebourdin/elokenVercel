import {List} from './components';
import {Header} from "@/templates/Globals/components";
import {Container} from "@/templates/Globals/elements/Container";


export default function EventsList({events, pages, meta}) {
    return (
        <>
            <Header
                title={meta.header}
                pages={pages}
                description={meta.introduction}
            />

            <Container color={undefined} className={'max-w-7xl py-12 sm:py-24 space-y-6'}
                       id={undefined}>
                <List events={events}/>
            </Container>
        </>
    )
}