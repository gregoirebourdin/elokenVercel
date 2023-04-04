import Fade, {animate} from "@/base/animations/Fade";

export default function TitleLeft({tag, title, description}) {
    return (
        <div>
            <Fade animate={animate.fadeIn}>
                <div className="max-w-2xl space-y-2 text-center md:text-left max-md:mx-auto">
                    {tag && (
                        <span className="tag tag-outline">{tag}</span>
                    )}
                    <h1 className="heading-2 text-gray-900 dark:text-white">{title}</h1>
                    {description && (
                        <p className="body-2 text-gray-600 dark:text-gray-400">{description}</p>
                    )}
                </div>
            </Fade>
        </div>
    )
};