import Link from 'next/link';
import Image from "next/image";
import Logo from "@/medias/logos/Logo.png";
import LogoWhite from "@/medias/logos/LogoWhite.png";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {path} from "@/routes/paths";

const contactLinks = [
  {
    title: '06 00 00 00 00',
    icon: PhoneIcon,
    href: 'tel:0600000000',
  },
  {
    title: 'hello@eloken.com',
    icon: EnvelopeIcon,
    href: 'mailto:hello@eloken.com',
  },
  {
    title: '@eloken.fr',
    icon: AiFillInstagram,
    href: 'https://www.instagram.com/eloken.fr/',
  },
  {
    title: 'Linkedin Eloken',
    icon: AiFillLinkedin,
    href: 'https://www.linkedin.com/company/eloken/',
  },
];

export default function ContactLinks({darkMode}) {



  return (
    <>
      <div className="hidden lg:block">
        <nav className="mx-auto space-y-8 px-2 lg:flex-1" aria-label="Sidebar">
          <div className="grid grid-cols-1 justify-start gap-1">
            <div className="w-full mb-12 p-4 overflow-hidden">
              <Link href={path.root}>
              <Image
                  alt={process.env.NEXT_PUBLIC_WEBSITE_NAME + ' - Logo'}
                  src={darkMode ? LogoWhite : Logo}
                  className="w-24 object-cover object-center"
              />
                </Link>
            </div>

            {contactLinks.map((item, index) => (
              <a
                target={'_blank'}
                key={index}
                href={item.href}
                className="group flex transform items-center rounded-xl px-3 py-2 text-sm font-medium text-gray-400 transition hover:translate-x-2 hover:bg-gray-300 dark:hover:bg-gray-700 hover:bg-gray-800 hover:text-gray-800 dark:hover:text-gray-50 "
                rel="noreferrer">
                <item.icon
                  className="mr-3 h-4 w-4 flex-shrink-0 text-gray-400 hover:text-gray-600 dark:text-gray-600 group-hover:text-gray-700 dark:group-hover:text-gray-50"
                  aria-hidden="true"
                />
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
      <div className="mx-auto lg:hidden">
        <nav className="mx-auto  px-2 lg:flex-1" aria-label="Sidebar">
          <div className="w-32 mb-4 mx-auto p-4 overflow-hidden">
            <Link href={path.root}>
              <Image
                  alt={process.env.NEXT_PUBLIC_WEBSITE_NAME + ' - Logo'}
                  src={darkMode ? LogoWhite : Logo}
                  className="w-20 object-cover object-center"
              />
            </Link>
          </div>
          <div className="flex w-full overflow-x-scroll items-center justify-center gap-3 sm:w-full">

            {contactLinks.map((item, index) => (
              <a
                target={'_blank'}
                key={index}
                href={item.href}
                className="group flex h-12  w-12 transform items-center justify-center rounded-xl border border-gray-700 text-sm font-medium text-gray-400 transition hover:bg-gray-800 hover:bg-gray-800 hover:text-gray-50 hover:text-gray-50"
                rel="noreferrer">
                <item.icon
                  className="mx-auto  h-4 w-4 flex-shrink-0 text-gray-600 hover:text-gray-400 group-hover:text-gray-50"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
