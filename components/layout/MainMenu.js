import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'
import { FaBars, FaSearch, FaUserCircle } from 'react-icons/fa'
import { HiPlus, HiLogout } from 'react-icons/hi'
import Search from '../all-items/Search'
import AuthContext from '@/context/AuthContext'

function MainMenu() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const { user, logout } = useContext(AuthContext)

  return (
    <header className="text-white body-font bg-gray-800">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center max-w-screen-xl">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="text-white md:mb-0 tracking-widest flex flex-row items-center ">
              <span className="pr-3 mt-2">
                <Image src="/logo.png" alt="logo" width={45} height={45} />
              </span>
              <span className=" font-semibold text-lg text-gray-100">
                JIPATIE
              </span>
            </a>
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
        </div>
        <Search />

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
                <a className="px-3 py-2 flex items-center hover:opacity-75 hover:text-emerald-500">
                  View Items
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dashboard">
                <a className="px-3 py-2 flex items-center hover:opacity-75 hover:text-emerald-500">
                  Dashboard
                </a>
              </Link>
            </li>
            <li className="nav-item flex flex-row  md:border-l md:border-gray-400">
              <p className="px-3 py-2 text-emerald-300">{`Hello ${
                user &&
                user.username.charAt(0).toUpperCase() + user.username.slice(1)
              }`}</p>
              <button
                className="px-3 py-1 flex items-center hover:text-emerald-600"
                onClick={() => logout()}
              >
                <HiLogout className="text-3xl py-2" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default MainMenu
