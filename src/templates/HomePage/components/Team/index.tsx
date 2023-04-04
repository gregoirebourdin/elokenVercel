import Image from 'next/image';


import backgroundImage from '@/images/violet.jpeg';
import ScreenShotApp from '@/images/client/home/screenshot-app.jpg';
import TeamPhoto from '@/images/client/home/team.png';
import TeamBg from '@/images/client/home/teambg.png';
import {Parallax} from 'react-scroll-parallax';
import Fade, {animate} from '@/base/animations/Fade';

export default function Team() {
    return (
        <div className="">
            <div className="group mx-auto ">
                <div className="relative grid overflow-hidden  bg-gray-900 ">
                    <div className="mx-auto relative z-10 w-full max-w-7xl items-center justify-center ">
                        <div className="lg:self-center ">
                            <div
                                className="mx-auto max-w-2xl space-y-6 px-6 pt-10 text-center  sm:px-16 sm:pt-16  xl:px-20 ">
                                <span className="tag bg-gray-800 text-gray-400 shadow-lg">
                                  Made by Eloken
                                </span>
                                <h2 className="title-3 text-white">
                                    Une équipe (de choc) au service de ta réussite
                                </h2>
                                <p className="body-3 text-gray-500">
                                    On a choisit de ne bosser qu'avec les innovateur·trice·s, les
                                    génies, les game-changers comme toi, parce que c'est là qu'on
                                    s'éclate le plus. Alors mets nous au défi de rélaiser ton
                                    projet !
                                </p>
                            </div>
                        </div>
                        <Fade animate={animate.fadeIn} delay={0.5}>
                            <div className=" mx-auto mt-12 w-full">

                                <Image className="w-full relative z-10" src={TeamPhoto} alt="Apgepjg"/>

                            </div>
                        </Fade>
                    </div>
                    <Parallax
                        translateY={['300px', '0px']}
                    >
                        <Image className=" w-full max-w-6xl left-1/2 -translate-x-1/2 absolute bottom-0 z-0" src={TeamBg} alt="Eloken - mesh background"/>
                    </Parallax>

                </div>
            </div>
        </div>
    );
}
