import { HiBadgeCheck } from 'react-icons/hi'

export default function Benefits() {
  return (
    <section className="text-gray-600 body-font bg-gray-300">
      <div className="container px-5 py-20 mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-700">
            Benefits for the homes.
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-yellow-700 text-3xl mr-2" />
              <span className="title-font font-medium">
                Authentic Cliche Forage
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-yellow-700 text-3xl mr-2" />
              <span className="title-font font-medium">
                Kinfolk Chips Snackwave
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-yellow-700 text-3xl mr-2" />
              <span className="title-font font-medium">
                Coloring Book Ethical
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-yellow-700 text-3xl mr-2" />
              <span className="title-font font-medium">
                Typewriter Polaroid Cray
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-yellow-700 text-3xl mr-2" />
              <span className="title-font font-medium">Pack Truffaut Blue</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-yellow-700 text-3xl mr-2" />
              <span className="title-font font-medium">
                The Catcher In The Rye
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
