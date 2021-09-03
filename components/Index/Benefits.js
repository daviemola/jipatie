import { HiBadgeCheck } from 'react-icons/hi'

export default function Benefits() {
  return (
    <section className="text-gray-600 body-font bg-gray-300 dark:bg-gray-700">
      <div className="container px-5 py-20 mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xltext- text-2xl font-medium text-center title-font text-gray-800 dark:text-white">
            Benefits for the homes.
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 dark:bg-gray-600 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-emerald-700 dark:text-emerald-400 text-3xl mr-2" />
              <span className="title-font font-medium dark:text-gray-300 ">
                Easier for donations
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 dark:bg-gray-600 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-emerald-700 dark:text-emerald-400 text-3xl mr-2" />
              <span className="title-font font-medium dark:text-gray-300">
                {' '}
                More convinient
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 dark:bg-gray-600 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-emerald-700 dark:text-emerald-400 text-3xl mr-2" />
              <span className="title-font font-medium dark:text-gray-300">
                {' '}
                Increased control
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 dark:bg-gray-600 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-emerald-700 dark:text-emerald-400 text-3xl mr-2" />
              <span className="title-font font-medium dark:text-gray-300">
                {' '}
                More donated items
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 dark:bg-gray-600 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-emerald-700 dark:text-emerald-400 text-3xl mr-2" />
              <span className="title-font font-medium dark:text-gray-300">
                {' '}
                Support from us
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 dark:bg-gray-600 rounded flex p-4 h-full items-center">
              <HiBadgeCheck className="text-emerald-700 dark:text-emerald-400 text-3xl mr-2" />
              <span className="title-font font-medium dark:text-gray-300 ">
                Solution to some issues
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
