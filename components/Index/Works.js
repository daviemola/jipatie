import { FaBullseye, FaCaravan, FaListUl, FaRegHandshake } from 'react-icons/fa'

export default function Works() {
  return (
    <section className="text-gray-600 body-font bg-gray-200 dark:text-white dark:bg-gray-600">
      <div className="container px-5 py-24 mx-auto md:max-w-5xl">
        <div className="flex flex-col text-center w-full md:mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-700 dark:text-white">
            How it all works?
          </h1>
        </div>
        <div className="container flex flex-wrap -m-4 text-center justify-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-300 bg-gray-100 px-4 py-6 rounded-lg dark:border-gray-500 dark:bg-gray-700">
              <div className="flex flex-col items-center mt-4">
                <FaListUl className="font-medium text-4xl text-gray-900 dark:text-gray-400" />
              </div>
              <p className="leading-relaxed mt-8 uppercase font-semibold text-emerald-700 dark:text-emerald-400">
                The Homes
              </p>
              <p className="text-base mt-5 mb-8">
                Select the closest home to you or any home you prefer, from a
                list.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-300 bg-gray-100 px-4 py-6 rounded-lg dark:border-gray-500 dark:bg-gray-700">
              <div className="flex flex-col items-center mt-4">
                <FaBullseye className="font-medium text-4xl text-gray-900 dark:text-gray-400" />
              </div>
              <p className="leading-relaxed mt-8 uppercase font-semibold text-emerald-700 dark:text-emerald-400">
                Post Item
              </p>
              <p className="text-base mt-5 mb-8">
                Fill the form, upload an image to showcase the item to the home
                admins.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-300 bg-gray-100 px-4 py-6 rounded-lg dark:border-gray-500 dark:bg-gray-700">
              <div className="flex flex-col items-center mt-4">
                <FaRegHandshake className="font-medium text-4xl text-gray-900 dark:text-gray-400" />
              </div>
              <p className="leading-relaxed mt-8 uppercase font-semibold text-emerald-700 dark:text-emerald-400">
                agreement
              </p>
              <p className="text-base mt-5 mb-8">
                Once item is accepted, contact sharing, and agreement of the
                details of the item.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-300 bg-gray-100 px-4 py-6 rounded-lg dark:border-gray-500 dark:bg-gray-700">
              <div className="flex flex-col items-center mt-4">
                <FaCaravan className="font-medium text-4xl text-gray-900 dark:text-gray-400" />
              </div>
              <p className="leading-relaxed mt-8 uppercase font-semibold text-emerald-700 dark:text-emerald-400">
                Delivery
              </p>
              <p className="text-base mt-5 mb-8">
                Get to meet the home children. Plus lending a helping hand with
                the item.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
