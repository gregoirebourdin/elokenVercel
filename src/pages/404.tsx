import Link from "next/link";


export default function Error404() {
  return (
      <>
        <main className="grid min-h-full place-items-center bg-white dark:bg-gray-900  px-6 py-64 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-primary-500">404</p>
            <h1 className="mt-4 heading-2 text-gray-900 dark:text-white">Cette page n'existe pas</h1>
            <p className="mt-6 text-base leading-7 text-gray-500">Désolé, nous n'avons pas trouvé la page qui correspond à votre demande</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                  href={"/"}
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
