import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/20/solid";
import AnchorArrow from "@/templates/Globals/elements/AnchorArrow";
import {EmptyState} from "@/templates/Globals/elements";
import Fade, {animate} from "@/base/animations/Fade";

export default function List({jobs}: any) {
    return (
        <>
            {jobs.length === 0 ? (
                <div className="grid w-full">
                        <EmptyState text={"Aucun poste à pourvoir pour le moment"}/>
                </div>
            ) : (
                <div className="">
                    <div className="grid gap-8 lg:gap-12 md:grid-cols-3 lg:gap-x-5">
                        {jobs.map((job, index) => (
                            <div key={index} className="group max-w-sm ">
                                <Fade animate={animate.fadeIn} delay={index / jobs.length}>
                                    <div>
                                    <div className="inline-block">
                                          <span
                                              className="tag tag-primary">
                                            {job.jobType}
                                          </span>
                                    </div>
                                    </div>
                                    <div className="mt-4 block">
                                        <p className="heading-4 text-gray-900 dark:text-white">{job.title}</p>
                                        <p className="mt-3 body-4  text-gray-500">{job.description}</p>
                                    </div>
                                    <div className="">
                                        <AnchorArrow href={'/jobs/' + job.slug} text={'En savoir plus'}/>
                                    </div>
                                </Fade>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
