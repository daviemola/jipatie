import Link from 'next/link'
import React from 'react'
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'

function MainMenu() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <header className="text-white body-font bg-gray-700">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center max-w-screen-xl">
        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="flex items-center text-yellow-500 md:mb-0">
              <span className="text-xl font-mono font-bold">JIPATIE</span>
            </a>
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div className="pt-2 relative mx-auto text-gray-600 hidden md:block">
          <input
            className="border border-gray-30  bg-white h-10 px-5 pr-16 ml-10 rounded-sm text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search Items"
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
            <FaSearch className="text-yellow-700" />
          </button>
        </div>

        <div
          className={
            'lg:flex flex-grow items-start' + (menuOpen ? ' flex' : ' hidden')
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link href="/dashboard/give">
                <a className="btn-give">
                  <HiPlus className="text-2xl" />
                  Give an Item
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard/items">
                <a className="px-3 py-2 flex items-center hover:opacity-75 hover:text-yellow-500">
                  View Items
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard">
                <a className="px-3 py-2 flex items-center hover:opacity-75 hover:text-yellow-500">
                  Dashboard
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="px-3 py-2 flex items-center hover:opacity-75 hover:text-yellow-500">
                  David
                  <FaUserCircle className="ml-2 text-2xl inline-block" />
                </a>
              </Link>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default MainMenu
