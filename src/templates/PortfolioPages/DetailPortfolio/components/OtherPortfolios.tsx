
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment/moment';

import {path} from "@/routes/paths";



export default function Otherportfolios({portfolios}: any) {

    return (
        <>
            <div className="">
                <div className="body-3 font-bold text-gray-900 dark:text-white group-hover:text-primary-500">Nos autres réalisations</div>
                <div className="grid w-full  mt-4 gap-2 ">
                    {portfolios.map((item, index) => (
                        <Link href={path.portfolio.slug + item.slug} key={index} className="w-full block">
                            <div className="group w-full h-32 hover:bg-white border border-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 rounded-ui overflow-hidden flex items-center overflow-hidden">
                                <div className=" w-32 lg:w-24 shadow h-full shrink-0 overflow-hidden font-bold text-white">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                        className="h-full w-full transform object-cover object-center "
                                    />
                                </div>
                                <div className="p-3 ">
                                    <div className="text-xs text-gray-500">
                                        {moment(item.createdAt).format('DD/MM/YYYY')}
                                    </div>
                                    <h3 className="body-4 font-bold text-gray-900 dark:text-white group-hover:text-primary-500">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
