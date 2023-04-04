import {ArrowLeftIcon, ChevronRightIcon, HomeIcon} from '@heroicons/react/20/solid'
import Link from "next/link";
import {path} from "@/routes/paths";
import Fade, {animate} from '@/base/animations/Fade';


export default function Breadcrumb({pages}) {
    return (
        <>
            <div className="flex inline sm:hidden">
                <Link href={'./'} className={''}>
                    <button className="rounded-ui border border--gray-100 dark:border-gray-800 px-2 py-1 w-auto flex items-center w-auto">
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

            <nav className="hidden sm:flex" aria-label="Breadcrumb">
                <Fade animate={animate.fadeIn}>
                    <ol role="list" className="flex items-center space-x-4">
                        <li>
                            <div>
                                <Link
                                    href={path.root}
                                    className=" text-sm font-medium font-sans dark:text-gray-600 text-gray-400 dark:hover:text-gray-100 hover:text-gray-800"
                                >
                                    Accueil
                                </Link>
                            </div>
                        </li>
                        {pages.map((page) => (
                            <li key={page.name}>
                                <div className="flex items-center ">
                                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 dark:text-gray-600 text-gray-400"
                                                      aria-hidden="true"/>
                                    <Link
                                        href={page.href}
                                        className="ml-4  text-sm font-medium  font-sans dark:text-gray-600 text-gray-400 dark:hover:text-gray-100 hover:text-gray-800"
                                        aria-current={page.current ? 'page' : undefined}
                                    >
                                        {page.name}
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ol>
                </Fade>
            </nav>

        </>

    )
}
