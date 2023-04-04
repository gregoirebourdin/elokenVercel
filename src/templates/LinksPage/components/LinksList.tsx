import Link from 'next/link';
import Image from 'next/image';
import AnchorArrow from "@/templates/Globals/elements/AnchorArrow";

// ----------------------------------------------------------------------

export default function LinksList({links, project}: any) {
    return (
        // <RoleBasedGuard accessibleRoles={['ADMIN']}>
        <>
            <div className="mx-auto grid gap-3">
                {links.map((item, index) => (
                    <div key={item.id}
                         className="w-full relative border border-gray-200 dark:border-gray-800 rounded-xl">
                        <Link href={item.destinationUrl}>
                            <div className='flex gap-6 group justify-start items-center p-4'>
                                <div className="hidden sm:block group relative overflow-hidden w-24 h-32 shrink-0 rounded-ui">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                        className="  transform rounded-ui object-cover object-center transition h-full w-full duration-500 group-hover:scale-125"
                                    />

                                </div>
                                <div className="sm:max-w-lg">
                                    <div className="space-y-2">
                                        <h2 className="  heading-6 lg:title-3 text-gray-800 dark:text-white">
                                            {item.title}
                                        </h2>
                                        <p className="body-5 text-gray-500 max-w-md">
                                            {item.description}
                                        </p>
                                    </div>
                                    {/*<Link href={item.destinationUrl}>*/}
                                    <div className="sm:absolute bottom-4  right-4">
                                        <AnchorArrow text={item.buttonText} href={undefined}/>
                                    </div>
                                    {/*</Link>*/}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
        // </RoleBasedGuard>
    );
}
