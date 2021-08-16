import Image from 'next/image'
import Link from 'next/link'
import { IoIosStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'

function EachItem({ item }) {
  return (
    <div className="xl:w-1/4 md:w-1/2 lg:w-1/4 p-3">
      <Link href={`/dashboard/items/${item.slug}`}>
        <a>
          <div className="border bg-white border-gray-200 rounded-sm md:border-white lg:border-gray-200 hover:shadow-sm">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={item.photo ? item.photo.formats.small.url : '/420x260.png'}
              height={260}
              width={420}
            />
            <div className="py-2 px-4">
              <h3 className="tracking-widest text-gray-500 text-xs uppercase font-normal">
                {item.category ? item.category.name : 'general'}
              </h3>
              <h2 className="text-base text-gray-700 font-semibold mb-1">
                {item.name}
              </h2>
              <div className="flex mb-2 text-yellow-700">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default EachItem
