import Fade, {animate} from "@/base/animations/Fade";


export default function List({list}) {
    return (
        <>
            <div className="">
                <div className="grid gap-6 lg:gap-12 md:grid-cols-3 text-center md:text-left lg:gap-x-5">
                    {list.map((item, index) => (
                        <div key={index} className="group max-w-sm mx-auto">
                            <Fade animate={animate.fadeIn} delay={index / 3}>
                            <div>
                                <div>
                                    <div className="inline-block">
                                  <span
                                      className="tag  bg-primary-400 text-primary-50 shadow-primary-500/20 dark:shadow-primary-500/10 dark:text-primary-300 dark:bg-primary-700">
                                    {item.tag}
                                  </span>
                                    </div>
                                </div>
                                <div className="mt-4 block">
                                    <p className="text-xl  font-semibold text-gray-900 dark:text-white">{item.title}</p>
                                    <p className="mt-3 body-4 font-normal text-gray-500">{item.description}</p>
                                </div>
                            </div>
                            </Fade>
                        </div>

                    ))}
                </div>

            </div>
        </>
    );
}
