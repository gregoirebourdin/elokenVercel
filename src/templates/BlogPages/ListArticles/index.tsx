import {FilterCategories, List} from "./components";
import {useEffect, useState} from 'react';
import {Header} from "@/templates/Globals/components";
import {Container} from "@/templates/Globals/elements/Container";
import Newsletter from "@/templates/Globals/components/NewsLetter";

// ----------------------------------------------------------------------

export default function ListArticles({articles, categories, pages, meta}: any) {
    const [chosenCategory, setChosenCategory] = useState('');
    const [filteredArticles, setFilteredArticles] = useState(articles);

    useEffect(() => {
        if (chosenCategory === '') {
            setFilteredArticles(articles);
        } else {
            const filtered = articles.filter((article: any) =>
                article.categories.some(
                    (category: any) => category.title === chosenCategory
                )
            );
            setFilteredArticles(filtered);
        }
    }, [chosenCategory]);

    return (
        <>
            <Header
                title={meta.header}
                pages={pages}
                description={meta.introduction}
            />
            <Container color={undefined} className={'max-w-7xl py-12 sm:py-24 space-y-6'}
                       id={undefined}>
                <div className="hidden sm:block">
                    <FilterCategories
                        categories={categories}
                        setChosenCategory={setChosenCategory}
                        chosenCategory={chosenCategory}
                    />
                </div>
                <List articles={filteredArticles}/>
                <Newsletter/>
            </Container>
        </>
    );
}
