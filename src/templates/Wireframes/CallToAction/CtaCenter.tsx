import Link from "next/link";
import Fade, {animate} from "@/base/animations/Fade";

export default function CtaCenter({title, description, button, href}: any) {
    return (
        <>
            <div className="">
                <Fade animate={animate.fadeIn}>
                    <div className="bg-primary-100 dark:bg-primary-900  flex items-center rounded-ui">
                        <div className="w-full px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:px-12 lg:py-20">
                            <div className="space-y-2 text-center w-full max-w-xl mx-auto ">
                                <h2 className="heading-2 text-gray-900 dark:text-white ">
                                    {title}
                                </h2>
                                <p className="body-2 text-gray-700  dark:text-gray-300 ">{description}</p>
                                <div className="pt-6 flex items-center justify-center">
                                    <Link className="" href={href}>
                                        <button className="button-normal ">{button}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    );
}
