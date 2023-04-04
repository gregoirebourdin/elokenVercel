import moment from "moment";
import {Header} from "@/templates/Globals/components";
import {Content} from "./components";
import {Container} from "@/templates/Globals/elements/Container";

export default function DetailLegal({legal, pages}: any) {
    return (
        <>
            <Header
                title={legal.title}
                pages={pages}
                description={
                    'Mis à jour le ' + moment(legal.updatedAt).format('DD/MM/YYYY')
                }
            />
            <Container color={undefined} className={'max-w-7xl py-12 sm:py-24 space-y-6'}
                       id={undefined}>
                <Content legal={legal}/>
            </Container>
        </>
    );
}