import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>We'll watch over you while you sleep</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <marquee>
          <Header title="ZZZZzzzz..." />
        </marquee>
      </main>
    </div>
  )
}
