import Head from 'next/head'
import Image from 'next/image'

/**
 * Components.
 */
import { Flex } from '~/components/Page/components/Flex'
import { Typography } from '~/components/Typography/components/Typography'

/**
 * Images.
 */

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next PWA</title>
      </Head>

      <main>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          height="100vh"
        >
          <Image
            src="/images/icons/icon-192x192.png"
            alt="Logo"
            sizes="192px"
            layout="fixed"
            width={192}
            height={192}
          />

          <Typography variant="h1" isWhite fontSize={5}>
            Welcome
          </Typography>

          <Flex margin={{ top: 50 }} flexDirection="column">
            <Typography variant="p" isWhite fontSize={2}>
              This is a simple but effective boilerplate to Next PWA.
            </Typography>

            <Typography variant="p" isWhite fontSize={3}>
              I hope you like 👍
            </Typography>
          </Flex>
        </Flex>
      </main>
    </div>
  )
}
