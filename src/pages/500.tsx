import Link from "next/link";
import {path} from "@/routes/paths";

export default function Error500() {
  return (
      <>
        <main className="grid min-h-full place-items-center bg-white dark:bg-gray-900  px-6 py-64 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-primary-500">500</p>
            <h1 className="mt-4 heading-2 text-gray-900 dark:text-white">Un problème est survenu</h1>
            <p className="mt-6 text-base leading-7 text-gray-500">Désolé, il semblerait qu'il y ait un problème de notre côté. Merci d'en informer l'éditeur du site à l'adresse support@eloken.com.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                  href={path?.root}
                  className=""
              >
                <button className="button-primary">
                  Retour à l'accueil
                </button>
              </Link>
            </div>
          </div>
        </main>
      </>
  )
}
