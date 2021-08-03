import {
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaTwitterSquare,
} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="text-gray-600 body-font ">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col max-w-screen-xl">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">JIPATIE</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Copyright &copy;{new Date().getFullYear()}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <FaFacebookSquare className="text-2xl" />
          </a>
          <a className="ml-3 text-gray-500">
            <FaTwitterSquare className="text-2xl" />
          </a>
          <a className="ml-3 text-gray-500">
            <FaInstagramSquare className="text-2xl" />
          </a>
          <a className="ml-3 text-gray-500">
            <FaLinkedin className="text-2xl" />
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
