import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="text-white body-font bg-gray-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center max-w-screen-xl">
        <a className="flex title-font font-medium items-center text-yellow-500 mb-4 md:mb-0">
          <span className="text-xl font-mono font-bold">JIPATIE</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link href="/dashboard">
            <a className="mr-5 hover:text-yellow-300 cursor-pointer">
              How it works?
            </a>
          </Link>
          <a className="mr-5 hover:text-yellow-300 cursor-pointer">About Us</a>
          <a className="mr-5 hover:text-yellow-300 cursor-pointer">
            Contact Us
          </a>
          <a className="mr-5 hover:text-yellow-300 cursor-pointer">Our Blog</a>
        </nav>
        <Link href="/register">
          <a className="btn-yellow text-sm">Start Giving</a>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
