import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { IoIosStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'

function EachItem({ item }) {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
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
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {item.category ? item.category.name : 'general'}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
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
              <div className="flex ml-6 items-center border-l-2 border-gray-200 space-x-2s">
                <span className="mx-3 font-semibold">Size:</span>
                {item.size}
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-md text-gray-600 flex flex-row">
                <span className="mr-2 text-yellow-900 text-2xl">
                  <HiLocationMarker />
                </span>
                {item.location}
              </span>
              <button className="uppercase flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-sm">
                Apply
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EachItem
