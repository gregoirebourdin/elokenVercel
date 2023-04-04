import Image from 'next/image';

import GregGui from '@/images/client/home/greg-gui.jpg';
import backgroundImage from '@/images/background-faqs.jpg';
import TestimonialsModal from './TestimonialsModal';
import Fade, {animate} from '@/base/animations/Fade';
import Guillaume from '@/images/avatars/Guillaume.png';


function QuoteIcon(props) {
    return (
        <svg aria-hidden="true" width={105} height={78} {...props}>
            <path
                d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"/>
        </svg>
    );
}

export default function Testimonials({testimonials}) {
    console.log(testimonials);
    return (
        <section
            id="testimonials"
            aria-label="Ce que les clients pensent de nous"
            className=" relative overflow-hidden py-20 bg-gray-50 sm:py-32 px-4">
            <Fade animate={animate.fadeIn} delay={2}>
                <Image
                    className="absolute bottom-0 left-1/2 -z-10 max-w-none translate-x-[-30%] -translate-y-1/4"
                    src={backgroundImage}
                    alt=""
                    width={1558}
                    height={946}
                    unoptimized
                />
            </Fade>
            <div className="mx-auto max-w-7xl">
                <blockquote className="relative z-10 mx-auto max-w-2xl ">

                    <div className="text-center mb-8">
                        <h2 className="">
                            <span
                                className='title-3 text-gray-500 hover:text-violet-500 block hover:-translate-y-2 transition ease-in-out transform'>Start small</span>{' '}
                            <span
                                className='heading-1 text-gray-700 hover:text-violet-500 block hover:-translate-y-2 transition ease-in-out transform'>Think big</span>{' '}
                            <span
                                className='title-main text-gray-900 hover:text-violet-500 block hover:-translate-y-2 transition ease-in-out transform -mt-3'>Grow fast</span>
                        </h2>
                        <p className="body-2 mt-4 text-gray-700">
                            Lorsque tu lances ta startup, tu veux pouvoir tester ton idée, créer une communauté, montrer
                            ton produit, lever des fonds et valider une
                            hypothèse de marché en un temps record. On est conscient que tu as le monde à changer. Donc
                            chez Eloken, on a comme seul
                            objectif de te permettre de cartonner dès le premier jour, sans perdre de temps.
                        </p>
                    </div>
                    <div className=" mx-auto ">
                        <div className="justify-center flex items-center">
                            <div className="flex-shrink-0">
                                <Image
                                    className="mx-auto h-12 w-12 rounded-xl"
                                    src={Guillaume}
                                    alt=""
                                />
                            </div>
                            <div className="  mt-0 ml-4 ">
                                <div className="text-sm font-bold text-gray-900">
                                    Guillaume Rouxel
                                </div>

                                <div className="text-xs text-gray-500">CEO de Eloken</div>
                            </div>
                        </div>
                    </div>

                </blockquote>
                <div className="relative z-10 mt-16 lg:mt-20">
                    <div className="mb-6 text-center">
                        <h2 className="tag bg-white text-gray-700 shadow-lg">
                            Témoignages
                        </h2>
                    </div>

                    <div role="list" className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 xl:gap-8">
                        {testimonials.map((testimonial, index) =>
                            // get only 5 first
                            index < 5 && (
                            <div className="mb-4 sm:mb-8 block" key={index}>
                                <Fade animate={animate.fadeInDown} delay={index / 6}>
                                    <figure
                                        className="relative overflow-hidden rounded-xl bg-white shadow-xl shadow-gray-900/10">
                                        <figcaption
                                            className="relative  flex items-center justify-between border-b border-gray-100 px-6  py-4">
                                            <div>
                                                <div className="text-sm font-bold text-gray-900">
                                                    {testimonial.name}
                                                </div>
                                                <div className=" text-xs text-gray-500">
                                                    {testimonial.job}
                                                </div>
                                            </div>
                                            <div className="overflow-hidden rounded-xl bg-gray-50">
                                                <Image
                                                    className="h-14 w-14 object-cover"
                                                    src={testimonial.image}
                                                    alt=""
                                                    width={56}
                                                    height={56}
                                                />
                                            </div>
                                        </figcaption>
                                        <blockquote className="relative px-6 py-4">
                                            <p className="text-sm sm:text-lg tracking-tight text-gray-900">
                                                {testimonial.comment}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </Fade>
                            </div>
                        ))}
                        <Fade animate={animate.fadeInDown} delay={4 / 3}>
                            <div className="relative h-[500px] w-full overflow-hidden rounded-xl bg-gray-900">
                                <Image
                                    alt={''}
                                    src={GregGui}
                                    className="h-full object-cover object-center"
                                />
                                <div
                                    className="absolute bottom-0 flex h-2/3 w-full flex-col items-start justify-end gap-4 bg-gradient-to-t from-gray-900 to-transparent p-8 lg:p-12">
                                      <span className="title-3 text-white">
                                        On veut en savoir plus sur ton projet !
                                      </span>
                                    <button className="button-white">Parle nous-en</button>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className="flex mt-6 justify-center">
                <div className="avatar-group -space-x-6 overflow-visible">
                    {testimonials.slice(0, 5).map(item => (
                        <div
                            key={item.content}
                            className="  flex transform items-center transition duration-500 hover:-translate-x-3  ">
                            <div className="avatar border-2 border-transparent transition hover:border-violet-500">
                                <div className="w-12">
                                    <Image  src={item.image} alt={item.name} width={56} height={56}

                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <TestimonialsModal testimonials={testimonials}/>
        </section>
    );
}
