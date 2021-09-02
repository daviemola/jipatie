import Image from 'next/image'
import Link from 'next/link'
import { IoIosPerson, IoMdPin } from 'react-icons/io'

export default function EachInstution({ institution }) {
  return (
    <div className="md:w-1/2 p-3">
      <Link href={`/institutions/${institution.id}`}>
        <a className="flex items-center">
          <div className=" sm:block hidden">
            <Image
              alt="mountain"
              className="sm:object-cover object-fill border-2 border-gray-300 sm:w-1/4 p-0"
              src={
                institution?.profile_image
                  ? institution?.profile_image.formats.small.url
                  : '/420x260.png'
              }
              width={150}
              height={100}
            />
          </div>

          <div id="body" className=" sm:ml-5 sm:w-3/4 py-3">
            <h4
              id="name"
              className="text-sm sm:text-md font-semibold mb-2 uppercase pr-2 dark:text-gray-300"
            >
              {institution.institution_name}
            </h4>
            <p className="text-gray-500 text-sm flex items-center mb-2">
              <IoIosPerson className="mr-2 text-emerald-600 text-xl" />
              {institution.head_of_institution}
            </p>
            <p className="text-gray-500 text-sm flex items-center dark:text-gray-300">
              <IoMdPin className="mr-2 text-emerald-600 text-lg" />
              {institution.institution_address}
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}
