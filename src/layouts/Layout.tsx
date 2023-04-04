import {ParallaxProvider} from 'react-scroll-parallax';
import {useRouter} from 'next/router';
import {ContactLinks} from '@/templates/Globals/components';
import {Footer, Loader, NavBar} from './components';
import LogoWhite from "@/logos/LogoWhite.png";
import Logo from "@/logos/Logo.png";
import Icon from "@/logos/Icon.png";
import IconWhite from "@/logos/IconWhite.png";


export default function PublicLayout({children, darkMode, isPageChanging, toggleDarkMode}) {


    const router = useRouter();
    return (
        <>


            {router.pathname === '/links' ? (
                <div className=" overflow-hidden  bg-gray-50 dark:bg-gray-900 lg:flex lg:h-screen">
                    <div className="relative flex flex-col bg-gray-200 dark:bg-gray-800 px-2 lg:h-screen lg:w-72">
                        <div
                            className=" flex h-full w-full flex-col items-start gap-2  py-6 py-12 px-2 lg:gap-8">
                            <div className="flex  w-full ">
                                <ContactLinks darkMode={darkMode}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className="scrollbar  h-full  w-full  overflow-x-hidden rounded-l-3xl ">
                        <div
                            className=" relative mx-auto h-full max-w-6xl   lg:max-h-screen  ">
                            {children}
                        </div>
                    </div>
                </div>
            ) : router.pathname === '/contact' ? (
                <>
                    {children}
                </>
            ) : (

                <ParallaxProvider>
                    <div className="bg-gray-50 dark:bg-gray-900 overflow-x-hidden min-h-screen max-w-screen bg-gray-50">
                        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} Logo={Logo} IconWhite={IconWhite} LogoWhite={LogoWhite} Icon={Icon}/>
                        <div className="relative z-10  pb-0">{children}</div>
                        <Footer darkMode={darkMode} Logo={Logo} LogoWhite={LogoWhite}/>
                        {isPageChanging && (
                            <Loader darkMode={darkMode}/>
                        )}


                    </div>
                </ParallaxProvider>
            )}

        </>
    );
}
