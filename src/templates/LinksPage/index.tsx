import {Transition} from '@headlessui/react';
import LinksGrid from '@/templates/LinksPage/components/LinksGrid';
import LinksSwiper from '@/templates/LinksPage/components/LinksSwiper';
import {useState} from 'react';
import {HiOutlineQueueList, HiOutlineSquare2Stack} from "react-icons/hi2";
import {HiOutlineViewGrid} from "react-icons/hi";
import LinksList from "@/templates/LinksPage/components/LinksList";
import {EmptyState} from "@/templates/Globals/elements";


export default function LinksPage({links, project, pages}: any) {

    const views = [
        {
            name: 'Grid',
            title: 'Grille',
            icon: HiOutlineViewGrid,
        },
        {
            name: 'Cards',
            title: 'Cartes',
            icon: HiOutlineSquare2Stack,
        },
        {
            name: 'List',
            title: 'Liste',
            icon: HiOutlineQueueList,
        }
    ]


    const [viewType, setViewType] = useState(views[0].name);
    return (
        <>
            {links.length > 0 ? (
                <div className="">
                    <div
                        className="flex items-center justify-start sm:gap-3 gap-6 justify-center md:justify-end pb-8 sm:flex-row">
                        {views.map((view, index) =>
                            (
                                    <button
                                        key={index}
                                        className={" rounded-ui text-gray-500 p-2 button items-center " + (viewType === view.name && " bg-gray-200 dark:bg-gray-800")}
                                        onClick={() => setViewType(view.name)}>
                                        <view.icon className="h-5 w-5"/>
                                    </button>
                            ))}

                    </div>
                    <Transition
                        show={viewType === "Grid"}
                        enter="transition transform duration-500 delay-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition transform duration-250"
                        leaveFrom="opacity-100 "
                        leaveTo="opacity-0">
                        <div className="min-h-screen">
                            <LinksGrid links={links}/>
                        </div>
                    </Transition>
                    <Transition
                        show={viewType === "Cards"}
                        enter="transition transform duration-500 delay-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition transform duration-250"
                        leaveFrom="opacity-100 "
                        leaveTo="opacity-0">
                        <div className="flex h-full w-full items-center py-12">
                            <LinksSwiper links={links}/>
                        </div>
                    </Transition>
                    <Transition
                        show={viewType === "List"}
                        enter="transition transform duration-500 delay-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition transform duration-250"
                        leaveFrom="opacity-100 "
                        leaveTo="opacity-0">
                        <div>
                            <LinksList links={links} project={project}/>
                        </div>
                    </Transition>

                </div>
            ) : (
                <div className="flex items-center h-64 lg:h-screen justify-center">
                    Pas de lien a afficher pour le moment
                </div>

            )}
        </>
    );
}
