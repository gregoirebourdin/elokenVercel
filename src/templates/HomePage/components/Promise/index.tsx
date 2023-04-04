import {Parallax} from 'react-scroll-parallax';
import Image from 'next/image';
import PromiseBg from '@/images/client/home/promisebg.png';
import Link from 'next/link';
import {ArrowLongRightIcon, ArrowRightIcon} from '@heroicons/react/20/solid';
import ProcessBg from '@/images/client/home/processbg.png';
import One from '@/images/client/home/promise/1.png';
import Team from '@/images/client/home/promise/team.jpg';
import Bolt from '@/images/client/home/promise/4.png';
import Diamond from '@/images/client/home/promise/5.png';
import Lock from '@/images/client/home/promise/6.png';
import EcoFriendly from '@/images/client/home/promise/ecofriendly.png';
import SurMesure from '@/images/client/home/promise/surmesure.png';
import Moderne from '@/images/client/home/promise/moderne.png';
import Performant from '@/images/client/home/promise/performant.png';
import Securise from '@/images/client/home/promise/securise.png';
import Numero1 from '@/images/client/home/promise/numero1.png';
import Fade, {animate} from '@/base/animations/Fade';

const steps = [
    {
        image: '',
        title: 'Avec toi !',
        illustration: Team,
        description:
            "Tu n'es plus seul·e ! On est là pour te livrer un produit incroyable mais aussi pour t'accompagner à réussir. Notre seul but c'est que tu cartonnes.",
        href: 'https://elokenstartup.gumroad.com/l/roadmap',
        button: 'Télécharger la Roadmap'
    },
    // {
    //   image: One,
    //   illustration: Numero1,
    //   title: 'Numéro 1',
    //   description:
    //     "Il est temps de performer comme jamais sur Google grâce à un site qui respecte les dernières normes de l'industrie.",
    //   href: '/services/seo',
    // },
    {
        image: '',
        illustration: Moderne,
        title: 'Moderne',
        description:
            'On a pas fait les choses à moitié : On développe sur les mêmes technologies que Binance, Netflix, Twitch, Uber, Coinbase...',
        href: undefined,
        button: 'En savoir plus'
    },
    {
        image: '',
        title: 'Performant',
        illustration: Performant,
        description:
            'Un site qui charge rapidement et qui ne plante pas. Une expérience utilisateur fluide et mémorable.',
        href: undefined,
        button: 'En savoir plus'
    },

    // {
    //   image: Tree,
    //   illustration: EcoFriendly,
    //   title: 'Eco-responsable',
    //   description:
    //     "Il est plus que temps que le digital se mette au vert. Du lowcode, des fichiers optimisés et des serveurs en Europe pour réduire l'impact environnemental de ton site. Et surtout Cocorico : 100% Made in France",
    // },
    {
        image: Lock,
        illustration: Securise,
        title: 'Sécurisé',
        description:
            'Les dernières normes de sécurité sont appliquées à ton site / app. Pas de faille, pas de piratage, pas de soucis.',
        href: undefined,
        button: 'En savoir plus'
    },
    // {
    //   image: '',
    //   illustration: SurMesure,
    //   title: 'Sur-mesure',
    //   description:
    //     'Tu as une idée ? On la réalise. Tu as un besoin ? On le réalise. Tu as un projet ? On le réalise. Tu as un problème ? On le résout.',
    //   href: '/services/developpement',
    // },
];

export default function Promise() {
    return (
        <div className="relative w-full px-2 sm:px-0">
            <div className="mx-auto max-w-5xl pb-12 sm:py-24 lg:py-32">
                <div className="mx-auto max-w-lg space-y-6 py-12 text-center">
                    <h2 className="heading-1 text-gray-900">
                        <Fade animate={animate.fadeIn}>
                            <span className="block">Tout simplement</span>
                        </Fade>
                        <Fade animate={animate.fadeInDown}>
              <span
                  className="title-main block bg-gradient-to-r from-pink-500 via-violet-500 to-sky-500 bg-clip-text text-transparent">
                Puissant
              </span>
                        </Fade>
                    </h2>
                    <p className="body-1 text-gray-500">
                        On ne pouvait que te proposer le meilleur de ce qui se fait dans le
                        web
                    </p>
                </div>

                <div className="mt-6 sm:mt-12 grid gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="mx-auto max-w-lg gap-8 px-6 odd:flex-row-reverse lg:flex lg:max-w-4xl 2xl:max-w-5xl">
                            <div
                                className="relative flex aspect-[16/9] w-full shrink-0 items-center justify-center overflow-hidden rounded-t-2xl font-bold text-white  lg:w-1/2  lg:rounded-2xl xl:w-2/3">
                                <Fade animate={animate.fadeIn}>
                                    <Image
                                        className="absolute inset-0 h-full w-full  object-cover object-top"
                                        alt={step.title}
                                        src={step.illustration}
                                    />
                                </Fade>
                                {step.title === 'Numéro 1' && (
                                    <Parallax
                                        translateY={['-75px', '75px']}
                                        className="absolute top-0 left-0 w-1/2">
                                        <Image
                                            alt={''}
                                            src={step.image}
                                            className="transform object-cover object-center"
                                        />
                                    </Parallax>
                                )}

                                {step.title === 'Sécurisé' && (
                                    <Parallax
                                        translateY={['-75px', '75px']}
                                        className="absolute top-0 right-6 sm:right-12 w-1/2 ">
                                        <Image
                                            alt={''}
                                            src={step.image}
                                            className="transform object-cover object-center"
                                        />
                                    </Parallax>
                                )}
                            </div>
                            <div
                                className="grid  w-full shrink-0 flex-col rounded-b-xl bg-white p-6 lg:w-1/2 lg:rounded-xl xl:w-1/3 ">
                                <div>
                                    <h3 className="title-3 mb-3  text-gray-900">{step.title}</h3>
                                    <p className="body-3 text-gray-500">{step.description}</p>
                                </div>
                                <div className="flex items-end">
                                    {step.href && (
                                        <Link href={step.href}
                                              className="mt-2 group mt-12 flex text-sm font-bold text-gray-900 opacity-100 transition duration-500 hover:opacity-70">
                                            <div className="relative w-auto p-0.5">
                                                <div
                                                    className="absolute left-0 bottom-0 h-0.5 w-[0%] rounded bg-gray-900 transition-all duration-500 group-hover:w-[70%] "/>
                                                <div className="0 relative z-10 flex gap-2 text-gray-900">
                                                    {step.button}
                                                    <ArrowRightIcon
                                                        className="w-4 transform transition group-hover:translate-x-1"/>
                                                </div>
                                            </div>
                                        </Link>
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Parallax
                translateX={['-200px', '0px']}
                className="absolute top-1/2 left--0 -z-10  h-full ">
                <Image
                    alt={''}
                    src={PromiseBg}
                    className="object-cover object-center"
                />
            </Parallax>
            <Parallax
                translateX={['0px', '200px']}
                className="absolute top-0 left-auto right-0 -z-10  h-full ">
                <Image
                    alt={''}
                    src={ProcessBg}
                    className="object-cover object-center"
                />
            </Parallax>
        </div>
    );
}
