import Image from 'next/image';
import HeroBg from '@/images/client/home/herobg.png';
import {Parallax} from 'react-scroll-parallax';
import {ArrowDownTrayIcon, PlayIcon} from '@heroicons/react/20/solid';
import Link from 'next/link';
import React from 'react';
import {motion} from 'framer-motion';
import Fade, {animate} from '@/base/animations/Fade';
import {path} from "@/routes/paths";

const container = {
    hidden: {opacity: 0, y: 0},
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.1,
            type: 'spring',
            bounce: 0.25,
        },
    },
};
const item = {
    hidden: {opacity: 0, y: -24},
    show: {
        opacity: 1,
        y: 0,
    },
};

export default function Hero() {
    return (
        <div
            className="relative px-4 sm:px-0 -mb-16 flex items-center justify-center  pb-32 text-center sm:h-screen pt-32 lg:pt-64 lg:h-auto lg:pb-64 ">
            <div>
                <motion.h1
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="title-main mx-auto block max-w-5xl font-bold tracking-tight text-black">
                    <motion.span variants={item} className="inline-block">
                        Lance.
                    </motion.span>
                    {' '}
                    <motion.span variants={item} className="inline-block">
                        Développe.
                    </motion.span>
                    {' '}
                    <motion.span
                        variants={item}
                        className=" inline-block whitespace-nowrap bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                        Propulse
                    </motion.span>
                    {' '}
                    <motion.span variants={item} className="inline-block">
                        ta start-up.
                    </motion.span>
                </motion.h1>

                <Fade animate={animate.fadeIn} delay={1}>
                    <p className="body-1 mx-auto mt-6 max-w-2xl text-gray-700">
                        L'agence digitale de ceux qui ont une idée incroyable. Lève des
                        fonds, atteins tes cibles et scale rapidement.
                    </p>
                </Fade>
                <Fade animate={animate.fadeInUp} delay={0.7}>
                    <div className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">

                        <Link href={path.contact.pitch}>
                            <button className="button-normal ">Pitch ton projet</button>
                        </Link>



                        <a href="https://elokenstartup.gumroad.com/l/roadmap" target="_blank" rel="noreferrer">
                            <button className="button-outline ">
                                <ArrowDownTrayIcon className="mr-2 h-4 w-4 text-violet-500"/>
                                Télécharger la Roadmap
                            </button>
                        </a>

                    </div>
                </Fade>
            </div>

            <Parallax
                translateY={['0px', '300px']}
                className="absolute bottom-12 left-1/3 -z-10 mx-auto w-[110%] sm:-bottom-12  lg:bottom-0 ">
                <Fade animate={animate.fadeIn} delay={2}>
                    <Image alt={''} src={HeroBg} className="object-cover object-center"/>
                </Fade>
            </Parallax>
        </div>
    );
}
