import Image from 'next/image';
import Mesh from '@/images/violet.jpeg';
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import One from '@/images/portraits/one.jpg';
import Two from '@/images/portraits/two.jpg';
import Three from '@/images/portraits/three.jpg';
import Four from '@/images/portraits/four.jpg';
import Five from '@/images/portraits/five.jpg';
import Six from '@/images/portraits/six.jpg';


const objectives = [
  {
    title: 'Lève des fonds',
    description:
      "Dès le lancement de ton projet, on t'ai de à trouver, convaincre et séduire des investisseurs grâce à un site internet (ultra) convaincant.",
    tag: '🦄 Investissement',
    image: Three,
    step: 1,
  },
  {
    title: 'Crée ta communauté de fans',
    description:
      "Que tu lances ton projet ou que tu sois déjà en activité, tu as besoin d'un outil qui te permet de communiquer (activement) avec ta communauté et de la fidéliser.",
    tag: '🤝 Engagement',
    image: One,
    step: 2,
  },
  {
    title: 'Présente ton idée au monde',
    description:
      "Tu as une idée géniale et tu veux la présenter au monde ? On t'aide à la mettre en valeur et à la présenter de la meilleure façon possible.",
    tag: '✨ Innovation',
    image: Two,
    step: 3,
  },
  {
    title: 'Génère des leads qualifiés',
    description:
      'Tu gères tous les aspects de ta boîte à la fois. Tu as besoin d’un outil qui te permet de générer des leads (sans effort) et de les convertir en clients.',
    tag: '💰 Proof of concept',
    image: Four,
    step: 4,
  },
  {
    title: 'Booste ta croissance',
    description:
      'Tu as envie de voir ta boîte grandir et vite ? On te donne accès à tous les leviers de croissance digitaux qui te permettront de toucher les sommets.',
    tag: '🚀 Accélération',
    image: Five,
    step: 5,
  },
  {
    title: 'Gagne du temps',
    description:
      "Tu es un chef d'entreprise, tu as ton projet à gérer et tu n'as pas le temps de te soucier de la création de ton site internet. On s'occupe de tout pour toi.",
    tag: '⏳ Productivité',
    image: Six,
    step: 6,
  },
];
// https://as1.ftcdn.net/v2/jpg/04/95/15/06/1000_F_495150657_2dOmSjXOmZvPGsBmmxhedSwgWYBfQJDr.jpg
// https://as2.ftcdn.net/v2/jpg/05/49/55/11/1000_F_549551102_6fgWx1HjA0d00M5Qq9bn2CQ0s1D59CVE.jpg
export default function Objectives() {
  const [currentStep, setCurrentStep] = useState(1);
  const [countdown, setCountdown] = useState(0);
  const [degree, setDegree] = useState(-40);
  const [scale, setScale] = useState(1);
  const [yAxis, setYAxis] = useState(0);

  useEffect(() => {
    if (currentStep === objectives.length + 1) {
      setCurrentStep(1);
    }
    const timer =
      countdown < 100 && setInterval(() => setCountdown(countdown + 1), 50);
    if (countdown === 100) {
      setCurrentStep(currentStep + 1);
      setCountdown(0);
    }
    // if current Step is = avis.length, set currentStep to 1
    if (currentStep === objectives.length + 1) {
      setCurrentStep(1);
    }

    //if currentStep is = 0, set currentStep to avis.length
    if (currentStep === 0) {
      setCurrentStep(objectives.length);
    }
    return () => clearInterval(timer);
  }, [countdown, currentStep]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollDegree = scrollPosition / 13 - 40;
      const zoom = 1 - scrollPosition / 10000;
      setDegree(scrollDegree);
      setScale(zoom);
      // get id="objectives" top position and bottom position
      let objectivesTop = document.getElementById('objectives').offsetTop;
      const objectivesHeight =
        document.getElementById('objectives').offsetHeight;
      const objectivesBottom = objectivesTop + objectivesHeight;
      // get id="objectives" top position and bottom position
      const scrollYAxis = scrollPosition - objectivesTop;
      if (scrollPosition >= objectivesTop) {
        setYAxis(scrollYAxis);
      }
      if (zoom <= 0.9) {
        setScale(0.9);
      }

      if (scrollYAxis >= 50) {
        setYAxis(50);
      }

      // // once degree is 10 or more, set it to 10
      if (scrollDegree >= 2) {
        setDegree(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="objectives" className="relative w-full ">
      <div
        className=" relative mx-auto h-full max-w-7xl transform rounded-xl bg-gray-900  py-6 px-6 lg:px-12 "
        style={{
          transform: `perspective(1500px) rotateX(${degree}deg) translateY(${yAxis}px) scale(${scale})`,
        }}>
        <div className="flex items-center justify-center gap-4">
          {objectives.map((objective, index) => (
            <div key={index} className="h-1 w-full rounded-xl bg-gray-800">
              {currentStep > objective.step ? (
                <div className="h-full rounded-xl bg-gray-500" />
              ) : currentStep === objective.step ? (
                <div
                  className="h-full rounded-xl bg-gray-600"
                  style={{ width: `${countdown}%` }}
                />
              ) : null}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 grid-rows-1">
          <div className="relative col-span-1 col-start-1 row-span-1 row-start-1 my-24 h-[400px] sm:h-[430px] md:h-[450px] xl:h-[500px] " />
          {objectives.map(objective => (
            <div
              key={objective.step}
              className="absolute inset-x-0 left-0 top-16 mx-auto grid w-full transform items-center gap-12 px-6 sm:px-16 md:top-1/2 md:-translate-y-1/2 md:grid-cols-2 md:px-6 lg:px-12 ">
              <Transition
                show={objective.step === currentStep}
                enter="transition-opacity duration-250 delay-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="space-y-4 text-center md:text-left">
                  <span className="tag bg-gray-800 text-gray-400 shadow-lg">
                    {objective.tag}
                  </span>
                  <h2 className=" title-2 sm:heading-1 text-white">
                    {objective.title}
                  </h2>
                  <p className="body-3 sm:text-lg xl:text-xl text-gray-400">
                    {objective.description}
                  </p>
                </div>
              </Transition>

              <Transition
                show={objective.step === currentStep}
                enter="transition transform duration-500 delay-500"
                enterFrom="opacity-0 translate-x-12"
                enterTo="opacity-100 translate-x-0"
                leave="transition-opacity duration-250"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="aspect-h-2 aspect-w-2 w-full overflow-hidden rounded-xl ">
                  <Image
                    className="h-full w-full object-cover object-center"
                    alt={objective.title}
                    src={objective.image}
                    width={850}
                    height={850}
                  />
                </div>
              </Transition>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div
            className="absolute left-0 top-0 flex h-full w-1/3  transform gap-4"
            onClick={() => {
              setCurrentStep(currentStep - 1);
              setCountdown(0);
            }}
          />
          <div
            className="absolute right-0 top-0 flex h-full w-1/3  transform gap-4"
            onClick={() => {
              setCurrentStep(currentStep + 1);
              setCountdown(0);
            }}
          />
        </div>

        <div className="absolute left-6 bottom-24 hidden  gap-4 md:flex lg:left-12">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800"
            onClick={() => {
              setCurrentStep(currentStep - 1);
              setCountdown(0);
            }}>
            <ChevronLeftIcon className="h-4 w-4 text-white" />
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800"
            onClick={() => {
              setCurrentStep(currentStep + 1);
              setCountdown(0);
            }}>
            <ChevronRightIcon className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
