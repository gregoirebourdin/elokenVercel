import '@/styles/globals.css';
// Import Index styles
import '@/styles/subStyles/loading.css';
import PublicLayout from '@/layouts/Layout';
import {DM_Sans, DM_Mono} from '@next/font/google';
import SimpleReactLightbox from 'simple-react-lightbox'

// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/effect-cards';

import React, {useEffect, useState} from 'react';
import {Toaster} from 'react-hot-toast';
import SwitchMode from "@/layouts/components/SwitchMode";
import {useRouter} from 'next/router';

const codefont = DM_Mono({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    variable: '--font-codefont',
    display: 'swap',
});

const bodyfont = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-bodyfont',
    display: 'swap',
});

const headingfont = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-headingfont',
    display: 'swap',
});

// ----------------------------------------------------------------------

export default function App({
                                Component,
                                pageProps: {session, ...pageProps},
                            }: any) {
    // set the theme to dark or light

    const [darkMode, setDarkMode] = useState(false)
    const [isPageChanging, setIsPageChanging] = useState(false)

    function toggleDarkMode() {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    // add the dm.variable and 'font-body' as class to the body tag
    useEffect(() => {
        document.body.classList.add(bodyfont.variable, 'font-body', 'scrollbar-hide');
    }, []);

    const router = useRouter()


    useEffect(() => {
        !darkMode ? document.body.classList.remove('dark') :
            document.body.classList.add('dark');
    }, [darkMode]);

    useEffect(() => {
        const handleRouteChange = (url, {shallow}) => {
            setIsPageChanging(true)
        }
        router.events.on('routeChangeStart', handleRouteChange)
        // then setIsPageChanging to false when the route changes
        router.events.on('routeChangeComplete', () => setIsPageChanging(false))
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
            setIsPageChanging(false)
        }

    }, [])

    return (
        <>
            <div className={`${bodyfont.variable + ' ' +  headingfont.variable + ' ' +  codefont.variable} font-body `}>
                <div className="min-h-screen bg-white dark:bg-gray-900 ">
                    <SimpleReactLightbox>
                        <PublicLayout darkMode={darkMode} isPageChanging={isPageChanging} toggleDarkMode={toggleDarkMode}>
                            <Toaster position="bottom-right"
                                     reverseOrder={false}
                                     containerStyle={{
                                         bottom: 70,
                                         right: 70,

                                     }}
                                     toastOptions={{
                                         className: 'z-[99] dark:bg-gray-800 dark:text-white text-gray-900 border border-gray-200 dark:border-gray-800',
                                     }}/>
                            <Component {...pageProps} />
                        </PublicLayout>
                    </SimpleReactLightbox>
                </div>
            </div>
        </>
    );
}
