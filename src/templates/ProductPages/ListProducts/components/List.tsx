import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';
import AnchorArrow from "@/templates/Globals/elements/AnchorArrow";
import {EmptyState} from "@/templates/Globals/elements";
import Fade, {animate} from "@/base/animations/Fade";
import {path} from "@/routes/paths";
import parse from "html-react-parser";

// ----------------------------------------------------------------------

export default function List({products}: any) {
    return (
        <>
            {products.length === 0 ? (
                <div className="grid w-full">
                    <EmptyState text={"Aucun article pour le moment"}/>
                </div>
            ) : (
                <div role="list" className="grid sm:grid-cols-2 lg:grid-cols-3 justify-stretch gap-6">
                    {products.map((item: any, index) => (
                        <div key={index} className="w-full">
                            <Fade animate={animate.fadeIn} delay={index / 20}>
                                <Link href={item.short_url} className="block ">
                                    <div className="group space-y-2">
                                        <div
                                            className=" aspect-w-5 aspect-h-5 w-full shadow overflow-hidden rounded-ui">
                                            <Image
                                                className="inset-0 h-full  group-hover:scale-110 duration-500 transition  w-full  object-cover object-center"
                                                src={item.thumbnail_url}
                                                alt={item.imageAlt}
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        <div
                                            className=" w-full   space-y-3  items-center py-2">
                                            <div className=" flex items-center justify-between">
                                                <h2 className="heading-6 text-gray-900 dark:text-white transition duration-500 group-hover:text-primary-500">
                                                    {item.name}
                                                </h2>
                                                <p className="tag tag-outline">{item.formatted_price.substring(1)} €</p>
                                            </div>
                                            <p className=" body-4  text-gray-500">{parse(item.custom_summary.slice(0, 150) + '...')}</p>
                                        </div>
                                    </div>
                                </Link>
                            </Fade>
                        </div>

                    ))}


                </div>
            )}
        </>
    );
}
