import Landscape from '@/images/client/home/features/landscape.jpeg';
import Fade, { animate } from '@/base/animations/Fade';

const index = [
  {
    title: 'Landing Page',
    description: 'Le minimum pour entrer la cour des grands',
  },
  {
    title: 'Social Network',
    description: 'Il y a encore des gens sur Facebook ?',
  },

  {
    title: 'App mobiles',
    description: 'Tu pense que tu peux concurrencer Über ?',
  },
  {
    title: 'E-commerce',
    description: "Le site de Tesla, c'est un site marchand non ?",
  },
  {
    title: 'Plateforme',
    description: 'Blablacar, Airbnb, Vinted... enfin tu connais',
  },
  {
    title: 'CRM',
    description: 'Une idée de logiciel Sass pour détrôner SalesForce ?',
  },
  {
    title: 'Streaming',
    description: 'Youtube, Spotify, Netflix et compagnie',
    image: Landscape,
  },
  {
    title: 'Marketplace',
    description: 'Il est temps de recréer Amazon, le site est pas ouf',
    image: Landscape,
  },
];

export default function Features() {
  return (
    <div className="relative w-full px-6">
      <div className="mx-auto max-w-7xl sm:py-20 py-12 lg:py-32">
        <Fade animate={animate.fadeInDown}>
          <div className="mx-auto max-w-md space-y-6 py-12 text-center lg:max-w-lg">
            <h2 className="heading-1 text-gray-900">
              <span className="inline">Tout ce dont tu as besoin et </span>
              <span className="inline bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                + encore
              </span>
            </h2>
            <p className="body-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nunc ut aliquam aliquam, nunc nisl aliquam tortor.
            </p>
          </div>
        </Fade>

        <div className=" mx-auto sm:mt-12 grid cursor-crosshair justify-start gap-6 sm:grid-cols-2 md:max-w-xl lg:max-w-5xl lg:grid-cols-3  lg:justify-between lg:gap-12">
          {index.map((feature, index) => (
            <div key={index}>
              <Fade animate={animate.fadeInDown} delay={index / 8}>
                <div className="group flex  items-center gap-4 py-3 px-4 lg:justify-center">
                  <span className="relative flex h-3 w-3 transform transition group-hover:scale-110">
                    <span className="absolute inline-flex hidden h-full w-full animate-ping rounded-full bg-violet-500   transition group-hover:block" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-gray-200 transition group-hover:bg-violet-500" />
                  </span>
                  <div>
                    <h3 className="title-4 text-gray-900 lg:w-64">
                      {feature.title}
                    </h3>
                    <p className="body-4 text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
          <div className="sm:col-span-2  lg:col-span-1">
            <Fade animate={animate.fadeInDown} delay={8 / 8}>
              <div className="group flex items-center gap-4 rounded-xl border  border-2 border-dashed border-gray-300 py-3 px-4 hover:border-violet-500">
                <span className="relative flex h-3 w-3 transform transition group-hover:scale-110">
                  <span className="absolute inline-flex hidden h-full w-full animate-ping rounded-full bg-violet-500  transition group-hover:block" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-gray-200 transition group-hover:bg-violet-500" />
                </span>
                <div>
                  <h3 className="title-4 text-gray-400 group-hover:text-gray-900 lg:w-64">
                    Ton idée de fou
                  </h3>
                  <p className="body-4 text-gray-400 group-hover:text-gray-500">
                    C'est là que tu dois nous surprendre
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
