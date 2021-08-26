import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

export default function Uses() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container p-6 sm:px-6 lg:px-36 md:py-12 mx-auto flex flex-wrap">
        <div className="md:w-1/2 md:px-12 pt-6">
          <h2 className="uppercase text-lg font-semibold py-2">
            Jipatie for you
          </h2>
          <p>
            Whatever items you own and may want to give it out. Maybe you have
            finally adopted the minimalist movement. We make it easier for you.
          </p>
          <div className="my-3">
            <Link href="/">
              <a className="flex items-center text-yellow-700">
                See how it works
                <HiArrowRight className="ml-2" />
              </a>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 md:px-12 pt-6">
          <h2 className="uppercase text-lg font-semibold py-1">
            Jipatie for homes
          </h2>
          <p>
            We make it even easier to get items from the public. Once items are
            posted, home admins can browse through items offered to them and
            select based on needs.
          </p>
          <div className="my-3">
            <Link href="/">
              <a className="flex items-center text-yellow-700">
                Explore the benefits
                <HiArrowRight className="ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
