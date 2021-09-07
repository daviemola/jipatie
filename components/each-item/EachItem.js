import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiLocationMarker } from 'react-icons/hi'
import AuthContext from '@/context/AuthContext'

function EachItem({ item }) {
  const { user } = useContext(AuthContext)

  const foundRequest = item.requests.find(
    (item) => item.requested_by === user?.id,
  )

  return (
    <section className="text-gray-400 dark:bg-gray-900 bg-gray-100 body-font overflow-hidden">
      <div className="container px-5 md:pb-24 pb-12 pt-6 mx-auto max-w-6xl ">
        <div className="mb-6 text-center md:px-8">
          <h1 className="md:text-2xl lg:text-3xl text-xl text-gray-800 font-semibold dark:text-white">
            {`Offered to ${item.institution.institution_name}`}{' '}
          </h1>
          <h3 className="md:text-md text-base text-emerald-800 dark:text-emerald-700 font-semibold mb-6 ">
            {`By ${item.user.username}`}
          </h3>
        </div>

        <div className="flex items-center ">
          <div className="flex md:flex-row flex-col-reverse w-full md:px-8 mb-6 md:mb-0 md:space-x-7">
            <div className="lg:w-1/2 w-full">
              <h2 className="text-sm title-font text-gray-500 tracking-widest pt-6 md:pt-0">
                {item.category ? item.category.name : 'general'}
              </h2>
              <h1 className="dark:text-white text-gray-800 text-2xl lg:text-3xl title-font font-medium mb-4">
                {item.name}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-gray-700 dark:text-gray-400 text-indigo-400 border-b-2 dark:border-emerald-500 border-emerald-700 py-2 text-base lg:text-lg px-1">
                  Description
                </a>
                <a className="flex-grow text-gray-700 dark:text-gray-400 text-base lg:text-lg border-b-2 border-gray-700 py-2 px-1">
                  More Info
                </a>
                <a className="flex-grow text-gray-700 dark:text-gray-400 text-base lg:text-lg border-b-2 border-gray-700 py-2 px-1">
                  Dimensions
                </a>
              </div>
              <p className="leading-relaxed mb-4 dark:text-gray-400 text-gray-700">
                {item.description}
              </p>
              <div className="flex border-t border-gray-300 dark:border-gray-800 py-2">
                <span className="dark:text-gray-400 text-gray-600">
                  Condition
                </span>
                <span className="ml-auto text-gray-700 font-semibold dark:text-white">
                  {item.condition.charAt(0).toUpperCase() +
                    item.condition.slice(1)}
                </span>
              </div>
              <div className="flex border-t border-gray-300 dark:border-gray-800 py-2">
                <span className="dark:text-gray-400 text-gray-600">Size</span>
                <span className="ml-auto text-gray-700 font-semibold dark:text-white">
                  {item.size.charAt(0).toUpperCase() + item.size.slice(1)}
                </span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-300 dark:border-gray-800 py-2">
                <span className="dark:text-gray-400 text-gray-600">
                  Est. value:
                </span>
                <span className="ml-auto text-gray-700 font-semibold dark:text-white">
                  {`Ksh ${item.value}`}
                </span>
              </div>
              <div className="flex item-center">
                <span className="font-medium text-xl text-gray-700 dark:text-white">
                  <span className="title-font font-medium text-md text-gray-600 flex flex-row dark:text-white">
                    <span className="mr-2 text-emerald-800 dark:text-emerald-500 text-2xl">
                      <HiLocationMarker />
                    </span>
                    {item.location}
                  </span>
                </span>
                <button className="flex ml-auto text-white bg-emerald-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Accept
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <Image
                alt={item.name}
                className="object-cover object-center rounded-md md:w-full sm:w-full md:h-auto h-64"
                src={
                  item.photo ? item.photo.formats.medium.url : '/420x260.png'
                }
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EachItem
