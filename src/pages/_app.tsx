import Head from 'next/head'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>PWA Next</title>

        <meta name="theme-color" content="red" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="apple-mobile-web-app-title" content="Application Title" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <meta name="msapplication-navbutton-color" content="red" />
        <meta name="msapplication-TileColor" content="red" />
        <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
        <meta name="msapplication-config" content="browserconfig.xml" />

        <meta name="application-name" content="Application Name" />
        <meta name="msapplication-tooltip" content="Tooltip Text" />
        <meta name="msapplication-starturl" content="/" />

        <meta name="msapplication-tap-highlight" content="no" />

        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />

        <meta name="nightmode" content="enable/disable" />

        <meta name="viewport" content="uc-fitscreen=yes" />

        <meta name="layoutmode" content="fitscreen/standard" />

        <meta name="imagemode" content="force" />

        <meta name="screen-orientation" content="portrait"></meta>
      </Head>

      <Component {...pageProps} />
    </>
  )
}
