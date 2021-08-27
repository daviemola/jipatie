import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <section className="text-white bg-gray-600 min-h-10/10 sm:min-h-3/4 md:min-h-9/10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-screen-xl">
        <div className="flex flex-col items-center sm:pt-44 pt-20 pb-14 sm:pb-6">
          <h1 className="md:text-4xl text-2xl uppercase text-center mb-4 font-semibold">
            A platform for giving items
            <br className="md:hidden lg:inline-block" />
            to the needy
          </h1>
          <p className="md:mb-8 mb-2 leading-relaxed text-base md:text-lg min-w-min px-0 text-center lg:px-52">
            {`
          "He that hath two coats, let him impart to him that hath none; and he that hath food, let him do likewise."
          We try to make it easier to give items to those that need.
              `}
          </p>
          <div className="flex justify-center">
            <Link href="/register">
              <a className="btn-yellow text-base">Start Giving</a>
            </Link>
            <button className="btn-gray text-base ml-4">Know More</button>
          </div>
          <p className="mt-4 font-semibold text-gray-200">
            EXPLORE. BETA VERSION.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
