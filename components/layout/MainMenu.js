import React from 'react'
import { FaBars, FaUserCircle } from 'react-icons/fa'

function MainMenu() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <header className="text-white body-font bg-gray-700">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center max-w-screen-xl">
        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <a className="flex items-center text-yellow-300 md:mb-0">
            <span className="ml-3 text-xl font-mono font-bold">JIPATIE</span>
          </a>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-start' + (menuOpen ? ' flex' : ' hidden')
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-white hover:opacity-75">
                Items
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center hover:opacity-75">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center hover:opacity-75">
                Your Account
                <FaUserCircle className="ml-2 text-xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default MainMenu
