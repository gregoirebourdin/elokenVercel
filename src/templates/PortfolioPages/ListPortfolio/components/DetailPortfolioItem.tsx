import Image from "next/image";
import {ChevronLeftIcon, ChevronRightIcon, XMarkIcon} from "@heroicons/react/20/solid";
import {prev} from "dom7";

export default function ({portfolioItem, portfolio, setPortfolioItem}) {

// find in portfolio the current item based on portfolioItem
    const currentItem = portfolio.find(item => item.id === portfolioItem.id)


//loop through portfolio and use thecurrent index of the current item to find the next and previous item
    let nextItem = portfolio[portfolio.indexOf(currentItem) + 1]
    let previousItem = portfolio[portfolio.indexOf(currentItem) - 1]

    // if there is no next item, set nextItem to the first item in portfolio
    if (!nextItem) {
        nextItem = portfolio[0]
    }

    if (!previousItem) {
        previousItem = portfolio[portfolio.length - 1]
    }


    return (
        <>
            <div className="relative pb-6 lg:pb-0">
                <div className=" grid lg:grid-cols-5 items-center gap-6 lg:gap-10 text-white">
                    <Image
                    src={currentItem.image}
                    alt={currentItem.title}
                    width={500}
                    height={500}
                    className="lg:order-2 lg:col-span-3 h-full w-full transform sm:rounded-t-3xl lg:rounded-ui
                    object-cover object-center transition duration-500"
                />
                    <div className="lg:col-span-2 space-y-2 p-8">
                        <span className="tag bg-gray-700 text-gray-400">{currentItem.tag}</span>
                        <h1 className="title-3">
                            {currentItem.title}
                        </h1>
                        <p className="body-3 text-gray-400">
                            {currentItem.description}
                        </p>
                        {/*<div className="pt-6">*/}
                        {/*    <button className="button-white"> En savoir plus</button>*/}
                        {/*</div>*/}

                    </div>

                </div>
                <div className="lg:hidden">
                    <div
                        className="absolute left-0 top-0 flex h-full w-1/3  transform gap-4"
                        onClick={() => {
                            setPortfolioItem(previousItem);
                        }}
                    />
                    <div
                        className="absolute right-0 top-0 flex h-full w-1/3  transform gap-4"
                        onClick={() => {
                            setPortfolioItem(nextItem);
                        }}
                    />
                </div>
                <div className="hidden lg:block">
                    <div className="absolute -left-14 z-50 top-1/2 flex -translate-y-1/2 transform gap-4 xl:-left-24">
                        <button
                            className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-100"
                            onClick={() => {
                                setPortfolioItem(previousItem);
                            }}>

                            <ChevronLeftIcon className="h-4 w-4 text-white group-hover:text-white"/>
                        </button>
                    </div>
                    <div className="absolute -right-14 top-1/2 flex -translate-y-1/2 transform gap-4 xl:-right-24">
                        <button
                            className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-100"
                            onClick={() => {
                                setPortfolioItem(nextItem);
                            }}>
                            <ChevronRightIcon className="h-4 w-4 text-white group-hover:text-gray-900"/>
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
}