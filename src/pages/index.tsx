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
            sizes="96px"
            layout="fixed"
            width={100}
            height={100}
          />

          <Typography variant="h1" isWhite fontSize={3}>
            Welcome
          </Typography>

          <Flex
            margin={{ top: 16 }}
            padding={{ all: 8 }}
            flexDirection="column"
          >
            <Typography variant="p" isWhite fontSize={1}>
              This is a simple but effective boilerplate to Next PWA.
            </Typography>

            <Typography variant="p" isWhite fontSize={2}>
              I hope you like 👍
            </Typography>
          </Flex>
        </Flex>
      </main>
    </div>
  )
}
