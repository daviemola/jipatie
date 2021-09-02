import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { API_URL } from '@/config/index'
import toast, { Toaster } from 'react-hot-toast'
import { parseCookies } from '@/helpers/index'
import Link from 'next/link'
import Wrapper from '@/components/dashboard/Wrapper'

export default function RequestPage({ item, request, token }) {
  const [values, setValues] = useState({
    description: request.description,
    item: item.id,
    phone_number: request.phone_number,
    alternative_phone_no: request.alternative_phone_no,
    location: request.location,
  })

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    //validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === '',
    )
    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
      return
    }

    const res = await fetch(
      `${API_URL}/requests/${request.id}/${request.item.user}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      },
    )

    const data = await res.json()

    if (!res.ok) {
      toast.error(data.message[0].messages[0].id)
    } else {
      toast.success('Request successful')
      setTimeout(function () {
        router.push('/dashboard/items')
      }, 3000)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <MainLayout>
      <Head>
        <title>{`Request`} </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <Wrapper title="Edit Request">
        <div className="px-10 py-10 border-2 border-gray-200 bg-white">
          <h1 className="mb-2 font-semibold text-gray-700 text-lg ">{`${item.name}`}</h1>
          <p className="my-2 tracking-wide text-xs font-semibold text-gray-500">{`${item.user.username}`}</p>
          <p className="text-base text-gray-600">{item.description}</p>
          <Link href="">
            <a className="text-gray-600 text-base underline mt-3">
              View Posted Item
            </a>
          </Link>
          <form
            onSubmit={handleSubmit}
            className="border-t-2 border-gray-300 mt-8 pt-6"
          >
            <div className="py-3 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600 font-semibold"
                >
                  Reasons for wanting the items.*
                </label>
                <textarea
                  id="message"
                  name="description"
                  className="input-give"
                  placeholder="In about 50 words. Be short and precise."
                  rows="4"
                  value={values.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="sm:flex sm:gap-2">
                <div className="relative pt-3 sm:w-1/2">
                  <label className="leading-7 text-sm text-gray-600 font-semibold">
                    Phone Number*
                  </label>
                  <input
                    type="number"
                    placeholder="+25412345678"
                    name="phone_number"
                    value={values.phone_number}
                    onChange={handleInputChange}
                    className="input-give"
                  />
                </div>
                <div className="relative pt-3 sm:w-1/2">
                  <label className="leading-7 text-sm text-gray-600 font-semibold">
                    Alternative Phone Number*
                  </label>
                  <input
                    name="alternative_phone_no"
                    type="number"
                    placeholder="+25412345678"
                    value={values.alternative_phone_no}
                    onChange={handleInputChange}
                    className="input-give"
                  />
                </div>
              </div>
              <div className="relative pt-3">
                <label className="leading-7 text-sm text-gray-600 font-semibold">
                  Address*
                </label>
                <input
                  name="location"
                  type="text"
                  placeholder="Suggest a meetup location"
                  value={values.location}
                  onChange={handleInputChange}
                  className="input-give"
                />
              </div>
            </div>
            <div className="w-full mt-7">
              <Link href="#">
                <a className="text-gray-600 border border-gray-200 py-3 w-full px-5 mr-2 rounded-sm">
                  Cancel
                </a>
              </Link>
              <button
                className="text-gray-600 font-semibold bg-emerald-400 py-3 px-5 rounded-sm"
                type="submit"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </MainLayout>
  )
}

export async function getServerSideProps({ req, params: { slug, requestId } }) {
  const { token } = parseCookies(req)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  const reqs = await fetch(`${API_URL}/requests/${requestId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const res = await fetch(`${API_URL}/items/${slug}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const item = await res.json()
  const request = await reqs.json()

  return {
    props: {
      token,
      item,
      request,
    },
  }
}
