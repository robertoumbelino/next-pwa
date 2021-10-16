import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/**
 * Component.
 */
export default class PWADocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta name="theme-color" content="red" />
          <meta name="mobile-web-app-capable" content="yes" />

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Next PWA" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          <meta name="msapplication-TileColor" content="red" />
          <meta name="msapplication-navbutton-color" content="red" />
          <meta name="msapplication-config" content="browserconfig.xml" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />

          <meta name="msapplication-starturl" content="/" />
          <meta name="application-name" content="Next PWA" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="msapplication-tooltip" content="Tooltip Text" />

          <meta name="full-screen" content="yes" />
          <meta name="imagemode" content="force" />
          <meta name="browsermode" content="application" />
          <meta name="nightmode" content="enable/disable" />
          <meta name="screen-orientation" content="portrait" />
          <meta name="layoutmode" content="fitscreen/standard" />

          <link rel="icon" href="/favicon.ico" />

          <link href="/manifest.json" rel="manifest" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            href="/images/apple/apple-icon-180.png"
          />

          {/* apple splash screen images */}
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-2048-2732.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-2732-2048.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1668-2388.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-2388-1668.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1536-2048.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-2048-1536.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1668-2224.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-2224-1668.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1620-2160.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-2160-1620.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1284-2778.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-2778-1284.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1170-2532.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-2532-1170.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1125-2436.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-2436-1125.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1242-2688.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-2688-1242.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-828-1792.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1792-828.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1242-2208.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-2208-1242.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-750-1334.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1334-750.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-640-1136.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
          />
          <link
            rel="apple-touch-startup-image"
            href="/images/apple/apple-splash-dark-1136-640.jpg"
            media="(prefers-color-scheme: dark) and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
