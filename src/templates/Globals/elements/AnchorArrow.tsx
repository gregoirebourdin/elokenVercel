import {ArrowRightIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

export default function AnchorArrow({text, href}) {
    return (
        <>
            {href ? (
                <Link href={href}
                      className="mt-2 group flex text-sm font-bold text-gray-900 lg:opacity-50 transition duration-500 hover:opacity-100">
                    <div className="relative w-auto p-0.5">
                        <div className="absolute left-0 bottom-0 h-0.5 w-[0%] rounded bg-gray-900 dark:bg-gray-50 transition-all duration-500 group-hover:w-[70%] group-hover:bg-primary-500 " />
                        <div className="0 relative z-10 flex gap-2 text-gray-900 dark:text-gray-200">
                            {text}
                            <ArrowRightIcon className="w-4 transform transition group-hover:translate-x-1" />
                        </div>
                    </div>
                </Link>

            ) : (
                <div className="mt-2 group flex text-sm font-bold text-gray-900  lg:opacity-50 transition duration-500 group-hover:opacity-100">
                    <div className="relative w-auto p-0.5">
                        <div className="absolute left-0 bottom-0 h-0.5 w-[0%] rounded bg-gray-900 dark:bg-gray-50 transition-all duration-500 group-hover:w-[70%] group-hover:bg-primary-500 " />
                        <div className="0 relative z-10 flex gap-2 text-gray-900 dark:text-gray-200">
                            {text}
                            <ArrowRightIcon className="w-4 transform transition group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}