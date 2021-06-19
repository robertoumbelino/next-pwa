import Head from 'next/head'

/**
 * Components.
 */
import { Flex } from '~/components/Page/components/Flex'
import { Typography } from '~/components/Typography/components/Typography'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PWA Next</title>
      </Head>

      <main>
        <Flex justifyContent="center" flexDirection="column" height="100vh">
          <Typography variant="h1" isWhite fontSize={3}>
            Welcome
          </Typography>

          <Typography variant="p" isWhite>
            This is a simple but effective PWA Next Boilerplate.
          </Typography>

          <Typography variant="p" isWhite>
            I hope you like 👍
          </Typography>
        </Flex>
      </main>
    </div>
  )
}
