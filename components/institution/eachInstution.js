import Image from 'next/image'
import Link from 'next/link'
import { IoIosPerson, IoMdPin } from 'react-icons/io'

export default function EachInstution({ institution }) {
  // console.log(institution)
  return (
    <Link href={'#'}>
      <a className="flex items-center sm:border border-b border-gray-300 sm:border-gray-200 dark:bg-gray-800 sm:p-2">
        <div className=" sm:block hidden">
          <Image
            alt="mountain"
            className="sm:object-cover object-fill border-2 border-gray-300 sm:w-1/4 p-0"
            src="/400x400.png"
            width={150}
            height={150}
          />
        </div>

        <div id="body" className="flex flex-col sm:ml-5 sm:w-3/4 py-3">
          <h4
            id="name"
            className="text-sm sm:text-md font-semibold mb-2 uppercase pr-2"
          >
            {institution.institution_name}
          </h4>
          <p className="text-gray-500 text-sm flex items-center mb-2">
            <IoIosPerson className="mr-2 text-yellow-600 text-xl" />
            {institution.head_of_institution}
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            <IoMdPin className="mr-2 text-yellow-600 text-lg" />
            {institution.institution_address}
          </p>
        </div>
      </a>
    </Link>
  )
}
