import moment from "moment";
import Image from "next/image";
const edjsHTML = require('editorjs-html');
import parse from "html-react-parser";
import {BreadCrumb} from "@/templates/Globals/components";
import Fade, {animate} from "@/base/animations/Fade";
import React from "react";
// ----------------------------------------------------------------------

export default function Content({portfolio, pages}: any) {

    const edjsParser = edjsHTML();
    let html = edjsParser.parse(JSON.parse(portfolio.description));
    return (
        <>
            <div className='w-full'>
                <div>
                    <div>

                        <div className="max-w-prose w-full space-y-6 mx-auto  ">
                            <Fade animate={animate.fadeIn}>
                                <div className="space-y-4">
                                    <BreadCrumb pages={pages}/>
                                    <h1 className=" heading-2 text-gray-900 dark:text-white">{portfolio.title}</h1>
                                    <div className="">
                                        <div className="flex items-center gap-3">
                                            <span className="tag-normal">
                                                {portfolio.tag}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                            <Fade animate={animate.fadeIn} delay={0.5}>
                                <div
                                    className=" mx-auto w-full aspect-w-16 aspect-h-9 max-w-prose overflow-hidden rounded-ui">
                                    <Image
                                        src={portfolio.image}
                                        alt={portfolio.title}
                                        width={500}
                                        height={500}
                                        loading="eager"
                                        className=" h-full w-full   object-cover object-center transition"
                                    />
                                </div>
                            </Fade>
                        </div>

                    </div>
                </div>

                <div className=" mx-auto mt-0 py-5 lg:py-8 ">
                    <Fade animate={animate.fadeIn} delay={0.7}>
                        <article className="mx-auto max-w-prose ">
                            <div
                                className="prose text-gray-700 mx-auto my-3 prose-a:text-primary-500 prose-headings:font-heading  dark:text-gray-300 prose-headings:text-gray-900 dark:prose-headings:text-white dark:prose-invert">
                                {React.Children.toArray(
                                    html.map((string, index: any) => parse(string))
                                )}
                            </div>
                        </article>
                        <div className="mx-auto max-w-prose flex mt-12">
                            <div className=" flex space-x-3 text-gray-500 ">
                                <div className="">
                                    <div className=" flex items-center">
                                        <div className="text-xs text-gray-500">
                                            {moment(portfolio.createdAt).format('DD/MM/YYYY à HH:mm')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>


            </div>


        </>
    );
}
