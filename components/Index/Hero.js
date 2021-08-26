import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <section className="text-white bg-gray-600 min-h-3/4 md:min-h-9/10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center max-w-screen-xl">
        <div className="flex flex-col items-center md:pt-44 pt-14">
          <h1 className="title-font sm:text-4xl text-3xl uppercase text-center mb-4 font-semibold text-white">
            A platform for giving items
            <br className="hidden lg:inline-block" />
            to the needy
          </h1>
          <p className="mb-8 leading-relaxed text-lg min-w-min px-0 text-center md:px-52">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage.
          </p>
          <div className="flex justify-center">
            <Link href="/register">
              <a className="btn-yellow text-base">Start Giving</a>
            </Link>
            <button className="btn-gray text-base ml-4">Know More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
