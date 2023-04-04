import {Content, ShareArticle, OtherArticles, NewsLetter} from './components';
import {Container} from "@/templates/Globals/elements/Container";

// ----------------------------------------------------------------------

export default function DetailArticle({article, otherArticles, pages}: any) {
    // filter all other Articles to make sure they share at least one category with article and remove article from the list
    const filteredOtherArticles = otherArticles.filter((otherArticle: any) => {
        // remove current article from the list
        if (otherArticle.id !== article.id) {
            return otherArticle.categories.some((category: any) =>
                article.categories.some(
                    (articleCategory: any) => articleCategory.title === category.title
                )
            );
        }
    });

    return (
        <>
            <Container
                color={undefined}
                className={'max-w-7xl gap-12 justify-between lg:flex pt-32 pb-12 space-y-6'}
                id={undefined}
            >
                <Content article={article} pages={pages}/>

                <div className="mx-auto max-w-prose w-full lg:max-w-sm space-y-4 lg:ml-auto lg:mr-0 ">
                    {otherArticles.length > 0 && (
                        filteredOtherArticles.length > 2 ? (
                            <OtherArticles articles={filteredOtherArticles.slice(0, 3)}/>
                        ) : (
                            <OtherArticles articles={otherArticles.slice(0, 3)}/>
                        )
                    )}
                    <ShareArticle title={article.title}/>
                    <NewsLetter/>
                </div>

            </Container>
        </>
    );
}
