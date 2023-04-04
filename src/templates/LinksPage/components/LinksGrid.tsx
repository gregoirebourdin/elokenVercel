import Link from 'next/link';
import Image from 'next/image';

// ----------------------------------------------------------------------

export default function LinksGrid({ links }) {

    console.log(links)

  return (
    // <RoleBasedGuard accessibleRoles={['ADMIN']}>
    <>
      <div className="mx-auto grid gap-4 lg:gap-6  2xl:gap-8 md:grid-cols-2 xl:grid-cols-3 ">
        {links.map((item, index) => (
          <div key={index} className={index === 0 && 'lg:col-span-2'}>

              <Link href={item.destinationUrl}>
                <div className="group relative mx-auto aspect-[4/5] md:aspect-auto max-w-md md:max-w-none md:h-96 w-full overflow-hidden  rounded-ui">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    className="  h-full w-full transform rounded-ui object-cover object-center transition duration-500 group-hover:scale-125"
                  />
                  <div className="absolute bottom-0 flex h-3/4 w-full flex-col items-start justify-end gap-4 bg-gradient-to-t from-black via-black/70 to-transparent p-4 sm:p-6 lg:p-8 2xl:p-12">
                    <div>
                      <h2 className="  heading-4 text-white">
                        {item.title}
                      </h2>
                      <p className="body-4 lg:body-3 text-white">
                        {item.description}
                      </p>
                    </div>
                    <button className="button-blur">{item.buttonText}</button>
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
