import NewsletterForm from './NewsletterForm';

export default function Newsletter() {

  return (
    <div className="" id={"newsletter"}>
      <div className="w-full ">
        <div className="relative">
            <div className="  w-full items-center justify-between grid lg:flex gap-6 lg:gap-12 ">
              <div className="max-w-lg lg:max-w-2xl ">
                <h2 className="heading-2 text-gray-900 dark:text-white">
                  Inscrivez-vous à notre{' '}
                  <span className="inline heading-2 text-primary-500 ">Newsletter</span>
                </h2>
                <p className="body-2 text-gray-600 dark:text-gray-400">
                    Recevez directement dans votre boite mail nos dernières actualités et nos conseils pour vous aider à mieux gérer votre projet d'investissement immobilier subventionné.
                </p>
              </div>
              <div className="  max-w-lg  sm:flex ">
                <div className="min-w-0 flex-1">
                  <NewsletterForm  />
                </div>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
}
