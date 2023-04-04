import { Transition } from '@headlessui/react';

import { useEffect, useState } from 'react';
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid';

import { Popover } from '@headlessui/react';
import { FaLightbulb } from 'react-icons/fa';
import { IoRocketSharp } from 'react-icons/io5';
import Feed from './Feed';

const index = [
  {
    title: 'Un 1er site (remarquable) pour présenter ton projet',
    subtitle: 'POC',
    description: 'Proof of Concept',
    position: 3,
    phase: 'Early stages',
    tools: '1 site vitrine',
  },
  {
    title: 'Délivre une première version (convaincante) de ton service',
    subtitle: 'MVP',
    description: 'Minimum Viable Product',
    position: 6,
    phase: 'Premières levées de fonds',
    tools: '1 site vitrine + 1 WebApp',
  },
  {
    title: 'Lance officiellement ton (incroyable) site / app',
    subtitle: 'Beta',
    description: 'Version Beta Test',
    position: 8,
    phase: "Phase d'accélération",
    tools: '1 site vitrine + 1 WebApp + 1 App Mobile',
  },
];

function Step({ activeStep, step, position, setActiveStep }) {
  return (
    <>
      <div
        onMouseEnter={() => setActiveStep(position)}
        // onClick={() => setActiveStep(position)}
        className="group  relative flex h-16 w-16  cursor-pointer items-center justify-center focus:outline-none">
        <div
          className={
            ' relative flex h-12 w-12 transform  rounded-full transition-all ' +
            (activeStep >= position ? '  ring-2 ring-violet-300' : '  ')
          }>
          <>
            <span
              className={
                'absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-300 transition ' +
                (activeStep >= position ? ' hidden' : ' block')
              }
            />
          </>

          <div
            className={
              'relative flex inline-flex h-full w-full items-center justify-center rounded-full bg-cover transition-all duration-500 ' +
              (activeStep >= position ? '  bg-white' : '  bg-gray-300')
            }>
            <Transition
              show={position <= activeStep}
              enter="transition duration-750"
              enterFrom="opacity-0 -translate-y-6"
              enterTo="opacity-100 translate-y-0"
              leave="transition-opacity duration-250"
              leaveFrom="opacity-100"
              leaveTo="opacity-0 ">
              <CheckIcon className="h-6 w-6 text-violet-800" />
            </Transition>
          </div>
        </div>

        <Transition
          show={position !== activeStep}
          enter="transition duration-500 delay-150"
          enterFrom="opacity-0 "
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className={
            'body-4 absolute top-20 left-1/2 hidden w-56 -translate-x-1/2 transform text-center   lg:block ' +
            (activeStep >= position ? ' text-violet-400' : ' text-gray-400')
          }>
          {step.phase}
        </Transition>

        <Transition
          show={position === activeStep}
          enter="transition duration-750 delay-150"
          enterFrom="opacity-0 -translate-y-6"
          enterTo="opacity-100 translate-y-0"
          leave="transition-opacity duration-350"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-4"
          className=" absolute top-20 left-1/2 w-64 -translate-x-1/2  transform text-center  ">
          <div>
            <div className=" grid w-full rounded-xl bg-white p-4 text-center ">
              {/*<span className="title-6  text-violet-500 ">{step.subtitle}</span>*/}
              <span className="body-4 text-violet-400 ">
                {step.description}
              </span>

              <h3 className="mt-2 text-lg font-bold leading-tight text-gray-900">
                {step.title}
              </h3>
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
}

function SmallStep({ position, activeStep }) {
  return (
    <div
      className={
        'h-4 w-4 transform rounded-full transition ' +
        (activeStep >= position
          ? ' bg-violet-400'
          : ' animate-pulse  bg-gray-300')
      }
    />
  );
}

export default function Steps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <div className="mx-auto max-w-7xl py-12 sm:py-20 lg:py-32 ">
        <h2 className="title-main mx-auto  text-center text-gray-900">
          Ton aventure.{' '}
          <span
            className=" whitespace-nowrap bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500
          bg-clip-text text-transparent">
            Nos solutions.
          </span>
        </h2>
        <div className="p-6 md:hidden ">
          <Feed />
        </div>
        <div className="hidden h-44 w-full items-center justify-between px-12 md:flex">
          <div
            className=" group relative h-16 w-16 cursor-pointer "
            onMouseEnter={() => setActiveStep(0)}>
            <div className="animation-shake flex h-full w-full items-center  justify-center">
              <FaLightbulb
                className={
                  ' h-6 w-6 transition group-hover:text-amber-500 ' +
                  (activeStep >= 1 ? ' text-amber-500' : ' text-gray-500')
                }
              />
            </div>
            <span className="body-4 absolute top-14 left-1/2 -translate-x-1/2 transform whitespace-nowrap text-gray-400 lg:top-20">
              La grande idée
            </span>
          </div>

          <SmallStep position={2} activeStep={activeStep} />

          <Step
            activeStep={activeStep}
            step={index[0]}
            position={3}
            setActiveStep={setActiveStep}
          />
          <SmallStep position={4} activeStep={activeStep} />
          <div className="hidden lg:block">
            <SmallStep position={5} activeStep={activeStep} />
          </div>

          <Step
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            step={index[1]}
            position={6}
          />
          <SmallStep position={7} activeStep={activeStep} />
          <div className="hidden lg:block">
            <SmallStep position={8} activeStep={activeStep} />
          </div>

          <Step
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            step={index[2]}
            position={9}
          />

          <SmallStep position={10} activeStep={activeStep} />

          <div
            className=" group relative h-16 w-16 cursor-pointer "
            onMouseEnter={() => setActiveStep(11)}>
            <div className="animation-shake flex h-full w-full items-center  justify-center">
              <IoRocketSharp
                className={
                  ' h-6 w-6 transition group-hover:text-rose-500 ' +
                  (activeStep === 11 ? ' text-rose-500' : ' text-gray-500')
                }
              />
            </div>

            <span className="body-4 absolute top-14 left-1/2 -translate-x-1/2 transform whitespace-nowrap text-gray-400 lg:top-20">
              To the moon
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
