import Benefits from '@/components/Index/Benefits'
import FinalSection from '@/components/Index/FinalSection'
import Uses from '@/components/Index/Uses'
import Works from '@/components/Index/Works'
import Head from 'next/head'
import Hero from '../components/Index/Hero'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Jipatie - Home</title>
        <meta
          name="jipatie"
          content="a platform for giving items kenya nairobi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Uses />
      <Works />
      <Benefits />
      <FinalSection />
    </Layout>
  )
}
