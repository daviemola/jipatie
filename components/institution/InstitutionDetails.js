import Image from 'next/image'
import Link from 'next/link'
import { IoMdPin } from 'react-icons/io'

export default function InstitutionDetails({ institution }) {
  return (
    <section className="text-gray-600 body-font overflow-hidden min-h-3/4">
      <div className="container px-3 py-6 mx-auto max-w-screen-xl mt-6">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-md"
            src={
              institution?.profile_image
                ? institution?.profile_image.formats.medium.url
                : '/420x260.png'
            }
            width={400}
            height={400}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm text-gray-500 tracking-widest uppercase font-medium mb-2">
              {institution.institution_type
                ? `For ${institution.institution_type}`
                : 'normal'}
            </h2>
            <h1 className="text-gray-700 text-lg sm:text-xl font-medium uppercase mb-1">
              {institution.institution_name}
            </h1>
            <p className="text-gray-500 text-sm flex items-center my-3">
              <IoMdPin className="mr-2 text-emerald-600 text-lg" />
              {/* <IoMdPin className="mr-2 text-emerald-600 text-lg" /> */}
              {institution.institution_address}
            </p>
            <div className="flex item-center flex-col">
              <Link href="/dashboard/give">
                <a className="btn-give-item sm:w-3/5 w-full uppercase">
                  <div className="flex item-center justify-center">
                    Give an item
                  </div>
                </a>
              </Link>
              <Link href="/dashboard/items">
                <a className="underline font-normal mb-4">View items</a>
              </Link>
            </div>
            <hr className="border-t border-gray-300 my-3"></hr>
            <div className="flex my-5">
              <Image
                src="/000000.png"
                alt="owner-img"
                className="rounded-md"
                width={75}
                height={75}
              />
              <div className="ml-3 flex items-center">
                <div>
                  <p className="text-md font-semibold text-gray-600">
                    Meet the person in charge.
                  </p>
                  <p className="text-gray-500 text-sm flex items-center mb-2">
                    {institution.head_of_institution}
                  </p>
                </div>
                <hr className="border-t border-gray-300 my-3"></hr>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-3"></hr>
            <div className="my-3 pt-2">
              <p className="text-lg my-2 font-semibold text-gray-600">
                About this home
              </p>
              <p>{institution.about_institution}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
