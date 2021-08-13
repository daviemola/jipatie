import Image from 'next/image'
import Link from 'next/link'
import { IoIosStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import { GrLinkNext } from 'react-icons/gr'

function EachItem({ item }) {
  return (
    <div className="xl:w-1/4 md:w-1/2 lg:w-1/4 p-4">
      <div className="border bg-white border-gray-200 rounded-sm md:border-white lg:border-gray-200">
        <Image
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={item.photo ? item.photo.formats.small.url : '/420x260.png'}
          height={260}
          width={420}
        />
        <div className="p-4">
          <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">
            {item.category ? item.category.name : 'general'}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            {item.name}
          </h2>
          <div className="flex mb-4 text-yellow-700">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoMdStarHalf />
            <IoMdStarOutline />
          </div>
          <Link href={`/dashboard/items/${item.slug}`}>
            <a className="text-gray-700 inline-flex items-center md:mb-2 lg:mb-0">
              More
              <GrLinkNext className="text-sm mt-1 ml-2" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EachItem
