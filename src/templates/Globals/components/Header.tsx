import {BreadCrumb} from "@/templates/Globals/components/index";

export default function TextCenter({title, description, pages}) {
    return (
        <div className="px-4 sm:px-6 lg:px-8 pt-32 ">
            <div className="max-w-7xl mx-auto ">
                <div className="space-y-2">
                    <BreadCrumb pages={pages}/>
                    <h1 className="heading-2 text-gray-900 dark:text-white">{title}</h1>
                    <p className="max-w-2xl body-2 text-gray-600 dark:text-gray-400">{description}</p>
                </div>
            </div>
        </div>
    )
};