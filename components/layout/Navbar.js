import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsPersonSquare } from 'react-icons/bs'
import { HiSun } from 'react-icons/hi'

export default function Test() {
  const [isMenuOpen, showMenu] = useState(false)
  const [isMenuSmOpen, showSmMenu] = useState(false)

  const toggleMenu = () => showMenu(!isMenuOpen)
  const toggleSmMenu = () => showSmMenu(!isMenuSmOpen)

  return (
    <nav className="bg-gray-800 dark:border-gray-800 dark:bg-gray-800 sm:fixed sm:inset-x-0 sm:top-0 sm:z-30">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex items-center flex-shrink-0 pt-3 ">
              <Link href="/dashboard/items">
                <a className="inline-flex items-center mb-2">
                  <Image
                    src="/logolight.svg"
                    width={45}
                    height={45}
                    alt="logo"
                  />
                  <span className=" pl-1 font-bold  text-xl text-emerald-400">
                    nizetu
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            {/* <button className="p-2 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md dark:text-white dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700 active:bg-gray-50">
              <HiSun />
            </button> */}
            <Link href="account/register">
              <a className="mr-8 px-2 py-1 text-white text-sm">Login</a>
            </Link>
            <Link href="account/login">
              <a className="ml-2 px-2 py-1 text-emerald-300 text-sm border border-emerald-300 rounded-sm">
                Register
              </a>
            </Link>

            <div className="relative ml-3">
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
                      <div className="block px-4 py-2 text-xs text-gray-400"></div>
                      <div>
                        <Link href="/account/login">
                          <a className="block px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100">
                            Login
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center -mr-2 sm:hidden">
            {/* <button className="p-2 text-white transition duration-150 ease-in-out bg-gray-600 border border-transparent rounded-md dark:text-white dark:bg-gray-800 hover:bg-gray-500 dark:hover:bg-gray-700 hover:text-white focus:outline-none focus:bg-gray-500 dark:focus:bg-gray-700 active:bg-gray-600">
              <HiSun />
            </button> */}

            <button
              onClick={toggleSmMenu}
              className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md dark:text-white hover:text-gray-500 hover:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-600 dark:focus:bg-gray-700 focus:text-gray-500"
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
              <Link href="/dashboard">
                <a
                  className="block py-2 pl-3 pr-4 text-base font-semibold text-emerald-50 transition duration-150 ease-in-out border-l-4 border-emerald-400 dark:border-emerald-300 dark:text-emerald-200 bg-gray-600 dark:bg-emerald-800 focus:outline-none focus:text-emerald-800 focus:bg-gray-500 focus:border-emerald-700"
                  href="#"
                >
                  Dashboard
                </a>
              </Link>
            </div>
          </div>
          <div className="pt-1 pb-3 space-y-1">
            <div>
              <Link href="/dashboard/items">
                <a
                  className="block py-2 pl-3 pr-4 text-base font-semibold text-emerald-50 transition duration-150 ease-in-out dark:border-emerald-300 dark:text-emerald-200 bg-gray-600 dark:bg-emerald-800 focus:outline-none focus:text-emerald-800 focus:bg-gray-500 focus:border-emerald-700"
                  href="#"
                >
                  All Items
                </a>
              </Link>
            </div>
          </div>
          <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
            <div className="flex items-center px-4">
              <div>Register</div>
            </div>
            <div className="mt-3 space-y-1">
              <div>
                <a
                  className="block py-2 pl-3 pr-4 text-base font-semibold text-gray-50 transition duration-150 ease-in-out border-l-4 border-transparent dark:text-white hover:text-white hover:bg-gray-600 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"
                  href="#"
                >
                  <span className="flex flex-row">
                    <BsPersonSquare className="pr-2 text-2xl" />
                    Login
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
