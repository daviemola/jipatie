import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { FaBars, FaCaretDown, FaTimes } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { HiSun } from 'react-icons/hi'
import Search from '../all-items/Search'
import AuthContext from '@/context/AuthContext'

export default function Test() {
  const [isMenuOpen, showMenu] = useState(false)
  const [isMenuSmOpen, showSmMenu] = useState(false)

  const { user, logout } = useContext(AuthContext)

  const toggleMenu = () => showMenu(!isMenuOpen)
  const toggleSmMenu = () => showSmMenu(!isMenuSmOpen)

  return (
    <div className="sm:py-10">
      <nav className="bg-gray-600 border-b border-gray-100 dark:border-gray-700 dark:bg-gray-800 sm:fixed sm:inset-x-0 sm:top-0 sm:z-30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex">
              <div className="flex items-center flex-shrink-0 pt-3 ">
                <Link href="/dashboard/items">
                  <a className="inline-flex items-center mb-2">
                    <Image src="/logo.png" width={45} height={45} alt="logo" />
                    <span className=" pl-1 font-bold text-white tracking-widest">
                      jipatie
                    </span>
                  </a>
                </Link>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex ">
                <Link href="/dashboard">
                  <a className="inline-flex items-center px-1 pt-1 text-sm font-semibold leading-5 text-white transition duration-150 ease-in-out dark:border-yellow-300 dark:text-gray-200 focus:border-indigo-700">
                    Dashboard
                  </a>
                </Link>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-3 sm:flex">
                <Link href="/dashboard/items">
                  <a
                    className="inline-flex items-center px-1 pt-1 text-sm font-semibold leading-5 text-white transition duration-150 ease-in-out dark:border-yellow-300 dark:text-gray-200 focus:border-indigo-700"
                    href="#"
                  >
                    All Items
                  </a>
                </Link>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-3 sm:flex">
                <Link href="/dashboard/institutions">
                  <a
                    className="inline-flex items-center px-1 pt-1 text-sm font-semibold leading-5 text-white transition duration-150 ease-in-out dark:border-yellow-300 dark:text-gray-200 focus:border-indigo-700"
                    href="#"
                  >
                    Homes
                  </a>
                </Link>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-3 sm:flex sm:pt-5">
                <Search />
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <button className="p-2 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700 active:bg-gray-50">
                <HiSun />
              </button>
              <Link href="/dashboard/give">
                <a className="ml-2 px-2 py-1 text-yellow-300 text-sm border border-yellow-300 rounded-sm">
                  Give Item
                </a>
              </Link>

              <div className="relative ml-3">
                <div>
                  <span className="inline-flex rounded-md">
                    <button
                      onClick={toggleMenu}
                      type="button"
                      className="inline-flex items-center px-3 py-2 text-sm font-semibold leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded-sm dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700 active:bg-gray-500"
                    >
                      {user && user.username}
                      <FaCaretDown className="ml-2" />
                    </button>
                  </span>
                </div>
                {isMenuOpen && (
                  <div>
                    <div
                      className="fixed inset-0 z-40"
                      style={{ display: 'none' }}
                    ></div>

                    <div
                      x-show="isOpen"
                      className="absolute right-0 z-50 w-48 mt-2 origin-top-right rounded-md shadow-lg"
                    >
                      <div className="py-1 bg-white rounded-md dark:bg-gray-700 ring-1 ring-black ring-opacity-5">
                        <div className="block px-4 py-2 text-xs text-gray-400">
                          Manage Account
                        </div>
                        <div>
                          <Link href="#">
                            <a className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100">
                              Profile
                            </a>
                          </Link>
                        </div>
                        <div className="border-t border-gray-100 dark:border-gray-600"></div>

                        <button
                          onClick={() => logout()}
                          className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100"
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center -mr-2 sm:hidden">
              <button className="p-2 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700 active:bg-gray-600">
                <HiSun />
              </button>

              <button
                onClick={toggleSmMenu}
                className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md dark:text-gray-200 hover:text-gray-500 hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-600 dark:focus:bg-gray-700 focus:text-gray-500"
              >
                {isMenuSmOpen ? (
                  <FaTimes className="text-white text-2xl" />
                ) : (
                  <FaBars className="text-white text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuSmOpen && (
          <div className="sm:hidden bg-gray-600 dark:bg-gray-800 pl-2">
            <div className="pt-2 space-y-1">
              <div>
                <Link href="/dashboard">
                  <a
                    className="block pl-3 pr-4 text-base font-semibold text-white transition duration-150 ease-in-out dark:border-yellow-300 dark:text-yellow-200 bg-gray-600 dark:bg-yellow-800 focus:outline-none focus:text-gray-100"
                    href="#"
                  >
                    Dashboard
                  </a>
                </Link>
              </div>
            </div>
            <div className="pt-1 space-y-1">
              <div className="text-gray-50">
                <Link href="/dashboard/items">
                  <a
                    className="block py-2 pl-3 pr-4 text-base font-semibold transition duration-150 ease-in-out dark:border-yellow-300 dark:text-yellow-200 bg-gray-600 dark:bg-yellow-800 focus:outline-none focus:text-gray-100"
                    href="#"
                  >
                    All Items
                  </a>
                </Link>
              </div>
            </div>
            <div className="pt-1 space-y-1">
              <div className="text-gray-50">
                <Link href="/dashboard/give">
                  <a
                    className="pl-3 pr-4 text-base font-semibold transition duration-150 ease-in-out dark:border-yellow-300 dark:text-yellow-200 bg-gray-600 dark:bg-yellow-800 focus:outline-none focus:text-gray-100"
                    href="#"
                  >
                    Give Item
                  </a>
                </Link>
              </div>
            </div>
            <div className="pt-4 pb-1 text-gray-100 dark:border-gray-600">
              <div className="flex items-center px-3">
                <div>
                  <div className="text-sm m-0 p-0 font-normal text-gray-100 dark:text-gray-200">
                    {user && user.username}
                  </div>
                  <span className="text-xs m-0 p-0 font-normal text-gray-100 dark:text-gray-400">
                    {user && user.email}
                  </span>
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <Link href="/profile">
                  <a className="block py-2 pl-2 pr-4 text-base font-semibold text-gray-50 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-20 focus:outline-none">
                    <span className="flex flex-row">Your Profile</span>
                  </a>
                </Link>

                <button
                  onClick={() => logout()}
                  className="block w-full pb-4 pl-2 pr-2 text-base font-semibold text-left text-gray-50 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-20 focus:outline-none"
                >
                  <div className="flex items-center">
                    <BiLogOut className="mr-2" />
                    <span className="flex flex-row">Log Out</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
