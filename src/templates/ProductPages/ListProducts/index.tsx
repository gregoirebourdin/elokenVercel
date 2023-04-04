import {Header} from "@/templates/Globals/components";

import {Container} from "@/templates/Globals/elements/Container";

import {List} from "./components";

export default function ListTeam({products, pages, meta}: any) {
    console.log(products)
    return (
        <>
            <Header
                title={meta.header}
                pages={pages}
                description={meta.introduction}
            />

            <Container color={undefined} className={'max-w-7xl py-12 sm:py-24 space-y-24'}
                       id={undefined}>

                <List products={products}/>

            </Container>
        </>
    );
}
