import {Fragment} from 'react';
import {
    ChatBubbleLeftEllipsisIcon, CheckIcon,
    TagIcon,
    UserCircleIcon,
} from '@heroicons/react/20/solid';
import {FaLightbulb} from "react-icons/fa";
import {IoRocketSharp} from "react-icons/io5";
import Fade, {animate} from "@/base/animations/Fade";

const activity = [
    {
        description: 'Ta grande idée qui va changer le monde',
        subtitle: undefined,
        header: "L'idée",
        phase: 'Idéation',
        tools: undefined,
        icon: FaLightbulb
    },
    {
        description: 'Un 1er site (remarquable) pour présenter ton projet',
        subtitle: 'POC',
        header: 'Proof of Concept',
        phase: 'Early stages',
        tools: '1 site vitrine',
        icon: CheckIcon
    },
    {
        description: 'Délivre une première version (convaincante) de ton service',
        subtitle: 'MVP',
        header: 'Minimum Viable Product',
        phase: 'Premières levées de fonds',
        tools: '1 site vitrine + 1 WebApp',
        icon: CheckIcon
    },
    {
        description: 'Lance officiellement ton (incroyable) site / app',
        subtitle: 'Beta',
        header: 'Version Beta Test',
        phase: "Phase d'accélération",
        tools: '1 site vitrine + 1 WebApp + 1 App Mobile',
        icon: CheckIcon
    },
    {
        description: "Plus rien ne t'arrête, tu es sur la bonne voie",
        subtitle: undefined,
        header: "To the moon",
        phase: 'Maturité',
        tools: undefined,
        icon: IoRocketSharp
    }
];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Feed() {
    return (
        <div className="flow-root max-w-sm mx-auto mt-6 sm:mt-12">
            <ul role="list" className="-mb-8">
                {activity.map((activityItem, activityItemIdx) => (
                    <li key={activityItemIdx}>
                        <Fade animate={animate.fadeIn} delay={activityItemIdx/5}>
                        <div className="relative pb-8">
                            {activityItemIdx !== activity.length - 1 ? (
                                <span
                                    className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                />
                            ) : null}
                            <div className="relative flex items-start space-x-3">
                                <>
                                    <div>
                                        <div className="relative px-1">
                                            <div
                                                className="flex h-8 w-8 items-center justify-center rounded-full bg-white ring-8 ring-primary-50">
                                                <activityItem.icon
                                                    className="h-5 w-5 text-primary-500"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div>
                                            <div className="">
                                                <h3 className="heading-6 text-gray-900">{activityItem.header}</h3>
                                            </div>
                                            <div className="flex gap-1 mt-1">
                                                <div className="mt-0.5 tag tag-outline">
                                                    {activityItem.phase}
                                                </div>
                                                {activityItem.subtitle && (
                                                    <div className="mt-0.5 tag tag-outline">
                                                        {activityItem.subtitle}
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                        <div className="mt-2 text-sm text-gray-700">
                                            <p>{activityItem.description}</p>
                                        </div>
                                    </div>
                                </>

                            </div>
                        </div>
                        </Fade>
                    </li>
                ))}
            </ul>
        </div>
    );
}
