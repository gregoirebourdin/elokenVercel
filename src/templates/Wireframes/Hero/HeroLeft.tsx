import Image from 'next/image';
import Link from 'next/link';
import Fade, {animate} from "@/base/animations/Fade";


export default function HeroLeft({header, description, button1, button2, image}) {
    return (
        <>

            <div className="min-h-screen flex items-center relative">
                <div className="relative w-full z-10">

                    <div className="px-4  sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <div className="lg:flex items-center justify-center gap-12 py-12">
                            <Fade animate={animate.fadeInLeft} delay={0.2}>
                                <div className="max-w-xl text-center lg:text-left mx-auto lg:m-0 space-y-6 py-24 sm:py-32 lg:py-0">
                                    <h1 className='heading-1 text-gray-900 dark:text-white'>
                                        {header}
                                    </h1>
                                    <p className='body-1 text-gray-600 dark:text-gray-300'>
                                        {description}
                                    </p>
                                    <div className='flex flex-wrap justify-center lg:justify-start gap-3'>
                                        <Link href={button1.href}>
                                            <button className='button-normal'>{button1.text}</button>
                                        </Link>
                                        {button2 && (
                                            <Link href={button2.href}>
                                                <button className='button-outline'>{button2.text}</button>
                                            </Link>
                                        )}

                                    </div>
                                </div>
                            </Fade>
                            <Fade animate={animate.fadeIn} delay={0.7}>
                                <div className=" w-full overflow-hidden">

                                    <Image
                                        className="object-cover rounded-ui w-full h-full object-center"
                                        src={image}
                                        alt={header}
                                    />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>

            </div>

        </>


    );
}