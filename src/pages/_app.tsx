import Head from 'next/head'

/**
 * Theme.
 */
import { ThemeProvider } from 'styled-components'

/**
 * Styles.
 */
import { GlobalStyles, theme } from '../styles/GlobalStyles'

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
        <meta name="description" content="Next PWA Boilerplate" />
        <meta name="keywords" content="Keywords" />

        <meta name="theme-color" content="red" />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="apple-mobile-web-app-title" content="Next PWA" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <meta name="msapplication-navbutton-color" content="red" />
        <meta name="msapplication-TileColor" content="red" />
        <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
        <meta name="msapplication-config" content="browserconfig.xml" />

        <meta name="application-name" content="Next PWA" />
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

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
