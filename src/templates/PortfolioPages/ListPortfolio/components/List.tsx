import Link from 'next/link';
import Image from 'next/image';
import Modal from '@/templates/PortfolioPages/ListPortfolio/components/Modal';
import {useState} from "react";
import DetailPortfolioItem from "@/templates/PortfolioPages/ListPortfolio/components/DetailPortfolioItem";
import {EmptyState} from "@/templates/Globals/elements";
import Fade, {animate} from "@/base/animations/Fade";
import {path} from "@/routes/paths";

// ----------------------------------------------------------------------

export default function List({portfolio}: any) {

    return (
        <>
            <>
                <div >
                    {portfolio.length === 0 ? (
                        <div className="grid w-full">
                            <EmptyState text={"Aucune réalisation pour le moment"}/>
                        </div>
                    ) : (
                        <div role="list"  className="grid sm:grid-cols-2 lg:grid-cols-3 justify-stretch gap-6">
                            {portfolio.map((item: any, index) => (
                                <div key={index}>
                                    <Fade animate={animate.fadeIn} delay={index / portfolio.length}>
                                        <Link href={path.portfolio.slug + item.slug} className="mb-8 block ">
                                            <div className="group space-y-2">
                                                <div
                                                    className=" aspect-w-5 bg-gray-200 dark:bg-gray-800 aspect-h-3 w-full shadow overflow-hidden rounded-ui">
                                                    <Image
                                                        className="inset-0 h-full  group-hover:scale-110 duration-500 transition  w-full  object-cover object-center"
                                                        src={item.image}
                                                        alt={item.title}
                                                        width={500}
                                                        height={500}
                                                    />
                                                </div>
                                                <div className=" w-full  space-y-3  items-center py-2">
                                                    <h2 className="heading-6 text-gray-900 dark:text-white transition durantion-500 group-hover:text-primary-500">{item.title}</h2>
                                                    <div className="flex flex-wrap gap-1">
                                                        <span className="tag tag-normal" >
                                                            {item.tag}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Fade>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </>


        </>
    );
}
