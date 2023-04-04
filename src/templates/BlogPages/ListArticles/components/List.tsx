import Link from 'next/link';
import Image from 'next/image';
import {motion} from 'framer-motion';
import AnchorArrow from "@/templates/Globals/elements/AnchorArrow";
import {EmptyState} from "@/templates/Globals/elements";
import Fade, {animate} from "@/base/animations/Fade";
import {path} from "@/routes/paths";

// ----------------------------------------------------------------------

export default function List({articles}: any) {
    return (
        <>
            {articles.length === 0 ? (
                <div className="grid w-full">
                    <EmptyState text={"Aucun article pour le moment"}/>
                </div>
            ) : (
                <div role="list"  className="grid sm:grid-cols-2 lg:grid-cols-3 justify-stretch gap-6">
                    {articles.map((item: any, index) => (
                        <div key={index} className="w-full">
                            <Fade animate={animate.fadeIn} delay={index / articles.length}>
                                <Link href={path.blog.slug  + item.slug} className="block ">
                                    <div className="group space-y-2">
                                        <div
                                            className=" aspect-w-5 aspect-h-3 w-full shadow overflow-hidden rounded-ui">
                                            <Image
                                                className="inset-0 h-full  group-hover:scale-110 duration-500 transition  w-full  object-cover object-center"
                                                src={item.image}
                                                alt={item.title}
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        <div
                                            className=" w-full  space-y-3  items-center py-2">

                                            <h2 className="heading-6 text-gray-900 dark:text-white transition duration-500 group-hover:text-primary-500">{item.title}</h2>
                                            <div className="flex flex-wrap gap-1">
                                                {item.categories.map((category, index) => (
                                                    <span className="tag tag-normal"
                                                          key={index}>
                                                    {category.title}
                                                    </span>
                                                ))}
                                            </div>
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
