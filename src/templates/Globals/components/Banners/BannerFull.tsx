import {Transition} from '@headlessui/react';
import {XMarkIcon} from '@heroicons/react/20/solid'
import {ArrowRightIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios/index";

export default function BannerFull({banner}) {


    const [show, setShow] = useState(true)

    if (show && banner) {
        return (
            <>

                <div className="fixed group inset-x-0 bottom-0 z-50">
                    <div
                        className="flex items-center gap-x-6 bg-gray-900 dark:border-t dark:border-gray-700 py-2.5 px-6 sm:px-3.5 sm:before:flex-1">
                        <p className="text-sm leading-6 text-white">
                            <Link href={banner.buttonUrl} className="flex items-center">
                                <strong className="font-semibold">{banner.title}</strong>

                                <span className="hidden md:inline">
                                &nbsp;·&nbsp;{banner.buttonText}
                            </span>

                                <ArrowRightIcon
                                    className="group-hover:translate-x-2 transition ml-3 w-4 h-4 inline"/>

                            </Link>
                        </p>
                        <div className="flex flex-1 justify-end">
                            <button onClick={() => {
                                setShow(false)
                            }}
                                    className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                </div>

            </>
        )
    } else {
        return null
    }
}
