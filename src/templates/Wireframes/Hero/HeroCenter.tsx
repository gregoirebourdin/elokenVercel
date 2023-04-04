import Image from 'next/image';
import Link from 'next/link';
import Fade, {animate} from "@/base/animations/Fade";


export default function HeroCenter({header, description, button1, button2, image}) {
    return (
        <div className="min-h-screen flex items-center relative">
            <div className="relative w-full z-10">
                <div className="px-4  sm:px-6 lg:px-8  py-32 ">
                    <div className="max-w-7xl mx-auto ">
                        <Fade animate={animate.fadeInLeft} delay={0.2}>
                        <div className="max-w-xl mx-auto text-center space-y-6">
                            <h1 className='heading-1 text-gray-900 dark:text-white'>{header}</h1>
                            <p className='body-1 text-gray-600 dark:text-gray-300'>{description}</p>
                            <div className=' flex flex-wrap gap-3 justify-center'>
                                <Link href={button1.href}>
                                    <button className='button-normal'>{button1.text}</button>
                                </Link>
                                {button2 &&  (
                                    <Link href={button2.href}>
                                        <button className='button-outline'>{button2.text}</button>
                                    </Link>
                                )}
                            </div>
                        </div>
                        </Fade>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-0 h-full w-full overflow-hidden left-0 right-0  z-0">
                <Fade animate={animate.fadeIn} delay={0.7}>
                    <div className="w-full h-full ">
                        <Image
                            aria-hidden
                            className="object-cover  w-full h-full object-center"
                            src={image}
                            alt={header}
                        />
                    </div>
                </Fade>
            </div>
            <div className="absolute inset-0 w-full h-full dark:bg-black/50 bg-white/50  z-0"/>
        </div>
    );
}