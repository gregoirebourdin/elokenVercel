import {useEffect, useState} from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {path} from "@/routes/paths";
import {useRouter} from "next/router";
import Link from "next/link";
import SwitchMode from "@/layouts/components/SwitchMode";
import Image from "next/image";



const navigation = [
    /*    {
            title: 'Tarifs',
            href: path.root + '#pricing's
        },*/
    {
        title: 'Blog',
        href: path.blog.root
    },

    {
        title: 'Portfolio',
        href: path.portfolio.root
    },
    {
        title: 'Contact',
        href: path.contact.root
    },

]

export default function NavBar({darkMode, toggleDarkMode, Logo, LogoWhite, Icon, IconWhite }) {
    const router = useRouter()
    const [isHidden, setIsHidden] = useState(false)
    const [scrollPercentage, setScrollPercentage] = useState(0)
    let [openModal, setOpenModal] = useState(false)


    let prevScrollpos = window.scrollY;

    const handleScroll = () => {

        const currentScrollPos = window.scrollY
        setScrollPercentage(currentScrollPos / (document.body.offsetHeight - window.innerHeight) * 100)
        if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
            setIsHidden(false)
        } else if (currentScrollPos >= 100) {
            setIsHidden(true)
        }
    }
    useEffect (() => {
        setScrollPercentage(0)
    }, [router])


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })


    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header id='navbar' className={"fixed w-screen transition-all  border-b duration-500 top-0 z-40 " +
            (isHidden ? ' -top-full ' : ' pt-6 ') + (prevScrollpos >= 100 ? ' bg-white shadow-lg border-transparent dark:bg-gray-900 pt-0 dark:border-gray-700 ' : ' border-transparent')}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 py-2 px-6 lg:px-8"
                 aria-label="Global">
                <div className="flex lg:flex-1">

                    <Link href={path.root} className="flex lg:flex-1" >
                        <span className="sr-only">Démo by Eloken</span>
                        <Image
                            className={"w-auto transition-all duration-500" + (isHidden || prevScrollpos >= 100 ? ' h-4 w-auto sm:h-6' : ' h-6 w-auto sm:h-8')}
                            src={darkMode ? LogoWhite : Logo}
                            alt={process.env.NEXT_PUBLIC_WEBSITE_NAME + ' - Logo'}
                        />

                    </Link>
                </div>
                <div className="hidden lg:flex transition duration-500 text-gray-900 dark:text-white lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.title} href={item.href} className="text-sm font-semibold leading-6 hover:text-primary-500">
                            {item.title}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-1 items-center justify-end gap-x-6">
                    <Link
                        href="#"
                        className={'transition button-nav'}
                    >
                        Réserver une Démo
                    </Link>
                        <SwitchMode darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50 bg-primary-500/10" />
                <Dialog.Panel
                    className={"fixed inset-y-0 right-0 w-full z-[99] overflow-y-auto bg-white dark:bg-gray-900 px-6 sm:max-w-md sm:ring-1 sm:ring-gray-900/10" }
                >
                    <div className={"flex items-center gap-x-6" + (isHidden || prevScrollpos >= 100 ? ' py-2' : ' py-8')}>
                        <Link href={path.root} className="flex items-center gap-x-6" >
                            <span className="sr-only">Démo by Eloken</span>
                            <Image
                                className="h-8 w-8"
                                src={darkMode ? IconWhite : Icon}
                                alt={process.env.NEXT_PUBLIC_WEBSITE_NAME + ' - Logo'}
                                width={350}
                                height={350}
                            />
                        </Link>
                        <Link
                            href="#"
                            className={'ml-auto transition button-nav'}
                        >
                            Réserver une Démo
                        </Link>
                        <SwitchMode darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 transition duration-500 text-gray-900 dark:text-white lg:gap-x-12">
                                {navigation.map((item) => (
                                    <Link key={item.title} href={item.href} className="-mx-3 block  py-2 px-3  text-sm font-semibold leading-6 hover:text-primary-500">
                                        {item.title}
                                    </Link>
                                ))}
                            </div>

                            <div className="block py-6">
                                <Link
                                    href="#"
                                    className="-mx-3 block  transition duration-500 text-primary-500 py-2 px-3  text-sm font-semibold leading-6 hover:text-primary-600"
                                >
                                    Réserver une Démo
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
            <div className="fixed top-0 left-0 bg-primary-500 h-0.5 z-50  transition "
                 style={{width: scrollPercentage + '%'}}/>

        </header>
    )
}
