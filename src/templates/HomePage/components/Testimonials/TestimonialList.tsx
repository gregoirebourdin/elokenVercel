import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import avatarImage3 from '@/images/avatars/avatar-3.png';
import avatarImage4 from '@/images/avatars/avatar-4.png';
import avatarImage5 from '@/images/avatars/avatar-5.png';

export default function TestimonialList({testimonials}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    // if current Step is = avis.length, set currentStep to 1
    if (currentStep === testimonials.length + 1) {
      setCurrentStep(1);
    }

    //if currentStep is = 0, set currentStep to avis.length
    if (currentStep === 0) {
      setCurrentStep(testimonials.length);
    }

    // every second add 1 to countdown until 5 seconds, then set currentStep to currentStep + 1 and set countdown to 0
    const timer =
      countdown < 100 && setInterval(() => setCountdown(countdown + 1), 50);
    if (countdown === 100) {
      setCurrentStep(currentStep + 1);
      setCountdown(0);
    }
    return () => clearInterval(timer);
  }, [countdown, currentStep]);

  return (
    <div className="relative mx-auto h-full w-full  ">
      <div className="flex items-center justify-center gap-1">
        {testimonials.map((item, index) => (
          <div key={index} className="h-1 w-full rounded-full bg-gray-800">
            {currentStep > index + 1 ? (
              <div className="h-full rounded-xl bg-gray-500" />
            ) : currentStep === index + 1 ? (
              <div
                className="h-full rounded-xl bg-gray-600"
                style={{ width: `${countdown}%` }}
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="grid ">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="absolute inset-x-0 left-0 top-1/2 mx-auto h-full w-full  -translate-y-1/2 transform gap-12  py-4  ">
            <Transition
              show={index + 1 === currentStep}
              enter="transition-opacity duration-250 delay-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className=" flex h-full w-full items-center justify-start gap-2">
                <div className="overflow-hidden rounded-xl bg-gray-50">
                  <Image
                    className="h-14 w-14 object-cover"
                    src={item.image}
                    alt=""
                    width={56}
                    height={56}
                  />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-white">
                    {item.name}
                  </div>
                  <div className=" text-sm leading-none text-gray-300">
                    {item.job}
                  </div>
                </div>
              </div>
              <p className=" font-extrabold text-xl sm:text-2xl lg:text-xl md:text-3xl xl:text-2xl 2xl:text-3xl tracking-tight  absolute top-1/2 left-0 -translate-y-1/2 transform text-gray-50">
                {item.comment}
              </p>
            </Transition>
          </div>
        ))}
      </div>
      <div className="sm:hidden">
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

      <div className="hidden sm:block">
        <div className="absolute -left-20 top-1/2 flex -translate-y-1/2 transform gap-4 md:-left-24">
          <button
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-100"
            onClick={() => {
              setCurrentStep(currentStep - 1);
              setCountdown(0);
            }}>
            <ChevronLeftIcon className="h-4 w-4 text-white group-hover:text-gray-900" />
          </button>
        </div>
        <div className="absolute -right-20 top-1/2 flex -translate-y-1/2 transform gap-4 md:-right-24">
          <button
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-100"
            onClick={() => {
              setCurrentStep(currentStep + 1);
              setCountdown(0);
            }}>
            <ChevronRightIcon className="h-4 w-4 text-white group-hover:text-gray-900" />
          </button>
        </div>
      </div>
    </div>
  );
}
