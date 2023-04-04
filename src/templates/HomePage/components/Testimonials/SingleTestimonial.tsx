import Image from 'next/image';
import Aymeric from '@/medias/images/avatars/aymeric.jpg';

import SingleTestimonialBg from '@/images/client/home/singletestimonialbg.png';
import Fade, { animate } from '@/base/animations/Fade';

export default function SingleTestimonial() {
  return (
    <div className="">
      <div className="group mx-auto  py-16">
        <div className="relative grid overflow-hidden  bg-gray-900 shadow-xl">
          <div className="mx-auto grid max-w-2xl items-center justify-center px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20 ">
            <div className="lg:self-center relative z-10">
              <Fade animate={animate.fadeIn}>
                <blockquote>
                  <p className="title-3 text-white">
                    <span className="text-violet-500">
                      Ca a transformé mon business.
                    </span>{' '}
                    J’ai toujours pensé que faire seul me faisait gagner de
                    l’argent. Je ne me suis jamais autant trompé.
                  </p>
                  <footer className="mt-8">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          className="mx-auto h-12 w-12 rounded-xl"
                          src={Aymeric}
                          alt="Aymeric Laffage CEO Wimmob, client d'Eloken"
                        />
                      </div>
                      <div className="  mt-0 ml-4 ">
                        <div className="text-sm font-bold text-white">
                          Aymeric Laffage
                        </div>

                        <div className="text-xs text-gray-500">
                          CEO, Wimmob
                        </div>
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </Fade>
            </div>
          </div>

          <Image
            className="absolute bottom-0 top-auto right-0 z-0 h-full"
            src={SingleTestimonialBg}
            alt="Apgepjg"
          />
        </div>
      </div>
    </div>
  );
}
