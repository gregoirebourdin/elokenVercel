
import NewsletterForm from './NewsletterForm';
export default function Newsletter() {

  return (
    <div className="pt-4">
      <div className="w-full ">
        <div className="relative">
            <div className="w-full items-center justify-between space-y-4 ">
              <div className="">
                <div className="body-3 font-bold text-gray-900 dark:text-white group-hover:text-primary-500">Inscrivez-vous à notre Newsletter</div>
              </div>
              <div className=" ">
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
