import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import MainLayout from '@/components/layout/MainLayout'
import { API_URL } from '@/config/index'
import toast, { Toaster } from 'react-hot-toast'
import { parseCookies } from '@/helpers/index'
import Link from 'next/link'

export default function AddItemPage({ token }) {
  const router = useRouter()
  const { institution } = router.query
  const [values, setValues] = useState({
    name: '',
    value: '',
    description: '',
    size: '',
    color: '',
    rating: '',
    condition: '',
    location: '',
    category: '',
    institution,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    //validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === '',
    )
    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
    }

    const res = await fetch(`${API_URL}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      toast.error('Something went wrong. Try again.')
    } else {
      // const item = await res.json()
      // router.push(`/dashboard/items/${item.slug}`)
      router.push('/dashboard/items')
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <MainLayout>
      <Head>
        <title>Give Items</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="text-gray-600 body-font relative bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="container px-5 py-5 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto sm:px-10">
            <div className="flex flex-col w-full mb-3">
              <h1 className="sm:text-2xl text-xl font-medium title-font text-gray-800 dark:text-white">
                Give an Item
              </h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="dark:bg-gray-800 py-6 border dark:border-gray-700 rounded-md bg-white px-4 sm:px-8">
                <div className="flex flex-wrap -m-2">
                  <div className="px-2 pb-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600 dark:text-gray-300 font-semibold"
                      >
                        Item Name*
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleInputChange}
                        className="input-give"
                        placeholder="32 characters max - plain text"
                      />
                      <p className="dark:text-gray-400 text-gray-600 text-xs font-light pt-1">
                        32 characters max - plain text
                      </p>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-600 dark:text-gray-300 font-semibold"
                      >
                        Item Description*
                      </label>
                      <textarea
                        id="message"
                        name="description"
                        className="input-give"
                        rows="2"
                        value={values.description}
                        onChange={handleInputChange}
                      ></textarea>
                      <p className="dark:text-gray-400 text-gray-600 text-xs font-light pt-1">
                        128 characters max - plain text
                      </p>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label className="leading-7 text-sm text-gray-600 dark:text-gray-300 font-semibold">
                        Estimated Item Value*
                      </label>
                      <input
                        type="number"
                        id="value"
                        name="value"
                        className="input-give"
                        value={values.value}
                        onChange={handleInputChange}
                      />
                      <p className="dark:text-gray-400 text-gray-600 text-xs font-light pt-1">
                        Maximum value KES 100,000
                      </p>
                    </div>
                  </div>

                  <div className="p-2 w-full my-2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600 dark:text-gray-300 font-semibold"
                      >
                        <span>Item Size*</span>
                        <select
                          name="size"
                          form=""
                          className="form-select block w-full input-give p-2 dark:text-gray-400"
                          value={values.size}
                          onChange={handleInputChange}
                        >
                          <option>Select Item Size</option>
                          <option value="small">Small</option>
                          <option value="medium">Medium</option>
                          <option value="large">Large</option>
                          <option value="extra-large">Extra-Large</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="p-2 w-full my-2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600 dark:text-gray-300 font-semibold"
                      >
                        <span>Item Color*</span>
                        <select
                          name="color"
                          form=""
                          className="form-select block w-full input-give p-2 dark:text-gray-400"
                          value={values.color}
                          onChange={handleInputChange}
                        >
                          <option>Select Item Color</option>
                          <option value="emerald">emerald</option>
                          <option value="black">Black</option>
                          <option value="blue">Blue</option>
                          <option value="emerald">emerald</option>
                          <option value="red">Red</option>
                          <option value="white">White</option>
                          <option value="multi">Multi</option>
                          <option value="other">Other</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-600 dark:text-gray-300 font-semibold"
                      >
                        Out of 10 condition*
                      </label>
                      <input
                        type="number"
                        name="rating"
                        className="input-give"
                        value={values.rating}
                        onChange={handleInputChange}
                      />
                      <p className="dark:text-gray-400 text-gray-600 text-xs font-light pt-1">
                        Enter number between 1 and 10
                      </p>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600 dark:text-gray-300 font-semibold"
                      >
                        <span>Item Condition*</span>
                        <select
                          name="condition"
                          id="cars"
                          form=""
                          className="form-select block w-full input-give p-2 dark:text-gray-400"
                          value={values.condition}
                          onChange={handleInputChange}
                        >
                          <option>Select Item Condition</option>
                          <option value="excellent">Excellent</option>
                          <option value="great">Great</option>
                          <option value="good">Good</option>
                          <option value="fair">Fair</option>
                          <option value="bad">Bad</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600 dark:text-gray-300 font-semibold"
                      >
                        Item Location*
                      </label>
                      <input
                        type="text"
                        name="location"
                        className="input-give"
                        value={values.location}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full mb-3">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-600 dark:text-gray-300 font-semibold"
                      >
                        <span>Item Category*</span>
                        <select
                          name="category"
                          id="cars"
                          form=""
                          className="form-select block w-full input-give p-2 dark:text-gray-400"
                          value={values.category}
                          onChange={handleInputChange}
                        >
                          <option>Select Item Category</option>
                          <option value={1}>Fashion</option>
                          <option value={2}>Furniture & Appliances</option>
                          <option value={3}>Food and personal care</option>
                          <option value={4}>Electronics</option>
                          <option value={5}>Toys, hobby and diy</option>
                          <option value={6}>Other</option>
                        </select>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-5 p-2">
                <Link href="#">
                  <a className="text-gray-900 bg-gray-300 dark:text-gray-200 dark:bg-gray-700 py-3 w-full px-5 mr-2 rounded-md">
                    Cancel
                  </a>
                </Link>
                <button
                  className="text-white font-semibold bg-emerald-700 dark:bg-emerald-700 py-3 px-5 rounded-md"
                  type="submit"
                >
                  Submit item
                </button>
                <p className="dark:text-gray-400 text-gray-600 text-xs font-light py-3">
                  Kindly upload an image in the next step.
                </p>
              </div>
            </form>
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
        destination: '/account/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      token,
    },
  }
}