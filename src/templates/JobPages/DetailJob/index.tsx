import {Content, ShareJob} from "./components";
import {Container} from "@/templates/Globals/elements/Container";

export default function DetailJob({job, pages}: any) {
    return (
        <>
            <Container
                color={undefined}
                className={'max-w-7xl gap-12 justify-between lg:flex pt-32 pb-12 space-y-6'}
                id={undefined}
            >
                <Content job={job} pages={pages}/>
                <div className="mx-auto max-w-prose lg:max-w-sm space-y-4 lg:ml-auto lg:mr-0 ">
                    <ShareJob job={job.title}/>
                </div>
            </Container>

        </>
    );
}