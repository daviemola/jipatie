import Image from 'next/image'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-white dark:bg-gray-800 pt-5 border-t dark:border-gray-600 border-gray-200 inset-x-0 bottom-0">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col max-w-screen-xl">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          {/* <Image
            src={currentTheme === 'light' ? '/logo.svg' : '/logolight.svg'}
            width={35}
            height={35}
            alt="logo"
          /> */}
          <span className="ml-3 text-xl text-emerald-900 dark:text-emerald-400">
            nizetu
          </span>
        </a>
        <p className="text-sm text-gray-500 dark:text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Copyright &copy;{new Date().getFullYear()}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-600 hover:text-emerald-700 cursor-pointer">
            <FaFacebookSquare className="text-2xl" />
          </a>
          <a className="ml-3 text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-600 hover:text-emerald-700 cursor-pointer">
            <FaTwitterSquare className="text-2xl" />
          </a>
          <a className="ml-3 text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-600 hover:text-emerald-700 cursor-pointer">
            <FaInstagramSquare className="text-2xl" />
          </a>
          <a className="ml-3 text-emerald-900 dark:text-emerald-400 dark:hover:text-emerald-600 hover:text-emerald-700 cursor-pointer">
            <FaLinkedin className="text-2xl" />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
