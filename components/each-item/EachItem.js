import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaHeart, FaPenAlt, FaPencilAlt } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { IoIosStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import AuthContext from '@/context/AuthContext'

function EachItem({ item }) {
  const { user } = useContext(AuthContext)

  let isRequested
  item.requests.map((req) => {
    if (req.requested_by === user?.id) {
      isRequested = true
    } else {
      isRequested = false
    }
  })

  return (
    <section className="text-gray-600 bg-white w-full h-full py-10">
      <div className="container px-5 py-10 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-sm"
            src={item.photo ? item.photo.formats.medium.url : '/420x260.png'}
            width={400}
            height={400}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm text-gray-500 tracking-widest uppercase font-medium">
              {item.category ? item.category.name : 'general'}
            </h2>
            <h1 className="text-gray-700 text-2xl font-semibold mb-1">
              {item.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center text-yellow-700 text-xl">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
                <span className="text-gray-600 ml-3">{item.condition}</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none bg-yellow-600"></button>
              </span>
            </div>
            <p className="leading-relaxed">{item.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ">
                <span className="mr-2 text-md font-semibold">Est. value:</span>
                {`Ksh ${item.value}`}
              </div>
              <div className="flex ml-3 items-center border-l-2 border-gray-200 space-x-2s">
                <span className="mx-3 font-semibold">Size:</span>
                {item.size}
              </div>
            </div>
            <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex ">
                <span className="mr-2 text-md font-semibold">Offered by:</span>
                {`${item.user.username}`}
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-md text-gray-600 flex flex-row">
                <span className="mr-2 text-yellow-900 text-2xl">
                  <HiLocationMarker />
                </span>
                {item.location}
              </span>
              {isRequested ? (
                <div className="flex ml-auto ">
                  <button
                    disabled
                    className="uppercase text-gray-600 font-semibold bg-gray-200 border-0 py-2 px-6 rounded-sm cursor-not-allowed"
                  >
                    Request submitted
                  </button>
                  <button className="rounded-full w-10 h-10 bg-yellow-300 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <FaPencilAlt />
                  </button>
                </div>
              ) : user?.id !== item.user.id ? (
                <Link href={`/dashboard/items/request/${item.slug}`}>
                  <a className="uppercase flex ml-auto text-gray-600 font-semibold bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded-sm">
                    Send request
                  </a>
                </Link>
              ) : (
                <div className="flex ml-auto ">
                  <Link href={`/dashboard/items/${item.slug}/requests`}>
                    <a className="uppercase text-gray-700 font-semibold bg-gray-200 border-0 py-2 px-6 rounded-sm hover:bg-gray-300">
                      View requests
                    </a>
                  </Link>

                  <Link href={`/dashboard/items/edit/${item.slug}`}>
                    <a className="rounded-full w-10 h-10 bg-yellow-300 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <FaPencilAlt />
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EachItem
