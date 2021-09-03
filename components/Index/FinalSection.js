import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronRight,
} from 'react-icons/hi'

export default function FinalSection() {
  return (
    <section className="text-gray-600 body-font dark:bg-gray-800">
      <div className="container px-5 py-20 mx-auto max-w-5xl flex flex-col items-center justify-center">
        <div>
          <div className="leading-7 text-base uppercase text-gray-600 mb-3 font-semibold dark:text-gray-200">
            collaborate, questions, support or subscribe.
          </div>
          <div className="pt-1 relative mx-auto text-gray-600">
            <input
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-0 focus:ring-emerald-200 focus:bg-transparent dark:border-gray-600 dark:focus:border-emerald-800  focus:border-emerald-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:bg-gray-800 dark:text-white"
              name="search"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-3 mr-4 flex flex-col items-center"
            >
              <HiOutlineChevronRight className="text-gray-500 text-2xl" />
            </button>
          </div>
          <p className="text-sm mt-3 text-gray-500 mb-5 w-full dark:text-gray-400">
            You can navigate through our beta version of the application.
          </p>
        </div>
      </div>
    </section>
  )
}
