import Head from 'next/head';
import { useRouter } from 'next/router';

Meta.defaultProps = {
  title: 'Starter Eloken',
  keywords: 'Sur-mesure, puissant, français, eloken',
  description: 'Un site web sur-mesure, puissant et français',
  og: '/ogimage-eloken.png',
    type: 'website',
};

export default function Meta({ title, keywords, description, og, type }: any) {
  const { pathname } = useRouter();
  return (
    <Head>
      {/* GLOBAL */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="copyright" content={process.env.NEXT_PUBLIC_WEBSITE_NAME} />
      <meta name="language" content="fr" />
      <meta name="robots" content="index,follow" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title + ' - Admin Eloken'}</title>

      {/* FAVICON */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      {/* OG */}
      <meta name="og:title" content={title} />
      <meta name="og:url" content={pathname} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={og} />
      <meta name="og:type" content={type} />
      <meta
        name="og:site_name"
        content={process.env.NEXT_PUBLIC_WEBSITE_NAME}
      />
      <meta name="og:locale" content="fr_FR" />
    </Head>
  );
}
