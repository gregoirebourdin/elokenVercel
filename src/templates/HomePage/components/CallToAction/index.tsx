import Image from 'next/image';
import ScreenShotApp from '@/images/client/home/screenshot-pdf.png';
import CtaBg from '@/images/client/home/ctabg.png';
import Fade, {animate} from '@/base/animations/Fade';

export default function CallToAction() {
    return (
        <div className="">
            <div className="group mx-auto max-w-7xl lg:py-16">
                <div
                    className="relative overflow-hidden bg-gray-900 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4 xl:rounded-xl">
                    <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                        <Fade animate={animate.fadeInLeft}>
                            <div className="lg:self-center">
                                <h2 className=" font-extrabold text-3xl tracking-tight text-white">
                                    <span>Tu veux changer le monde&nbsp;?</span>{' '}
                                    <span
                                        className=" text-3xl sm:text-4xl tracking-tight font-extrabold sm:whitespace-nowrap bg-gradient-to-r from-violet-500 via-pink-500 to-rose-500 bg-clip-text
          text-transparent sm:text-4xl">
                    On a la solution pour toi
                  </span>
                                </h2>
                                <p className="body-3 text-gray-500">
                                    On a regroupé tout ce qu'il y a à savoir avant de lancer ta startup. Une roadmap
                                    qui te permet de voir plus loin et de scaler ton business plus rapidement.
                                </p>
                                <a href="https://elokenstartup.gumroad.com/l/roadmap" target="_blank" rel="noreferrer">
                                <button className="button-white mt-6 sm:mt-12">Télécharger la Roadmap</button>
                                </a>
                            </div>
                        </Fade>
                    </div>
                    <div
                        className="aspect-w-5 aspect-h-3 z-10 -mt-6 transform transition duration-500 ease-in-out group-hover:-translate-y-3 group-hover:-translate-x-3 md:aspect-w-2 md:aspect-h-1">
                        <Image
                            className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                            src={ScreenShotApp}
                            alt="App screenshot"
                        />
                    </div>

                    <Image
                        className="absolute bottom-0 top-auto right-0 z-0 w-2/3"
                        src={CtaBg}
                        alt="Apgepjg"
                    />
                </div>
            </div>
        </div>
    );
}
