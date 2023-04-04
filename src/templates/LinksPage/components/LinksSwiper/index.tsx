import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCards} from 'swiper';
import Image from 'next/image';
import Mesh from '@/medias/images/mesh.jpg';


export default function Index({links}) {
    return (
        <>
            <div className="flex h-full w-full items-center" id="card-swiper">
                <Swiper effect={'cards'} grabCursor={true} modules={[EffectCards]}>
                    {links.map((item, index) => (
                        <div key={index} className="">
                            <SwiperSlide>
                                <div>
                                    <div className="group relative mx-auto aspect-[4/5] w-full  overflow-hidden ">
                                        <Image
                                            src={item.image || Mesh}
                                            alt={item.title}
                                            width={500}
                                            height={500}
                                            className="  h-full w-full transform object-cover object-center transition duration-500 group-hover:scale-125"
                                        />
                                        <div
                                            className="absolute bottom-0 flex h-full w-full flex-col items-start justify-end gap-4 bg-gradient-to-t from-black via-black/70 to-transparent p-4 sm:h-2/3 sm:to-transparent sm:p-6">
                                            <div>
                                                <h2 className=" heading-5 mb-2 text-white">{item.title}</h2>
                                                <p className="body-4 text-white">{item.description}</p>
                                            </div>
                                            {/*<Link href={item.destinationUrl}>*/}
                                            <button className="button-blur">
                                                {item.buttonText}
                                            </button>
                                            {/*</Link>*/}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
