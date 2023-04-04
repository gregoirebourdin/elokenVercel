import Image from 'next/image';
import AnchorArrow from "@/templates/Globals/elements/AnchorArrow";
import Fade, {animate} from "@/base/animations/Fade";

export default function TextRight({tag, title, description, image, link, linkText}) {
    return (
        <>
            <div className="">
                <div className="grid md:grid-cols-2 items-center justify-center gap-6 md: gap-12 lg:gap-24">
                    <div className="">
                        <Fade animate={animate.fadeInLeft} delay={0.7}>
                            <div
                                className=" w-full rounded-ui overflow-hidden mx-auto max-w-sm lg:max-w-none ">
                                <Image className="inset-0 object-cover object-center h-full w-full "
                                       src={image}
                                       alt={title}/>
                            </div>
                        </Fade>
                    </div>
                    <div className="">
                        <Fade animate={animate.fadeInRight} delay={0.3}>
                            <div className="space-y-2 text-center md:text-left max-w-md md:max-w-none lg:space-y-4">
                                {tag && (
                                    <span className="tag tag-normal">{tag}</span>
                                )}
                                <h2 className="heading-2 text-gray-900 dark:text-white">{title}</h2>
                                <p className="body-3 text-gray-600 dark:text-gray-500">{description}</p>
                                {link && (
                                    <div className="flex justify-center md:justify-start">
                                        <AnchorArrow text={linkText} href={link}/>
                                    </div>
                                )}
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}