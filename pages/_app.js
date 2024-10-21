// pages/_app.js
import Head from 'next/head';
import '../styles/globals.css'; // Your global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>NSB Consultancy | Top Sitecore Development Solutions</title> {/* Default title */}
        <meta
          name="description"
          content="NSB Consultancy offers comprehensive Sitecore development solutions, custom implementations, and digital transformation services tailored to your business needs."
        />
        <meta name="keywords" content="Sitecore development, web development, NSB Consultancy, custom Sitecore solutions, digital transformation, powerShell scripts" />
        <meta name="author" content="Nikhil Bidhuri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph Tags for social media sharing */}
        <meta property="og:title" content="NSB Consultancy | Top Sitecore Development Solutions" />
        <meta property="og:description" content="Explore NSB Consultancy's expert Sitecore development services to enhance your digital presence." />
        <meta property="og:image" content="/assets/logo.jpg" />
        <meta property="og:url" content="https://www.nsbconsultancy.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NSB Consultancy | Top Sitecore Development Solutions" />
        <meta name="twitter:description" content="Explore NSB Consultancy's expert Sitecore development services to enhance your digital presence." />
        <meta name="twitter:image" content="/assets/logo.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
