import {Header} from "@/templates/Globals/components";
import {TeamList} from './components';
import {Container} from "@/templates/Globals/elements/Container";
import {metas} from "@/routes/metas";
import {path} from "@/routes/paths";
import {CtaCenter} from "@/templates/Wireframes";

export default function ListTeam({members, pages, meta}: any) {
    return (
        <>
            <Header
                title={meta.header}
                pages={pages}
                description={meta.introduction}
            />

            <Container color={undefined} className={'max-w-7xl py-12 sm:py-24 space-y-24'}
                       id={undefined}>
                <TeamList members={members}/>
                <CtaCenter title={"Vous souhaitez rejoindre l'équipe ?"}
                           description={"Découvrez nos offres d'emploi et postulez !"}
                           button={"Voir les postes"}
                           href={path.jobs.root}
                />
            </Container>
        </>
    );
}
