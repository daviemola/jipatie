import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Test() {
  const [isMenuOpen, showMenu] = useState(false)
  const [isMenuSmOpen, showSmMenu] = useState(false)

  const toggleMenu = () => showMenu(!isMenuOpen)
  const toggleSmMenu = () => showSmMenu(!isMenuSmOpen)

  return (
    <nav className="bg-gray-600 border-b border-gray-100 dark:border-gray-700 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center flex-shrink-0 pt-3">
              <Link href="#">
                <a className="inline-flex items-center mb-2">
                  <Image src="/logo.png" width={45} height={45} alt="logo" />
                  <span className=" pl-3 font-semibold text-white">
                    JIPATIE
                  </span>
                </a>
              </Link>
            </div>
            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <a
                className="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out dark:border-yellow-300 dark:text-gray-200 focus:border-indigo-700"
                href="#"
              >
                Dashboard
              </a>
            </div>
          </div>

          <div className="hidden sm:flex sm:items-center sm:ml-6">
            {/* <button className="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
              {/* Darkmode and light mode icon */}
            {/* </button> */}

            <div x-data="{ isOpen: false }" className="relative ml-3">
              <div>
                <span className="inline-flex rounded-md">
                  <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out border border-transparent rounded-sm dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700 active:bg-gray-500"
                  >
                    Autumn Ruiz {/* Carret down icon */}
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

                      <button className="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100">
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center -mr-2 sm:hidden">
            <button className="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50">
              {/* darkmode and lightmode icons */}
            </button>

            <button
              onClick={toggleSmMenu}
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md dark:text-gray-200 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-500"
            >
              {/* Menu Bars */}
            </button>
          </div>
        </div>
      </div>

      {isMenuSmOpen && (
        <div
          x-show="mobileMenu"
          className="sm:hidden bg-gray-50 ark:bg-gray-800"
        >
          <div className="pt-2 pb-3 space-y-1">
            <div>
              <a
                className="block py-2 pl-3 pr-4 text-base font-medium text-yellow-700 transition duration-150 ease-in-out border-l-4 border-yellow-400 dark:border-indigo-300 dark:text-yellow-200 bg-gray-50 dark:bg-indigo-800 focus:outline-none focus:text-yellow-800 focus:bg-yellow-100 focus:border-yellow-700"
                href="#"
              >
                Dashboard
              </a>
            </div>
          </div>
          <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center px-4">
              <div>
                <div className="text-base font-medium text-gray-800 dark:text-gray-200">
                  Autumn Ruiz
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  hizevy@mailinator.com
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <div>
                <a
                  className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
                  href="#"
                >
                  {' '}
                  Profile{' '}
                </a>
              </div>

              <button className="block w-full py-2 pl-3 pr-4 text-base font-medium text-left text-gray-600 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-gray-200 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300">
                Log Out
              </button>
              <div className="border-t border-gray-200 dark:border-gray-600"></div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
