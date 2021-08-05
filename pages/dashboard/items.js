import MainLayout from '../../components/layout/MainLayout'
import Image from 'next/image'
import { IoIosStar, IoMdStarHalf, IoMdStarOutline } from 'react-icons/io'
import { GrLinkNext } from 'react-icons/gr'
import Link from 'next/link'

function items() {
  return (
    <MainLayout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto max-w-screen-xl">
          <h1 className="text-2xl font-semibold mb-5">All Items</h1>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 lg:w-1/4 p-4">
              <div className="border border-gray-200 rounded-sm md:border-white lg:border-gray-200">
                <Image
                  alt="ecommerce"
                  className="object-cover w-full h-full block"
                  src="/420x260.png"
                  height={260}
                  width={420}
                />
                <div className="p-6">
                  <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Chichen Itza
                  </h2>
                  <div className="flex mb-4 text-yellow-700">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                  </div>
                  <Link href="#">
                    <a className="text-gray-700 inline-flex items-center md:mb-2 lg:mb-0">
                      More
                      <GrLinkNext className="text-sm mt-1 ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 lg:w-1/4 p-4">
              <div className="border border-gray-200 rounded-sm md:border-white lg:border-gray-200">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/420x260.png"
                  height={260}
                  width={420}
                />
                <div className="p-6">
                  <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Chichen Itza
                  </h2>
                  <div className="flex mb-4 text-yellow-700">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                  </div>
                  <Link href="#">
                    <a className="text-gray-700 inline-flex items-center md:mb-2 lg:mb-0">
                      More
                      <GrLinkNext className="text-sm mt-1 ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 lg:w-1/4 p-4">
              <div className="border border-gray-200 rounded-sm md:border-white lg:border-gray-200">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/420x260.png"
                  height={260}
                  width={420}
                />
                <div className="p-6">
                  <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Chichen Itza
                  </h2>
                  <div className="flex mb-4 text-yellow-700">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                  </div>
                  <Link href="#">
                    <a className="text-gray-700 inline-flex items-center md:mb-2 lg:mb-0">
                      More
                      <GrLinkNext className="text-sm mt-1 ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 lg:w-1/4 p-4">
              <div className="border border-gray-200 rounded-sm md:border-white lg:border-gray-200">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/420x260.png"
                  height={260}
                  width={420}
                />
                <div className="p-6">
                  <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Chichen Itza
                  </h2>
                  <div className="flex mb-4 text-yellow-700">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                  </div>
                  <Link href="#">
                    <a className="text-gray-700 inline-flex items-center md:mb-2 lg:mb-0">
                      More
                      <GrLinkNext className="text-sm mt-1 ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 lg:w-1/4 p-4">
              <div className="border border-gray-200 rounded-sm md:border-white lg:border-gray-200">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/420x260.png"
                  height={260}
                  width={420}
                />
                <div className="p-4">
                  <h3 className="tracking-widest text-gray-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Chichen Itza
                  </h2>
                  <div className="flex mb-4 text-yellow-700">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoMdStarHalf />
                    <IoMdStarOutline />
                  </div>
                  <Link href="#">
                    <a className="text-gray-700 inline-flex items-center md:mb-2 lg:mb-0 ">
                      More
                      <GrLinkNext className="text-sm mt-1 ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default items
