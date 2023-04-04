import clsx from 'clsx';

// import { Container } from '@/templates/client/Globals/Container';
import BgPricing from '@/images/client/home/pricing/bgPricing.png';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Fade, { animate } from '@/base/animations/Fade';
import {path} from "@/routes/paths";

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className
      )}>
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Plan({
  name,
  price,
  description,
  href,
  features,
  action,
  mainFeatureTitle,
  mainDescription,
  featured = false,
}) {
  return (
    <section
      className={clsx(
        ' rounded-3xl bg-gray-800 px-6 sm:px-8 max-w-md mx-auto lg:max-w-none lg:mx-0',
        featured
          ? 'relative order-first border-2 border-gray-50 py-8 lg:order-none'
          : 'py-8'
      )}>
      {featured && (
        <>
          <div className="absolute top-0 left-1/2 mx-auto -translate-y-1/2 -translate-x-1/2 transform">
            <span className="tag bg-gray-50 px-4 py-2 text-gray-900 shadow-lg">
              Populaire
            </span>
          </div>
          <Image
            className="absolute inset-0 z-0 h-full w-full rounded-3xl object-cover object-center"
            alt=""
            src={BgPricing}
          />
        </>
      )}
      <div className="z-10 flex flex-col">
        <h3 className="title-5  z-10 mt-5 text-white">{name}</h3>
        <p
          className={clsx(
            'z-10 mt-2 text-base  ',
            featured ? 'text-white' : 'text-gray-400'
          )}>
          {description}
        </p>

        <p className="font-display relative z-10 order-first text-4xl font-light tracking-tight text-white">
          {price === '35 000' && (
            <span className="absolute -top-4 text-sm text-gray-500 ">
              Jusqu'à{' '}
            </span>
          )}
          {price}
          {price !== 'Sur Devis' && (
            <span className=" text-sm ">{',00 € HT'}</span>
          )}
        </p>
        <ul
          role="list"
          className={clsx(
            'z-10 mt-10 flex flex-col gap-y-3 text-sm',
            featured ? 'text-white' : 'text-gray-200'
          )}>
          {features &&
            features.map(feature => (
              <li key={feature} className="flex">
                <CheckIcon
                  className={featured ? 'text-white' : 'text-gray-400'}
                />
                <span className="text-sm ml-4">{feature}</span>
              </li>
            ))}
          {mainFeatureTitle && (
            <li
              className={
                features
                  ? ' mt-4 border-t border-gray-700 pt-4'
                  : 'border-t border-gray-700 pt-4'
              }>
              <div
                className=" flex items-center  bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500
          bg-clip-text text-transparent">
                <CheckCircleIcon className="h-6 w-6 text-violet-500 " />
                <span className="title-5 ml-1 sm:ml-2">{mainFeatureTitle}</span>
              </div>
              <span className="text-gray-400">{mainDescription}</span>
            </li>
          )}
        </ul>
        <div className="z-10">
          <Link href={href}>
            <button className="button-white mt-8 w-full">{action}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-gray-900 py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className={undefined}>
        <div className="md:text-center max-w-lg mx-auto">
          <h2 className="heading-1 text-white">Une offre claire.</h2>
          <p className="mt-4 text-lg text-gray-400">
            Pas de surprise, on a voulu faire simple pour que tu puisses
            préparer ton prévisionnel sereinement
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 items-start gap-y-10 sm:mx-auto px-4 lg:px-0 lg:max-w-7xl lg:grid-cols-3  gap-x-4 xl:gap-x-8  ">
          <Fade animate={animate.fadeInDown} delay={0.3}>
            <Plan
                featured
                name="Launch"
                price="3 500"
                description="Parfait pour ton démarrage, lorsque tu dois convaincre et lever des fonds"
                href={path.contact.demo}
                action="Demander une démo"
                features={[
                    '1 Landing page unique',
                    '++ Fonctionnalités',
                    '1 Espace administrateur',
                    '1 Design sur mesure',
                    '1 Copywriting sur mesure',
                    '1 An d’hebergement offert',
                    'Analytics en temps réel',
                    'Accès sans engagements',
                ]} mainFeatureTitle={undefined} mainDescription={undefined}            />
          </Fade>
          <Fade animate={animate.fadeInDown} delay={0.6}>
            <Plan
              name="Grow"
              price="35 000"
              description="Tu viens de lever des fonds et il te faut une première version de ton app / site"
              href={path.contact.pitch}
              action="Prendre RDV"
              mainFeatureTitle="Le MVP de ton idée"
              mainDescription="Ton app ou ton site web prend vie dans sa première version et on fait tout pour rester le moins cher possible. On acompagne le lancement de ton site avec une campagne Ads pour te faire connaitre."
              features={[
                'Réflexion UX',
                'Rédaction web',
                'UI Design',
                'Développement Bêta',
                'Développement Alpha',
                'Campagne Ads',
              ]}
            />
          </Fade>
                <Fade animate={animate.fadeInDown} delay={0.9}>
                    <Plan
                        name="Rise"
                        price="Sur Devis"
                        description="Tu es prêt à lancer la version Beta de ton app / site et d’entrer dans la cour des"
                        href={path.contact.pitch}
                        action="Parler de mon projet"
                        mainFeatureTitle="Tout ce que tu veux"
                        mainDescription="Tu as une idée, on la réalise. Aussi simple que ça." features={undefined}            />
                </Fade>

        </div>
      </div>
    </section>
  );
}
