import ElokenWhite from '@/medias/logos/ElokenWhite.png'
import Image from 'next/image'
import {path} from "@/routes/paths";
import {useEffect, useState} from "react";
import Link from "next/link";
import axios from "axios";


export default function Footer({darkMode, Logo, LogoWhite}: any) {

    const [data, setData] = useState<any>([]);

    useEffect(() => {
        callAPI();
    }, []);
    const callAPI = async () => {
        try {
            const res = await axios.get('/api/legals')
            setData(res.data)
        } catch (err) {
            console.log(err);
        }
    };


    const navigation = {

        solutions: [
            {title: 'Tarifs', href: path.root + '#pricing'},
            {title: 'Prendre RDV', href: path.contact.root},
            {title: 'Espace membres', href: '#'},
        ],
        support: [
            {title: 'Blog', href: path.blog.root},
            {title: 'FAQ', href: path.faq.root},
            {title: 'Avis clients', href: path.testimonials.root},
        ],
        company: [
            {title: "L'équipe", href: path.team.root},
            {title: 'Portfolio', href: path.portfolio.root},
            {title: 'Recrutement', href: path.jobs.root},
            {title: 'Evènements', href: path.events.root},
        ],
        legal: [
            {title: 'Mentions Légales', href: path.legal.root},

        ],
        social: [

            {
                title: 'Instagram',
                href: data?.project?.instagramContact,
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            },
            {
                title: 'Twitter',
                href: data?.project?.twiiterContact,
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                ),
            },
            {
                title: 'LinkedIn',
                href: data?.project?.linkedinContact,
                icon: (props) => (
                    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                        <path
                            fillRule="evenodd"
                            d="M8.5 6.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm-1.5 9.75v-6.5h3v6.5h-3zm1.5-7.75a1 1 0 11-2 0 1 1 0 012 0zm7.5 7.75v-3.25c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25V16.5h-3v-6.5h3v.75c.34-.53.98-.75 1.5-.75 1.38 0 2.5 1.12 2.5 2.5v3.75h-3z"
                            clipRule="evenodd"
                        />
                    </svg>
                ),
            }
            // {
            //   title: 'YouTube',
            //   href: '#',
            //   icon: (props) => (
            //       <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            //         <path
            //             fillRule="evenodd"
            //             d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            //             clipRule="evenodd"
            //         />
            //       </svg>
            //   ),
            // },
        ],
    }



    return (
        <footer className="relative bg-gray-200 dark:bg-gray-900 dark:border-t dark:border-gray-800"
                aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid gap-6 md:flex xl:grid place-items-between  justify-between">
                        <div className="space-y-4">
                            <Image
                                className="w-24"
                                src={darkMode ? LogoWhite : Logo}
                                alt={process.env.NEXT_PUBLIC_WEBSITE_NAME + ' - Logo'}
                            />
                            <p className="body-5 xl:w-52 max-w-md text-gray-600 dark:text-gray-400 ">{data?.project?.description}</p>

                        </div>
                        <div className="grid items-end ">
                            <div className="flex items-end space-x-6">
                                {navigation.social.map((item) => (
                                    <a key={item.title} href={item.href}
                                       className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-500">
                                        <span className="sr-only">{item.title}</span>
                                        <item.icon className="h-6 w-6" aria-hidden="true"/>
                                    </a>
                                ))}
                            </div>

                            <p className="body-5 mt-2">
                                Fait avec ❤ par{' '}
                                <a href="https://eloken.com" target={"_blank"} rel={"noreferrer noopener"}
                                   className="font-bold">
                                    Eloken
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.title}>
                                            <Link href={item.href}
                                                  className="text-sm leading-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Support</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.support.map((item) => (
                                        <li key={item.title}>
                                            <Link href={item.href}
                                                  className="text-sm leading-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">L'entreprise</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map((item) => (
                                        <li key={item.title}>
                                            <Link href={item.href}
                                                  className="text-sm leading-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Legal</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map((item) => (
                                        <li key={item.title}>
                                            <Link href={item.href}
                                                  className="text-sm leading-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                    {/*AFFICHER LES DOCS LEGAUX ___________________________________*/}


                                    {data?.legals?.map((item) => (
                                        <li key={item.title}>
                                            <Link href={path.legals.slug + item.slug}
                                                  className="text-sm leading-6 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


// RECUPERER LES DOCS LEGAUX ______________________________________________________

// export async function getServerSideProps() {
//   const legals = await prisma.legal.findMany();
//   return {
//     props: { legals : JSON.parse(JSON.stringify(legals)) }, // will be passed to the page component as props
//   }
// }