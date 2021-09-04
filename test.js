import Image from 'next/image'
import Link from 'next/link'
import { IoMdPin } from 'react-icons/io'

export default function InstitutionDetails({ institution }) {
  return (
    <section className="bg-gray-100 min-h-75/100 dark:bg-gray-900">
      <div className="md:grid md:grid-cols-3 gap-4 mx-auto max-w-5xl sm:px-6 lg:px-8 px-4 pt-10">
        <div className="col-span-3">
          <h1 className="text-gray-700 dark:text-white text-2xl uppercase font-semibold">
            {institution.institution_name}
          </h1>
          <div className="items-center flex pt-3 pb-5">
            <IoMdPin className="mr-2 text-emerald-600 text-xl dark:to-emerald-400" />
            <h3 className="dark:text-gray-400">
              {institution.institution_address}
            </h3>
          </div>
        </div>
        <div className="col-span-2">
          <Image
            alt="ecommerce"
            className="lg:h-auto h-64 object-cover object-center rounded-md"
            src={
              institution?.profile_image
                ? institution?.profile_image.formats.medium.url
                : '/420x260.png'
            }
            width={600}
            height={350}
          />

          {/* Contents After Image */}

          <div className="mt-8 mb-10 border-t border-gray-300 dark:border-gray-700">
            <div className="flex items-center pt-8">
              <Image
                alt="ecommerce"
                className="lg:h-auto h-64 object-cover object-center rounded-md"
                src={'/420x260.png'}
                width={90}
                height={95}
              />
              <div className="pl-4">
                <p className="text-md font-semibold text-gray-600 dark:text-white">
                  Meet the person in charge.
                </p>
                <p className="text-gray-500 text-sm flex items-center mb-2 dark:text-gray-400">
                  {institution.head_of_institution}
                </p>
              </div>
              <hr className="border-b border-gray-700 my-3"></hr>
            </div>

            <div className="mt-8 pt-2 border-t border-gray-300 dark:border-gray-700">
              <p className="text-lg my-6 font-semibold text-gray-600 dark:text-white">
                About this home
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {institution.about_institution}
              </p>
            </div>
          </div>
        </div>

        {/* Mini Sticky Card */}

        <div className="">
          <div className="pt-6 px-6 py-3 border border-gray-300 dark:bg-gray-800 bg-white rounded-md dark:border-gray-700 flex items-center md:sticky">
            <div>
              <h4 className="text-md font-semibold">
                {institution.institution_name}
              </h4>
              <h6 className="text-sm text-gray-600 font-medium mt-3 pb-4 uppercase dark:text-gray-400">
                {institution.institution_type
                  ? `For ${institution.institution_type}`
                  : 'normal'}
              </h6>
              <div className="items-center flex">
                <IoMdPin className="mr-2 mb-3 text-xl text-emerald-600 dark:text-emerald-400" />
                <h3 className="dark:text-gray-200 text-sm">
                  {institution.institution_address}
                </h3>
              </div>
              <div className=" text-center pt-5 pb-6 ">
                <Link href="/">
                  <a className="btn-give-item w-full uppercase px-20">
                    Give Item
                  </a>
                </Link>
              </div>
              <div className="text-center pb-3">
                <Link href="/">
                  <a className="px-2 py-2 underline text-emerald-700 dark:text-emerald-400">
                    View Items
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
