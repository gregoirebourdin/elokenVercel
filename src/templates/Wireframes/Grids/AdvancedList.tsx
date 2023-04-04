import Image from 'next/image';

import AnchorArrow from '@/templates/Globals/elements/AnchorArrow';
import Link from "next/link";
import Fade, {animate} from "@/base/animations/Fade";


export default function AdvancedList({list}) {
    return (
        <>
            <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-3 ">
                {list.map((item, index) => (
                    <Link key={index} href={item.button.href}>
                        <Fade animate={animate.fadeIn} delay={index / 3}>
                            <div className="group space-y-2 max-w-sm mx-auto">
                                <div
                                    className="aspect-w-4  aspect-h-3 shadow overflow-hidden rounded-ui">
                                    <Image
                                        className="inset-0 h-full  group-hover:scale-110 duration-500 transition  w-full  object-cover object-center"
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div
                                    className=" w-full  space-y-2  items-center py-2">
                                    <h2 className="heading-6 text-gray-900 dark:text-white">{item.title}</h2>
                                    <p className="body-4 text-gray-600 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                    <AnchorArrow text={item.button.text} href={undefined}/>
                                </div>
                            </div>
                        </Fade>
                    </Link>

                ))}
            </div>
        </>
    );
}
