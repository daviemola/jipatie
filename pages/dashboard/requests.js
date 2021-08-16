import RequestPage from '@/components/dashboard/RequestPage'
import { API_URL } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import Head from 'next/head'
import MainLayout from '../../components/layout/MainLayout'

export default function Requestpage({ items, token }) {
  return (
    <MainLayout>
      <Head>
        <title>Requests</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-3 py-6 mx-auto max-w-screen-xl">
          <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
            <RequestPage items={items} token={token} />
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const res = await fetch(`${API_URL}/requests/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const items = await res.json()
  return {
    props: {
      items,
      token,
    },
  }
}
