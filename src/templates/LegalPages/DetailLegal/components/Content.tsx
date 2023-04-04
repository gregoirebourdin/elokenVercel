import parse from 'html-react-parser';
import Fade, {animate} from "@/base/animations/Fade";
import React from "react";
const edjsHTML = require('editorjs-html');

// ----------------------------------------------------------------------

export default function Content({legal}: any) {

    const edjsParser = edjsHTML();
    let html = edjsParser.parse(JSON.parse(legal.content));
    return (
        <>
            < >
                <div className="">
                    <Fade animate={animate.fadeIn} delay={0.7}>
                        <article className=" max-w-prose ">
                            <div
                                className="prose text-gray-700 mx-auto prose-a:text-primary-500 prose-headings:font-heading  dark:text-gray-300 prose-headings:text-gray-900 dark:prose-headings:text-white dark:prose-invert">
                                {React.Children.toArray(
                                    html.map((string, index: any) => parse(string))
                                )}
                            </div>
                        </article>
                    </Fade>
                </div>

            </>
        </>
    );
}
