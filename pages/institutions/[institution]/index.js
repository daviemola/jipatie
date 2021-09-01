import Head from 'next/head'
import MainLayout from '@/components/layout/MainLayout'
import { API_URL } from '@/config/index'
import { parseCookies } from 'helpers'
import InstitutionDetails from '@/components/institution/InstitutionDetails'

function item({ item }) {
  return (
    <MainLayout>
      <Head>
        <title>{item.institution_name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InstitutionDetails institution={item} />
    </MainLayout>
  )
}

export async function getServerSideProps({ query: { institution }, req }) {
  const { token } = parseCookies(req)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  console.log(institution)

  const res = await fetch(`${API_URL}/institutions/${institution}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const item = await res.json()
  return {
    props: {
      item: item,
    },
  }
}

export default item
