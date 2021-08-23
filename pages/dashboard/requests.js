import RequestPage from '@/components/dashboard/RequestPage'
import { API_URL, DASH_PER_PAGE } from '@/config/index'
import { parseCookies } from '@/helpers/index'
import Head from 'next/head'
import MainLayout from '../../components/layout/MainLayout'

export default function Requestpage({ items, token, page, total }) {
  return (
    <MainLayout>
      <Head>
        <title>Requests</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font overflow-hidden min-h-3/4">
        <div className="container px-3 py-6 mx-auto max-w-screen-xl">
          <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
            <RequestPage
              items={items}
              token={token}
              page={page}
              total={total}
            />
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export async function getServerSideProps({ req, query: { page = 1 } }) {
  const { token } = parseCookies(req)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const start = +page === 1 ? 0 : (+page - 1) * DASH_PER_PAGE

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/requests/countme`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const total = await totalRes.json()

  const res = await fetch(
    `${API_URL}/requests/me?_limit=${DASH_PER_PAGE}&_start=${start}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  const items = await res.json()
  return {
    props: {
      items,
      token,
      page: +page,
      total,
    },
  }
}