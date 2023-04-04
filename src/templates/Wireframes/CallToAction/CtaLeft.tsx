import Link from "next/link";
import Image from "next/image";

import Fade, {animate} from "@/base/animations/Fade";

export default function CtaLeft({title, description, button, image, href}) {
    return (
        <>
            <div className="">
                <Fade animate={animate.fadeIn}>
                    <div className="bg-primary-100 dark:bg-primary-900  overflow-hidden flex items-center rounded-ui">
                        <div className="grid sm:grid-cols-3 lg:grid-cols-2 lg:gap-6 w-full ">
                            <div
                                className="space-y-2 w-full sm:col-span-2 lg:col-span-1 max-w-lg px-4 py-8 sm:py-6 sm:px-6 lg:px-8 xl:px-12 lg:py-20">
                                <h2 className="heading-2 text-gray-900 dark:text-white ">{title}</h2>
                                <p className="body-2 text-gray-700 max-w-md dark:text-primary-200 ">{description}</p>
                                <div className="pt-4">
                                    <Link className="" href={href}>
                                        <button className="button-normal">{button}</button>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className=" relative w-full sm:h-full h-64 flex items-center justify-end ">
                                <Image
                                    className="absolute sm:right-0 sm:left-auto w-full h-full object-cover object-top object-left"
                                    src={image}
                                    alt={title}
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    )
}
