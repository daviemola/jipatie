import Image from 'next/image'
import Link from 'next/link'
import { IoMdPin } from 'react-icons/io'

export default function InstitutionDetails({ institution }) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 md:py-24 py-12 mx-auto">
        <div className="sm:w-4/5 mx-auto flex sm:flex-row flex-wrap flex-col">
          <div className="md:w-1/2 w-full">
            <Image
              alt={item.name}
              className="object-cover object-center rounded-sm md:w-full sm:w-full md:h-auto h-64"
              src={item.photo ? item.photo.formats.medium.url : '/420x260.png'}
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2 w-full lg:pr-10 md:py-6 mb-6 md:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-white text-3xl title-font font-medium mb-4">
              Animated Night Hill Illustrations
            </h1>
            <div className="flex mb-4">
              <a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">
                Description
              </a>
              <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">
                Reviews
              </a>
              <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">
                Details
              </a>
            </div>
            <p className="leading-relaxed mb-4">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam iligo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean.
            </p>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Color</span>
              <span className="ml-auto text-white">Blue</span>
            </div>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Size</span>
              <span className="ml-auto text-white">Medium</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
              <span className="text-gray-500">Quantity</span>
              <span className="ml-auto text-white">4</span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                $58.00
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
