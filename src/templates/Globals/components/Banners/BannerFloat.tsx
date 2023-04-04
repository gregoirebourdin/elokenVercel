import {XMarkIcon} from '@heroicons/react/20/solid'
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/solid";
import {useState} from "react";

export default function BannerFloat() {

    const [show, setShow] = useState(true)

    if (show) {
        return (
            <>
                <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:px-6 sm:pb-5 lg:px-8 z-50">
                    <div
                        className="pointer-events-auto group flex items-center justify-between gap-x-6 bg-primary-500 dark:bg-primary-600 py-2.5 px-6 sm:rounded-xl sm:py-3 sm:pr-3.5 sm:pl-4">
                        <p className="text-sm leading-6 text-white">
                            <Link href="#" className="flex items-center">
                                <strong className="font-semibold">Demandez votre Demo</strong>
                                <span className="hidden md:inline">
                                &nbsp;·&nbsp;Découvrez votre futur incroyable site web !
                            </span>

                                <ArrowRightIcon
                                    className="group-hover:translate-x-2 transition ml-3 w-4 h-4 inline"/>

                            </Link>
                        </p>
                        <button onClick={() => {
                            setShow(false)
                        }} className="-m-3 flex-none p-3 focus-visible:outline-offset-[-4px]">
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true"/>
                        </button>
                    </div>
                </div>
            </>
        )
    } else {
        return null
    }
}
