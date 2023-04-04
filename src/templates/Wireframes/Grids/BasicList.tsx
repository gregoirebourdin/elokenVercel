import AnchorArrow from "@/templates/Globals/elements/AnchorArrow";
import Image from "next/image";
import Fade, {animate} from "@/base/animations/Fade";


export default function BasicList({list}) {
    return (
        <>
            <div className="">
                <div className="grid sm:grid-cols-2 gap-4">
                    {list.map((item, index) => (
                        <div key={index} className="group">
                            <Fade animate={animate.fadeIn} delay={index / 3}>
                                <div className="relative sm:rounded-ui">
                                    <div
                                        className="py-6 px-4 sm:px-6 rounded-ui justify-between border lg:gap-x-8 lg:p-8 border-gray-200 dark:border-transparent dark:bg-gray-800/50"
                                    >
                                        <div className="sm:flex">
                                            <div className="">
                                                <h3 className="heading-5 text-gray-900 dark:text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-1 body-4 text-gray-500">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}