import { InformationCircleIcon } from '@heroicons/react/20/solid'
import Fade, {animate} from "@/base/animations/Fade";

export default function EmptyState({text}) {
    return (
        <>
            <Fade animate={animate.fadeIn} >
            <div className="rounded-md bg-gray-200 dark:bg-gray-800 p-4">
                <div className="flex items-center text-gray-500">
                    <div className="flex-shrink-0">
                        <InformationCircleIcon className="h-5 w-5 " aria-hidden="true" />
                    </div>
                    <div className="ml-3 ">
                        <span className="body-4 font-bold">{text}</span>
                    </div>
                </div>
            </div>
            </Fade>
        </>

    )
}
