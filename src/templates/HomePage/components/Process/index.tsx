import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import ProcessBg from '@/images/client/home/processbg.png';
import Fade, { animate } from '@/base/animations/Fade';
import Guillaume from '@/images/avatars/Guillaume.png';
import Jessica from '@/images/avatars/Jessica.png';
import Amelie from '@/images/avatars/Amelie.png';
import Dylan from '@/images/avatars/Dylan.png';
import Greg from '@/images/avatars/Greg.png';
import Robin from '@/images/avatars/Robin.png';
import Enzo from '@/images/avatars/Enzo.png';
import Alizee from '@/images/avatars/Alizee.png';

import { RiUserSmileFill } from 'react-icons/ri';
const users = {
  Guillaume: {
    name: 'Guillaume',
    main:true,
    image: Guillaume.src,
    job: 'Chef de projet',
  },
  Amelie: {
    name: 'Amélie',
    main:false,
    image: Amelie.src,
    job: 'Rédactrice',
  },
  Alizee: {
    name: 'Alizée',
    main:false,
    image: Alizee.src,
    job: 'Graphiste',
  },
  Dylan: {
    name: 'Dylan',
    main:false,
    image: Dylan.src,
    job: 'Développeur',
  },
  Greg: {
    name: 'Gregoire',
    main:true,
    image: Greg.src,
    job: 'Lead développeur',
  },
  Robin: {
    name: 'Robin',
    main:false,
    image: Robin.src,
    job: 'Développeur',
  },
  Enzo: {
    name: 'Enzo',
    main:false,
    image: Enzo.src,
    job: 'Community Manager',
  },
  Jessica: {
    name: 'Jessica',
    main:false,
    image: Jessica.src,
    job: 'Designer',
  },
};

const steps = [
  {
    number: 'Phase 01',
    title: 'Architecture',
    people: [users.Guillaume, users.Greg],
    description:
      "On définit la portée du nouveau site, les objectifs et les cibles dans le but d'identifier toutes les fonctionnalités que tu veux.",
    features: ['UML', 'Sitemap', 'UserFlow', 'MCD'],
  },
  {
    number: 'Phase 02',
    title: 'Rédaction',
    people: [users.Amelie, users.Guillaume],
    features: ['Zoning', 'Copywriting', 'SEO'],
    description:
      "On valide avec toi les contenus de ton site dans le but d'obtenir des textes optimisés, bien référencés et qui convertissent.",
  },
  {
    number: 'Phase 03',
    title: 'Design UI/UX',
    people: [users.Jessica, users.Alizee, users.Guillaume, users.Greg],
    features: ['Design System', 'Wireframe', 'Moodboards', 'Maquette'],
    description:
      "On créer avec toi l'identité de marque de ta start-up et on design les maquettes et prototypes de ton projet.",
  },

  {
    number: 'Phase 04',
    title: 'Développement Beta',
    people: [users.Greg, users.Dylan, users.Robin, users.Guillaume],
    features: ['Backend', 'CMS', 'Frontend', 'Algorithmes'],
    description:
      "Après l’approbation des designs et des contenus, le développement peut enfin démarrer. On code jusqu'à obtenir un site web fonctionnel.",
  },
  {
    number: 'Phase 05',
    title: 'Développement Alpha',
    people: [users.Greg, users.Dylan, users.Robin],
    features: ['Intégration', 'Déploiement', 'Debug', 'Lancement'],
    description:
      'Le contenu final est intégré dans le site fonctionnel. Les pages sont testées pour en vérifier la qualité et le site est lancé.',
  },
  // {
  //   number: 'Phase 06',
  //   title: 'Services supports',
  //   people: [users.Amelie, users.Alizee, users.Enzo],
  //   features: ['A/B Testing', 'Content marketing', 'SEO', 'Maintenance'],
  //   description:
  //     'Après ton lancement réussi, on peut te fournir des services pour améliorer le trafic et la conversion de ton site.',
  // },
];

export default function Process() {
  return (
    <div className="relative w-full px-4 sm:px-0 sm:mt-12 md:mt-0">
      <div className="mx-auto max-w-7xl py-24 sm:py-32">
        <Fade animate={animate.fadeInUp}>
          <div className="mx-auto max-w-md space-y-6 py-12 text-center">
            <h2 className="heading-1 text-gray-900">
              On s'occupe de tout{' '}
              <span className=" inline-block whitespace-nowrap bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                pour toi ️
              </span>
            </h2>
            <p className="body-2 text-gray-500">
              Tu as autre chose à faire que de faire ton site. Trouve des
              partenaires, des clients, des investisseurs... On se charge du
              reste.
            </p>
          </div>
        </Fade>

        <div className="relative z-10 mx-auto mt-12 grid max-w-md gap-16 lg:max-w-full lg:grid-cols-3   lg:gap-12 lg:px-6">
          <div >
            <Fade animate={animate.fadeInDown}>
              <div className="flex rounded-xl p-4  bg-gradient-to-br from-black to-gray-700 flex-col gap-2 text-center lg:text-left">
                <div className="">
                  <div className="font-bold text-violet-500">
                    Phase 00.
                  </div>
                  <h3 className="title-3 text-white">Stratégie</h3>
                </div>
                <div className="avatar-group mx-auto -space-x-6 overflow-visible lg:mx-0">
                  {/*Get only Guillaume and Gregoire from users */}
                    {Object.values(users)
                        .filter(user => user.main === true)
                        .map(user => (
                      <div
                          key={user.name}
                          className="tooltip  flex transform items-center transition duration-500 hover:-translate-x-3  "
                          data-tip={user.name + ' | ' + user.job}>
                        <div className="avatar  border-2 border-transparent transition hover:border-violet-500">
                          <div className="w-12">
                            <img src={user.image} alt={user.name} />
                          </div>
                        </div>
                      </div>
                  ))}
                  <div
                      className="tooltip  flex transform items-center transition duration-500 hover:translate-x-3  "
                      data-tip="C'est toi !">
                    <div className="avatar flex h-12 w-12 items-center justify-center border-2 border-transparent bg-violet-500 transition hover:border-violet-500">
                      {/*<UserIcon className="h-8 w-8 text-white" />*/}
                      <RiUserSmileFill className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                <p className="body-3 text-gray-300">Tu n'es pas seul·e ! On t'accompagne à toutes les étapes de ton projet pour que tu ais un site/app incroyable, mais on est aussi là pour te conseiller en termes de business.</p>
              </div>
            </Fade>
          </div>
          {steps.map((step, index) => (
            <div key={index}>
              <Fade animate={animate.fadeInDown} delay={index / 3}>
                <div className="flex flex-col gap-2 text-center lg:text-left">
                  <div className="">
                    <div className="font-bold text-violet-500">
                      {step.number}.
                    </div>
                    <h3 className="title-3 text-gray-900">{step.title}</h3>
                  </div>
                  <div className="avatar-group mx-auto -space-x-6 overflow-visible lg:mx-0">
                    {step.people.map(user => (
                      <div
                        key={user.name}
                        className="tooltip  flex transform items-center transition duration-500 hover:-translate-x-3  "
                        data-tip={user.name + ' | ' + user.job}>
                        <div className="avatar  border-2 border-transparent transition hover:border-violet-500">
                          <div className="w-12">
                            <img src={user.image} alt={user.name} />
                          </div>
                        </div>
                      </div>
                    ))}
                    <div
                      className="tooltip  flex transform items-center transition duration-500 hover:translate-x-3  "
                      data-tip="C'est toi !">
                      <div className="avatar flex h-12 w-12 items-center justify-center border-2 border-transparent bg-violet-500 transition hover:border-violet-500">
                        {/*<UserIcon className="h-8 w-8 text-white" />*/}
                        <RiUserSmileFill className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <p className="body-3 text-gray-500">{step.description}</p>
                  <div className="mx-auto flex flex-wrap justify-center gap-1 lg:mx-0 lg:justify-start">
                    {step.features.map(feature => (
                      <div
                        key={feature}
                        className="tag transform cursor-crosshair tag-outline">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
      <Parallax
        translateX={['0px', '200px']}
        className="absolute top-0 left-auto right-0 -z-10  h-full ">
        <Fade animate={animate.fadeInRight} delay={1}>
          <Image
            alt={''}
            src={ProcessBg}
            className="object-cover object-center"
          />
        </Fade>
      </Parallax>
    </div>
  );
}
