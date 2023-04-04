import {CheckIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import Fade, {animate} from "@/base/animations/Fade";

const pricings = [
    {
        title: 'Free',
        heading: 'Pour bien démarrer ! (à venir)',
        main: false,
        price: 'Gratuit',
        description: 'Découvre notre guide pour la recherche d’un bien éligible aux subventions. \n' +
            '100% gratuit \n',
        features: [],
        button: {
            text: "Bientôt disponible",
            href: '#',
            disabled: true,
        },
    },
    {
        title: 'Enterprise',
        heading: 'Casse tes barrières !',
        description: 'Libère-toi des blocages qui t’empêchent d’investir. \n' +
            'Nous te proposons un entretien personnel avec un membre de l’équipe durant lequel tu pourras lever tes doutes et poser tes questions pour investir avec sérénité.\n',
        main: true,
        price: '250,00 €',
        features: [
            "Entretien d’une heure personnalisé.",
        ],
        button: {
            text: 'Prendre rendez-vous',
            href: 'https://calendly.com/wimmob/casse-tes-barrieres',
            disabled: false,
        },
    },
]


export default function Pricing() {
    return (
        <>
            <div className="">
                <div className="grid lg:grid-cols-3 gap-8 gap-4">
                    {pricings.map((pricing, index) => (
                        <div key={index}>
                            <Fade animate={animate.fadeIn} delay={index / 3}>
                                <div
                                    className={"relative max-w-md md:max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-ui py-6 sm:py-8 lg:pt-12 px-4 sm:px-6 lg:px-8" + (pricing.main ? ' border-2 border-primary-400 dark:border-primary-700' : '')}
                                    >
                                    {pricing.main && (
                                        <div className="absolute top-0 left-6 -translate-y-1/2">
                                        <span className={"tag "
                                            + (pricing.main
                                                    ? ' tag-primary'
                                                    : ' tag-normal'
                                            )}>
                                            {pricing.title}
                                        </span>
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <div className="space-1">
                                            <span
                                                className="text-xl text-gray-400 dark:text-gray-600">{pricing.price}</span>
                                            <h3 className="mt-2 lg:mt-0 heading-4 text-gray-900 dark:text-white">{pricing.heading}</h3>
                                            <p className="body-3  text-gray-700 dark:text-gray-400">
                                                {pricing.description}
                                            </p>
                                        </div>

                                        <ul className="">
                                            {pricing.features.map((item, index) => (
                                                <li key={index}
                                                    className="flex items-center space-x-2 flex gap-2 body-4 text-gray-700 dark:text-gray-400">
                                                    <CheckIcon className="w-4 h-4 text-green-500"/>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        {!pricing.button.disabled ?  (
                                                <div className="pt-8">
                                                    <Link href={pricing.button.href}>
                                                        <button
                                                            className={"w-full" + (pricing.main ? ' button-primary' : ' button-normal')}>{pricing.button.text}</button>
                                                    </Link>
                                                </div>
                                        ) : (
                                            <div className="pt-8">
                                                <div >
                                                    <button

                                                        className={"w-full button-disabled"}>{pricing.button.text}</button>
                                                </div>
                                            </div>
                                        )}


                                    </div>
                                </div>
                            </Fade>
                        </div>


                    ))}

                </div>
            </div>
        </>
    )
}