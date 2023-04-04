import useEmblaCarousel from 'embla-carousel-react'
import {useCallback} from 'react'
import Image from "next/image";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/20/solid";
import ClassNames from 'embla-carousel-class-names'
import Fade, {animate} from '@/base/animations/Fade';


export default function EmblaCarousel({testimonials}) {


    const [emblaRef, emblaApi] = useEmblaCarousel({align: 'center', loop: true}, [ClassNames()])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

        return (
            <div className="relative">
                <Fade animate={animate.fadeIn}>

                    <div className="testimonial" ref={emblaRef}>
                        <div className="testimonial__container max-w-5xl mx-auto">
                            {testimonials.map((item, index) => (
                                <div className="testimonial__slide testimonial__class-names" key={index}>

                                    <div className="mb-8 block">

                                        <figure
                                            className="relative overflow-hidden rounded-ui hover:bg-white border transition-all border-gray-200 dark:border-transparent dark:bg-gray-800/50 dark:hover:bg-gray-800/100 dark:shadow-xl shadow-gray-900/10">
                                            <figcaption
                                                className="relative  flex items-center justify-between border-b border-gray-200 dark:border-gray-900 px-6  py-4">
                                                <div>
                                                    <div
                                                        className="heading-6 font-semibold text-gray-900 dark:text-white">
                                                        {item.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
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
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="hidden lg:block">
                            <div className="absolute top-1/2 -translate-y-1/2 xl:-left-12 -left-6 ">
                                <button className="embla__prev text-gray-500 hover:text-gray-900 dark:hover:text-white"
                                        onClick={scrollPrev}>
                                    <ArrowLeftIcon className="w-8"/>
                                </button>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 xl:-right-12 -right-6">
                                <button className="embla__next text-gray-500 hover:text-gray-900 dark:hover:text-white "
                                        onClick={scrollNext}>
                                    <ArrowRightIcon className="w-8"/>
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <div
                                className="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-r from-transparent to-gray-50 dark:to-gray-900"/>
                            <div
                                className="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-l from-transparent to-gray-50 dark:to-gray-900"/>
                        </div>
                    </div>
                </Fade>

            </div>

        )

}