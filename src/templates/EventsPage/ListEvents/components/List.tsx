
import moment from "moment/moment";
import {AnchorArrow, EmptyState} from "@/templates/Globals/elements";
import {useEffect} from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function List({events}) {
    // get today's date
    const today = new Date()
    const todayDate = moment(today).format('DD/MM/YYYY')

    // Pour tout les events, on remplace la date et on la formate en DD/MM/YYYY

        events.forEach(event => {
            event.timing = new Date(event.date) > today
        }) ;
        console.log(events)
        console.log(today)





    return (
        <>
            {events.length === 0 ? (
                <div className="grid w-full">
                    <EmptyState text={"Aucun évènement de prévu pour le moment"}/>
                </div>
            ) : (
            <div className="">
                <div className="space-y-4">
                    {events.map((event) => (

                        <div key={event.id} className=" relative sm:rounded-ui">
                            <div
                                className={"sm:py-6 py-4 px-4 sm:px-6 rounded-ui justify-between lg:grid lg:grid-cols-12 border lg:gap-x-8 lg:p-8"
                                    + (!event.timing ? " dark:border-gray-800 bg-transparent border-transparent opacity-50 mx-3 " : "  border-gray-200 dark:border-transparent dark:bg-gray-800")}
                            >
                                <div className="sm:flex lg:col-span-8">

                                    <div className="mt-6 sm:mt-0">
                                        <div className="flex gap-2 mb-2 items-center">
                                            <span
                                                className={classNames(
                                                    event.timing ? 'bg-green-100 dark:bg-green-700/30' : 'bg-gray-100 dark:bg-gray-700/40',
                                                    'h-4 w-4 rounded-full flex items-center justify-center'
                                                )}
                                                aria-hidden="true"
                                            >
                                            <span
                                                className={classNames(
                                                    event.timing ? 'bg-green-400 dark:bg-green-600' : 'bg-gray-400 dark:bg-gray-700',
                                                    'h-2 w-2 rounded-full'
                                                )}
                                            />
                                            </span>
                                            <span
                                                className="body-4">{moment(event.date).format('DD/MM/YYYY') + " à " + event.hour}</span>
                                        </div>
                                        <h3 className="heading-6 text-gray-900 dark:text-white">
                                            {event.title}
                                        </h3>
                                        <p className="mt-1 body-sm text-gray-500">{event.content}</p>
                                    </div>
                                </div>

                                <div className="mt-4 lg:mt-0 lg:col-span-4 h-full w-full">
                                    <div className="flex items-end justify-end h-full w-full">
                                        <div className="grid lg:grid-cols-1 w-full items-center sm:grid-cols-2">
                                            <div
                                                className="flex flex-wrap justify-start mt-2 lg:mt-0 lg:justify-end max-lg:h-full gap-1 items-center">
                                                <span
                                                    className="tag tag-outline">{event.tag}</span>
                                                {event.price == 0 ? (
                                                    <span
                                                        className="tag tag-outline">Gratuit</span>
                                                ) : (
                                                    <span
                                                        className="tag tag-outline">{event.price} €</span>
                                                )}
                                            </div>
                                            {event.reservationPlace && (
                                                <div className="flex justify-end lg:mt-3 items-center">
                                                    {
                                                        event.timing && (
                                                            <AnchorArrow text={'Rejoindre'} href={event.reservationPlace}/>
                                                        )
                                                    }
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )}
        </>
    )
}
