import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import Fade, {animate} from "@/base/animations/Fade";



export default function LogosCloud({logos}) {
    const autoplayOptions = {
        delay: 2000,
        rootNode: emblaRoot => emblaRoot.parentElement,
    };
    const [emblaRef] = useEmblaCarousel(
        {
            align: 'start',
            loop: true,
            dragFree: true,
            speed: 5,
            containScroll: 'keepSnaps',
        },
        [Autoplay(autoplayOptions)]
    );

    return (
        <div className="relative">
            <Fade animate={animate.fadeIn}>
                <div className="logos" ref={emblaRef}>
                    <div className="logos__container">
                        {logos.map((logo, index) => (
                            <div className="logos__slide " key={index}>
                                <div className="group relative overflow-hidden ">
                                    <div className="relative h-full w-full flex items-center justify-center ">
                                        <Image
                                            className="w-3/4 hover:opacity-100 opacity-40 transition duration-500 h-auto dark:invert"
                                            src={logo.image}
                                            width={500}
                                            height={500}
                                            alt={logo.title}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="">
                    <div
                        className="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-r from-transparent to-gray-50 dark:to-gray-900"/>
                    <div
                        className="absolute left-0 top-0 h-full w-1/5 bg-gradient-to-l from-transparent to-gray-50 dark:to-gray-900"/>
                </div>
            </Fade>
        </div>
    );
}
