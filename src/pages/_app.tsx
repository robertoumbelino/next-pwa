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
        <meta name="viewport" content="uc-fitscreen=yes" />

        <meta name="description" content="Next PWA Boilerplate" />
        <meta name="keywords" content="Keywords" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
