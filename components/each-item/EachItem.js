import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPencilAlt } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { IoIosStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import AuthContext from '@/context/AuthContext'

function EachItem({ item }) {
  const { user } = useContext(AuthContext)

  const foundRequest = item.requests.find(
    (item) => item.requested_by === user?.id,
  )

  return (
    <section className="text-gray-600 body-font overflow-hidden min-h-3/4">
      <div className="container px-3 py-6 mx-auto max-w-screen-xl mt-6">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-sm"
            src={item.photo ? item.photo.formats.medium.url : '/420x260.png'}
            width={400}
            height={400}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm text-gray-500 tracking-widest uppercase font-medium dark:text-gray-400">
              {item.category ? item.category.name : 'general'}
            </h2>
            <h1 className="text-gray-700 text-2xl font-semibold mb-1 dark:text-gray-200">
              {item.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center text-emerald-700 dark:text-emerald-500 text-xl">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
                <span className="text-gray-600 ml-3 dark:text-gray-300">
                  {item.condition}
                </span>
              </span>
              <span className="flex ml-3 pl-3 py-1 border-l border-gray-600 space-x-2s">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none bg-emerald-600"></button>
              </span>
            </div>
            <p className="leading-relaxed dark:text-gray-100">
              {item.description}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-300 mb-5 dark:border-gray-700 dark:text-gray-400">
              <div className="flex ">
                <span className="mr-2 text-md font-semibold dark:text-gray-300">
                  Est. value:
                </span>
                {`Ksh ${item.value}`}
              </div>
              <div className="flex ml-3 items-center border-l border-gray-500 dark:border-gray-700 space-x-2s">
                <span className="mx-3 font-semibold  dark:text-gray-300">
                  Size:
                </span>
                {item.size}
              </div>
            </div>
            <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-300 mb-5 dark:border-gray-700">
              <div className="flex dark:text-gray-400">
                <span className="mr-2 text-md font-semibold  dark:text-gray-300">
                  Offered by:
                </span>
                {`${item.user.username}`}
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-md text-gray-600 flex flex-row dark:text-gray-100">
                <span className="mr-2 text-emerald-800 dark:text-emerald-500 text-2xl">
                  <HiLocationMarker />
                </span>
                {item.location}
              </span>
              {foundRequest ? (
                <div className="flex ml-auto ">
                  <button
                    disabled
                    className="uppercase text-gray-600 font-semibold bg-gray-200 border-0 py-2 px-6 rounded-sm cursor-not-allowed"
                  >
                    Request submitted
                  </button>
                  <button className="rounded-full w-10 h-10 bg-emerald-300 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <FaPencilAlt />
                  </button>
                </div>
              ) : user?.id === item.user.id ? (
                <div className="flex ml-auto ">
                  <Link
                    href={
                      item.requests.length !== 0
                        ? `/dashboard/items/${item.slug}/requests`
                        : '#'
                    }
                  >
                    <a className="uppercase text-gray-700 font-semibold bg-gray-200 border-0 py-2 px-6 rounded-sm hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-400">
                      {item.requests.length !== 0
                        ? `View Requests`
                        : 'No requests'}
                    </a>
                  </Link>
                  <Link href={`/dashboard/items/edit/${item.slug}`}>
                    <a className="rounded-full w-10 h-10 bg-emerald-400 p-0 border-0 inline-flex items-center justify-center text-gray-800 ml-4">
                      <FaPencilAlt />
                    </a>
                  </Link>
                </div>
              ) : (
                <Link href={`/dashboard/items/request/${item.slug}`}>
                  <a className="uppercase flex ml-auto text-white font-semibold bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-300 rounded-sm">
                    Send request
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EachItem
