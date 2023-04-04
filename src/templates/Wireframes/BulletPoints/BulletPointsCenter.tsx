import {StarIcon} from "@heroicons/react/24/outline";
import Fade, {animate} from "@/base/animations/Fade";

export default function BulletPointsCenter({bulletPoints}) {
    return (
        <>
            <>
                <div className="">
                    <div className="flex flex-wrap justify-center gap-12">
                        {bulletPoints.map((bulletPoint, index) => (
                            <div key={index} >
                                <Fade animate={animate.fadeIn} delay={index/3}>
                                    <div className="grid gap-2 w-64 mx-auto items-start">
                                        <div className="flex items-center justify-center p-1">
                                            <bulletPoint.icon className="w-6 h-6 text-primary-500 flex-shrink-0"/>
                                        </div>
                                        <div className="space-y-1 text-center">
                                            <h3 className="heading-5 text-gray-900 dark:text-white">{bulletPoint.title}</h3>
                                            <p className="body-4 text-gray-500">{bulletPoint.description}</p>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        </>
    )
}