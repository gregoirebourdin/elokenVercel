import Image from "next/image";

export default function TeamList({members}) {
    return (
        <>
            <div className="space-y-12">
                <ul
                    role="list"
                    className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12 lg:gap-y-12 lg:space-y-0"
                >
                    {members.map((person) => (
                        <li key={person.title}>
                            <div
                                className="space-y-4  sm:grid sm:grid-cols-3 items-center sm:gap-6 sm:space-y-0 lg:gap-8">
                                <div className="aspect-w-3 aspect-h-3 h-0 sm:aspect-w-3 sm:aspect-h-4 ">
                                    <Image
                                        className="rounded-ui object-cover shadow-lg"
                                        src={person.image}
                                        alt={person.title}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="">
                                        <div className="space-y-1 text-lg font-medium ">
                                            <p className="tag  tag-primary">{person.job}</p>
                                            <h3 className="heading-4 text-gray-900 dark:text-white">{person.title}</h3>
                                            <div className="body-2">
                                                <p className="text-gray-500">{person.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
