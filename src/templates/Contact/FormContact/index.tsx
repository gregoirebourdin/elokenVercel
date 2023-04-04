import { useState } from 'react';
import { Transition } from '@headlessui/react';
import {ContactForm} from './components';
import Link from "next/link";
import {ArrowLeftIcon} from "@heroicons/react/20/solid";
import {path} from "@/routes/paths";

export default function FormContact({pages}: any) {
    const [animation, setAnimation] = useState(false);
    function launch() {
        setAnimation(true);
    }
    return (
        <>
        <div className="relative">
            <div className="flex inline absolute top-4 left-4">
                <Link href={path.root} className={''}>
                    <button className="rounded-ui border border-gray-200 dark:border-gray-800 px-2 py-1 w-auto flex items-center w-auto">
                        <ArrowLeftIcon className="h-4 w-4 flex-shrink-0 dark:text-gray-700 text-gray-400"
                                       aria-hidden="true"/>
                        <span
                            className="ml-1  text-sm font-medium  font-sans dark:text-gray-700 text-gray-400 dark:hover:text-gray-100 hover:text-gray-800"
                        >
                            {pages.length >= 2 ? pages[pages.length - 2].name : 'Accueil'}
                        </span>
                    </button>
                </Link>
            </div>
            <div className=" min-h-screen">
                <div className="">
                    <Transition
                        show={!animation}
                        enter="transition-opacity duration-500 delay-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-250"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="absolute w-full p-6 max-w-2xl top-1/2 left-1/2 z-10 -translate-y-1/2 -translate-x-1/2 transform">
                        <div className="relative space-y-12 z-10">
                            <div className="sm:text-center">
                                <h2 className="heading-2 dark:text-white text-gray-900 mb-4">
                                    Contactez-nous !
                                </h2>
                            </div>
                            <div className=" mx-auto     sm:flex ">
                                <div className="min-w-0 flex-1">
                                    <ContactForm launch={launch} />
                                </div>
                            </div>
                        </div>
                    </Transition>
                    <Transition
                        show={animation}
                        enter="transition-opacity duration-500 delay-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-250"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="absolute top-1/2 left-1/2 z-10 -translate-y-1/2 -translate-x-1/2 transform">
                        <div className="relative z-10">
                            <div className="sm:text-center">
                                <span className="tag tag-primary mb-4">Merci</span>
                                <h2 className="heading-3 dark:text-white text-gray-900">
                                    A très vite !
                                </h2>
                                <p className="body-2 text-gray-500">
                                    Rendez-vous dans votre boîte mail dans quelques jours️️
                                </p>
                            </div>
                        </div>
                    </Transition>
                </div>


            </div>
        </div>
        </>

    );
}
