import moment from 'moment';
import parse from 'html-react-parser';
import Fade, {animate} from "@/base/animations/Fade";
import {BreadCrumb} from "@/templates/Globals/components";
import React from "react";


const edjsHTML = require('editorjs-html');

// ----------------------------------------------------------------------

export default function Content({job, pages}: any) {
    console.log(job)
    let dateOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    const edjsParser = edjsHTML();
    let html = edjsParser.parse(JSON.parse(job.content));
    return (
        <>
            <div className='w-full'>
                <div>
                    <div>
                        <div className="max-w-prose w-full w-full space-y-6 mx-auto  ">
                            <Fade animate={animate.fadeIn}>
                                <div className="space-y-4">
                                    <BreadCrumb pages={pages}/>
                                    <h1 className=" heading-2 text-gray-900 dark:text-white">{job.title}</h1>
                                    <div className="">
                                        <div className="flex items-center gap-3">

                                        <span className="tag-normal">
                                            {job.jobType}
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
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
                                                    {moment(job.createdAt).format('DD/MM/YYYY à HH:mm')}
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}
