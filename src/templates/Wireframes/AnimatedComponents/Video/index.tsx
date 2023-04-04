import {Dialog, Transition} from '@headlessui/react';
import {Fragment, useState} from 'react';
import {XMarkIcon} from '@heroicons/react/20/solid';
import VideoModal from './VideoModal';
import Image from "next/image";
import {PlayIcon} from "@heroicons/react/24/outline";
import Fade, {animate} from "@/base/animations/Fade";

export default function Index({videoSrc, thumbnail, altText}) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }


    return (
        <>
            <Fade animate={animate.fadeInUp}>
            <div onClick={openModal} className="relative cursor-pointer group flex items-center justify-center">
                <div
                    className=" w-full  rounded-ui overflow-hidden aspect-h-9 aspect-w-16 ">
                    <Image
                        className="inset-0 object-cover object-center h-full w-full "
                        src={thumbnail}
                        alt={altText}
                    />

                </div>
                <div className="absolute  z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform ">
                    <div
                        className="rounded-full bg-white/50 dark:bg-gray-900/50 w-24 h-24 group-hover:scale-125 transition flex backdrop-blur items-center justify-center">
                        <PlayIcon className={'w-6 h-6 text-gray-900 dark:text-white'}/>
                    </div>
                </div>
            </div>
            </Fade>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-black/90  z-50"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto z-[99]">
                        <div className="flex min-h-full items-center justify-center text-center sm:p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95">
                                <Dialog.Panel className=" bg-black sm:rounded-ui ">
                                    <VideoModal videoSrc={videoSrc} thumbnail={thumbnail}/>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>

                    <div className="fixed top-8 right-4 z-50">
                        <button onClick={closeModal}>
                            <XMarkIcon className={'h-8 w-8 text-white'}/>
                        </button>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
