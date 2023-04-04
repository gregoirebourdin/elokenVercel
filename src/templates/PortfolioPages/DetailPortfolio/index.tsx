import {Content, OtherPortfolios} from './components';
import {Container} from "@/templates/Globals/elements/Container";
// import {NewsLetter} from "@/library/components";

// ----------------------------------------------------------------------

export default function DetailPortfolio({portfolio, otherPortfolios, pages}: any) {

    return (
        <>
            <Container
                color={undefined}
                className={'max-w-7xl gap-12 justify-between lg:flex pt-32 pb-12 space-y-6'}
                id={undefined}
            >
                <Content portfolio={portfolio} pages={pages}/>
                <div className="mx-auto max-w-prose w-full lg:max-w-sm space-y-4 lg:ml-auto lg:mr-0 ">
                    {otherPortfolios.length > 0 && (
                        <OtherPortfolios portfolios={otherPortfolios}/>
                    )}
                </div>
            </Container>
        </>
    );
}
