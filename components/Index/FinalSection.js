import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronRight,
} from 'react-icons/hi'

export default function FinalSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto max-w-5xl flex flex-col items-center justify-center">
        <div>
          <div className="leading-7 text-base uppercase text-gray-600 mb-3 font-semibold">
            collaborate, questions, support or subscribe.
          </div>
          <div className="pt-1 relative mx-auto text-gray-600">
            <input
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-200 focus:bg-transparent focus:border-yellow-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
          <p className="text-sm mt-3 text-gray-500 mb-5 w-full">
            You can navigate through our beta version of the application.
          </p>
        </div>
      </div>
    </section>
  )
}
