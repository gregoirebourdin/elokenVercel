import Fade, {animate} from "@/base/animations/Fade";
import Image from "next/image";

import {EmptyState} from "@/templates/Globals/elements";

export default function TestimonialsGrid({testimonials}) {
    return (
        <>
            {testimonials.length === 0 ? (
                <div className="grid w-full">
                    <EmptyState text={"Aucun avis client pour le moment"}/>
                </div>
            ) : (
            <div className="">
                <Fade animate={animate.fadeIn}>
                    <div role="list" className="columns-1 sm:columns-2 md:columns-3 gap-8">
                        {testimonials.map((item, index) => (
                            <div className="" key={index}>
                                <div className="mb-8 block">
                                    <Fade animate={animate.fadeInDown} delay={index / testimonials.length}>
                                        <figure
                                            className="relative overflow-hidden rounded-ui hover:bg-white border transition-all border-gray-200 dark:border-transparent dark:bg-gray-800/50 dark:hover:bg-gray-800/100 dark:shadow-xl shadow-gray-900/10">
                                            <figcaption
                                                className="relative  flex items-center justify-between border-b border-gray-100 dark:border-gray-900 px-6  py-4">
                                                <div>
                                                    <div className="heading-6 font-semibold text-gray-900 dark:text-white">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {item.job}
                                                    </div>
                                                </div>
                                                <div className="overflow-hidden rounded-ui bg-gray-50 dark:bg-gray-800">
                                                    <Image
                                                        className="h-14 w-14 object-cover"
                                                        src={item.image}
                                                        alt={item.name}
                                                        width={56}
                                                        height={56}
                                                    />
                                                </div>
                                            </figcaption>
                                            <blockquote className="relative px-6 py-4">
                                                <p className=" tracking-tight text-gray-900 dark:text-white">
                                                    {item.comment}
                                                </p>
                                            </blockquote>
                                        </figure>
                                    </Fade>
                                </div>
                            </div>
                        ))}
                    </div>
                </Fade>
            </div>
            )}
        </>

    )
}