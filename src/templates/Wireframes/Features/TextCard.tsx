import Image from 'next/image';
import AnchorArrow from "@/templates/Globals/elements/AnchorArrow";
import Fade, {animate} from "@/base/animations/Fade";
import Link from "next/link";

export default function TextCard({tag, title, description, image, link, linkText, cardTitle, cardDescription}) {
    return (
        <>
            <div className="">
                <div className="grid lg:grid-cols-2 items-center justify-center gap-12">
                    <div className=" max-w-xl text-center lg:text-left mx-auto ">
                        <Fade animate={animate.fadeInRight} delay={0.3}>
                            <div className="space-y-2  lg:space-y-4">
                                {tag && (
                                    <span className="tag tag-primary">{tag}</span>
                                )}
                                <h2 className="heading-1 text-gray-900 dark:text-white">{title}</h2>
                                {description && (
                                    <p className="body-1 text-gray-600 dark:text-gray-500">{description}</p>
                                )}

                            </div>
                        </Fade>
                    </div>

                    <div className=" ">
                        <Fade animate={animate.fadeInLeft} delay={0.7}>
                            <Link href={link} className="">
                                <div
                                    className="group max-w-sm mx-auto border border-gray-200 dark:border-transparent p-3 rounded-ui dark:bg-gray-800 space-y-3">
                                    <div
                                        className="aspect-w-4 aspect-h-3 shadow overflow-hidden rounded-uismall">
                                        <Image
                                            className="inset-0 h-full  group-hover:scale-110 duration-500 transition  w-full  object-cover object-center"
                                            src={image}
                                            alt={cardTitle}
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div
                                        className=" w-full  space-y-2  items-center py-2">
                                        <h2 className="heading-5 text-gray-900 dark:text-white">{cardTitle}</h2>
                                        <p className="body-3 text-gray-600 dark:text-gray-400">
                                            {cardDescription}
                                        </p>
                                        <AnchorArrow text={linkText} href={undefined}/>
                                    </div>
                                </div>
                            </Link>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}