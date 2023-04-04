import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <>
        <Html lang="fr" className='scroll-smooth bg-white' style={{scrollBehavior:'smooth'}}>
            <Head>
                <script async defer data-website-id="3a0b99cd-7128-41f9-9d3a-ff2e02afe6c7" src="https://analytics-pink-iota.vercel.app/umami.js"/>
            </Head>
          <Main />
          <NextScript />
        </Html>
      </>
    );
  }
}

export default MyDocument;
