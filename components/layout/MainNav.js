import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { FaBars, FaCaretDown, FaTimes } from 'react-icons/fa'
import { BsBoxArrowInLeft, BsPersonSquare } from 'react-icons/bs'
import { HiPlus, HiLogout, HiSun } from 'react-icons/hi'
import { FiUser } from 'react-icons/fi'
import Search from '../all-items/Search'
import AuthContext from '@/context/AuthContext'

export default function Test() {
  const [isMenuOpen, showMenu] = useState(false)
  const [isMenuSmOpen, showSmMenu] = useState(false)

  const { user, logout } = useContext(AuthContext)

  const toggleMenu = () => showMenu(!isMenuOpen)
  const toggleSmMenu = () => showSmMenu(!isMenuSmOpen)

  return (
    <nav className="bg-gray-600 border-b border-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center flex-shrink-0 pt-3 ">
              <Link href="#">
                <a className="inline-flex items-center mb-2">
                  <Image src="/logo.png" width={45} height={45} alt="logo" />
                  <span className=" pl-1 font-semibold text-yellow-300">
                    JIPATIE
                  </span>
                </a>
              </Link>
            </div>
            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex ">
              <a
                className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out dark:border-yellow-300 dark:text-gray-200 focus:border-indigo-700"
                href="#"
              >
                Dashboard
              </a>
            </div>
            <div className="hidden space-x-8 sm:-my-px sm:ml-3 sm:flex">
              <a
                className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out dark:border-yellow-300 dark:text-gray-200 focus:border-indigo-700"
                href="#"
              >
                All Items
              </a>
            </div>
            <div className="hidden space-x-8 sm:-my-px sm:ml-3 sm:flex sm:pt-2">
              {/* <a
                className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out dark:border-yellow-300 dark:text-gray-200 focus:border-indigo-700"
                href="#"
              >
                All Items
              </a> */}
              <Search />
            </div>
          </div>

          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <button className="p-2 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700 active:bg-gray-50">
              <HiSun />
            </button>
            <Link href="">
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
                    className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded-sm dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700 active:bg-gray-500"
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
                        <a
                          className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          Profile
                        </a>
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
        <div className="sm:hidden bg-gray-600 dark:bg-gray-800">
          <div className="pt-2 pb-1 space-y-1">
            <div>
              <a
                className="block py-2 pl-3 pr-4 text-base font-medium text-yellow-50 transition duration-150 ease-in-out border-l-4 border-yellow-400 dark:border-yellow-300 dark:text-yellow-200 bg-gray-600 dark:bg-yellow-800 focus:outline-none focus:text-yellow-800 focus:bg-gray-500 focus:border-yellow-700"
                href="#"
              >
                Dashboard
              </a>
            </div>
          </div>
          <div className="pt-1 pb-3 space-y-1">
            <div>
              <a
                className="block py-2 pl-3 pr-4 text-base font-medium text-yellow-50 transition duration-150 ease-in-out dark:border-yellow-300 dark:text-yellow-200 bg-gray-600 dark:bg-yellow-800 focus:outline-none focus:text-yellow-800 focus:bg-gray-500 focus:border-yellow-700"
                href="#"
              >
                All Items
              </a>
            </div>
          </div>
          <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center px-4">
              <div>
                <div className="text-base font-medium text-gray-50 dark:text-gray-200">
                  {user && user.username}
                </div>
                <div className="text-sm font-medium text-gray-50 dark:text-gray-400">
                  {user && user.email}
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <div>
                <a
                  className="block py-2 pl-3 pr-4 text-base font-medium text-gray-50 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-white hover:bg-gray-600 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
                  href="#"
                >
                  <span className="flex flex-row">
                    <BsPersonSquare className="pr-2 text-2xl" />
                    Your Profile
                  </span>
                </a>
              </div>

              <button
                onClick={() => logout()}
                className="block w-full py-2 pl-3 pr-4 text-base font-medium text-left text-gray-50 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-white hover:bg-gray-600 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
              >
                <span className="flex flex-row">
                  <BsBoxArrowInLeft className="pr-2 text-2xl" />
                  Log Out
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
