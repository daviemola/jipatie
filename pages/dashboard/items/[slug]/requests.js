import Head from 'next/head'
import MainLayout from '@/components/layout/MainLayout'
import { API_URL } from '@/config/index'
import { parseCookies } from 'helpers'
import Wrapper from '@/components/dashboard/Wrapper'
import ItemRequests from '@/components/each-item/ItemRequests'

function item({ item, requests }) {
  return (
    <MainLayout>
      <Head>
        <title>{`Requests ${item.name}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper title={`Requests for ${item?.name}`}>
        <ItemRequests request={requests} />
      </Wrapper>
    </MainLayout>
  )
}

export async function getServerSideProps({ query: { slug }, req }) {
  const { token } = parseCookies(req)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const res = await fetch(`${API_URL}/items?slug=${slug}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const item = await res.json()

  const reqs = await fetch(`${API_URL}/requests/${slug}/item`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const requests = await reqs.json()

  return {
    props: {
      item: item[0],
      requests,
    },
  }
}

export default item