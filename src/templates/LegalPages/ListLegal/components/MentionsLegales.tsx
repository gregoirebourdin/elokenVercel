/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import {Fragment} from 'react'
import {Tab} from '@headlessui/react'
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/20/solid";
import AnchorArrow from "@/templates/Globals/elements/AnchorArrow";
import {path} from "@/routes/paths";
import {EmptyState} from "@/templates/Globals/elements";

const tabs = [
    {
        name: 'Propriété',
        features: [
            {
                name: 'Société',
                description:
                    'Eloken - Nom commercial de la SAS Heracles',
            },
            {
                name: 'Capital social',
                description:
                    '6500€',
            },

            {
                name: 'Siège social',
                description:
                    '229 rue Saint-Honoré 75001 Paris',
            },
            {
                name: 'SIRET',
                description:
                    '837 950 955 00026 RCS PARIS',
            },
            {
                name: 'N° TVA',
                description:
                    'FR04837950955',
            },
            {
                name: 'Code APE',
                description:
                    '6201Z - Programmation informatique',
            },
        ],
    },
    {
        name: 'Responsabilités',
        features: [
            {
                name: 'Publication',
                description:
                    'Guillaume Rouxel, Président de la SAS Heracles',
            },
            {
                name: 'Rédaction',
                description:
                    'Guillaume Rouxel',
            },
            {
                name: 'Données personnelles',
                description:
                    'Guillaume Rouxel',
            },
        ],
    },
    {
        name: 'Hébergement',
        features: [
            {
                name: "Vercel Inc.",
                description:
                    '340 S Lemon Ave #4133 Walnut, CA 91789',

            },
        ],
    },
    {
        name: 'Contact',
        features: [
            {
                name: 'E-mail',
                description:
                    'hello@eloken.com',
            },
            {
                name: 'Téléphone',
                description:
                    '06 86 70 95 16',
            },
        ],
    },
    {
        name: 'Documents'
    },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MentionsLegales({legals}: any) {
    return (
        <>
            <div aria-labelledby="features-heading">
                <div>
                    <Tab.Group as="div" className="">
                        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                            <div className="flex-auto border-b border-gray-200 dark:border-gray-800 px-4 sm:px-0">
                                <Tab.List className="-mb-px flex space-x-10">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            className={({selected}) =>
                                                classNames(
                                                    selected
                                                        ? 'border-primary-500 text-primary-500'
                                                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-700',
                                                    'whitespace-nowrap focus:outline-none border-b-2 py-6 text-sm font-medium'
                                                )
                                            }
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                        </div>

                        <Tab.Panels as={Fragment}>
                            {tabs.map((tab) =>
                                tab.name === 'Documents' ? (
                                    <Tab.Panel key={tab.name}
                                               className="gap-12 grid sm:grid-cols-2 md:grid-cols-3 pt-10 lg:pt-16">
                                        {legals.length === 0 ? (
                                            <div className="grid w-full sm:col-span-2 md:col-span-3">
                                                <EmptyState text={"Aucun document légal pour le moment"}/>
                                            </div>
                                        ) : (
                                            legals.map((legal, index) => (
                                                <div key={index} className="grid gap-x-8">
                                                    <div className="mt-6 group cursor-pointer lg:mt-0">
                                                        <Link href={path.legal.slug + legal.slug}>
                                                            <h3 className="text-base font-semibold text-gray-900 dark:text-white">{legal.title}</h3>
                                                            <AnchorArrow href={undefined}
                                                                         text={'Consulter'}/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )))}
                                    </Tab.Panel>
                                ) : (
                                    <Tab.Panel key={tab.name}
                                               className="gap-12 grid sm:grid-cols-2 md:grid-cols-3 pt-10 lg:pt-16">
                                        {tab.features.map((feature) => (
                                            <div key={feature.name} className="grid gap-x-8">
                                                <div className="mt-6 lg:mt-0">
                                                    <h3 className="text-base font-semibold text-gray-900 dark:text-white">{feature.name}</h3>
                                                    <p className="mt-2 body-4">{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </Tab.Panel>
                                ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </>
    )
}
