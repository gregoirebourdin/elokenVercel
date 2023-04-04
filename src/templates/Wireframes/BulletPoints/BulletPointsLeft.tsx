import {StarIcon} from "@heroicons/react/24/outline";
import Fade, {animate} from "@/base/animations/Fade";


export default function BulletPointsLeft({bulletPoints}) {
    return (
        <>
            < >
                <div>
                    <div className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-12 ">
                        {bulletPoints.map((bulletPoint, index) => (
                            <div key={index}>
                                <Fade animate={animate.fadeIn} delay={index / 4}>
                                    <div className="flex gap-2 max-w-xs items-start">
                                        <div className="flex items-center justify-center p-1">
                                            <bulletPoint.icon className="w-6 h-6 text-primary-500 flex-shrink-0"/>
                                        </div>
                                        <div className="space-y-1">
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