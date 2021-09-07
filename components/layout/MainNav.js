import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext, useEffect } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { HiMoon, HiSun } from 'react-icons/hi'
import Search from '../all-items/Search'
import AuthContext from '@/context/AuthContext'
import { useTheme } from 'next-themes'
import { Menu, Transition } from '@headlessui/react'
import { BsPersonLinesFill } from 'react-icons/bs'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Test() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === 'system' ? systemTheme : theme

  const renderThemeChanger = () => {
    if (!mounted) return null

    if (currentTheme === 'dark') {
      return (
        <button
          onClick={() => setTheme('light')}
          className="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-500 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 active:bg-gray-100"
        >
          <HiSun />
        </button>
      )
    } else {
      return (
        <button
          onClick={() => setTheme('dark')}
          className="p-2 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md dark:text-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-500 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700 active:bg-gray-100"
        >
          <HiMoon />
        </button>
      )
    }
  }

  const [isMenuOpen, showMenu] = useState(false)
  const [isMenuSmOpen, showSmMenu] = useState(false)

  const { user, logout } = useContext(AuthContext)

  const toggleMenu = () => showMenu(!isMenuOpen)
  const toggleSmMenu = () => showSmMenu(!isMenuSmOpen)

  return (
    <div className="sm:py-8">
      <nav className="bg-white shadow-sm border-b border-gray-100 dark:border-gray-700 dark:bg-gray-800 sm:fixed sm:inset-x-0 sm:top-0 sm:z-30">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex items-center flex-shrink-0 pt-3 ">
                <Link href="/dashboard/items">
                  <a className="inline-flex items-center mb-2">
                    <Image
                      src={
                        currentTheme === 'light'
                          ? '/logo.svg'
                          : '/logolight.svg'
                      }
                      width={35}
                      height={35}
                      alt="logo"
                    />
                    <span className=" pl-1 font-bold text-emerald-900 text-xl dark:text-emerald-300">
                      nizetu
                    </span>
                  </a>
                </Link>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex ">
                <Link href="/dashboard">
                  <a className="inline-flex items-center px-1 pt-1 text-sm leading-5 text-gray-500 transition duration-150 ease-in-out dark:border-emerald-300 dark:text-white focus:border-indigo-700">
                    Dashboard
                  </a>
                </Link>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-3 sm:flex">
                <Link href="/dashboard/items">
                  <a
                    className="inline-flex items-center px-1 pt-1 text-sm leading-5 text-gray-500 transition duration-150 ease-in-out dark:border-emerald-300 dark:text-white focus:border-indigo-700"
                    href="#"
                  >
                    All Items
                  </a>
                </Link>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-3 sm:flex">
                <Link href="/institutions">
                  <a
                    className="inline-flex items-center px-1 pt-1 text-sm leading-5 text-gray-500 transition duration-150 ease-in-out dark:border-emerald-300 dark:text-white focus:border-indigo-700"
                    href="#"
                  >
                    Homes
                  </a>
                </Link>
              </div>
              <div className="hidden space-x-8 sm:-my-px sm:ml-3 sm:flex sm:pt-0">
                <div className="inline-flex items-center px-1 pt-1 ">
                  <Search />
                </div>
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ml-6">
              {renderThemeChanger()}
              <div className="relative ml-3">
                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button
                    onClick={toggleMenu}
                    className="inline-flex justify-center items-center w-full px-3 py-2 text-sm font-medium dark:text-white text-gray-700 bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  >
                    <div>{user && user.username}</div>
                    <FaCaretDown className="ml-2" />
                  </Menu.Button>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-gray-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          <div className="dark:bg-gray-800 dark:text-white text-gray-400 text-sm pt-2 pb-1 px-2">
                            <p>Manage profile</p>
                          </div>
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link href={`/profile`}>
                              <a>
                                <button
                                  className={`${
                                    active
                                      ? 'dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-400 '
                                      : 'text-gray-200'
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50`}
                                >
                                  {active ? (
                                    <BsPersonLinesFill className="text-gray-600 dark:text-gray-400 mr-2" />
                                  ) : (
                                    <BsPersonLinesFill className="text-gray-600 dark:text-gray-400 mr-2" />
                                  )}
                                  Profile
                                </button>
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => logout()}
                              className={`${
                                active
                                  ? 'dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-400'
                                  : 'text-gray-200'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-700 dark:text-gray-400`}
                            >
                              {active ? (
                                <BiLogOut className="text-gray-600 dark:text-gray-400 mr-2" />
                              ) : (
                                <BiLogOut className="text-gray-600 dark:text-gray-400 mr-2" />
                              )}
                              Log Out
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>

            <div className="flex items-center -mr-2 sm:hidden">
              {renderThemeChanger()}
              <button
                onClick={toggleSmMenu}
                className="inline-flex items-center justify-center p-2 bg-white hover:bg-gray-200 dark:bg-gray-800 transition duration-150 ease-in-out rounded-md active:bg-gray-200 dark:active:bg-gray-700 dark:text-white hover:text-gray-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-700"
              >
                {isMenuSmOpen ? (
                  <FiX className="text-gray-500 dark:text-white text-2xl" />
                ) : (
                  <FiMenu className="text-gray-500 dark:text-white text-2xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuSmOpen && (
          <div className="sm:hidden bg-white dark:bg-gray-800 pl-2">
            <div className="pt-2 space-y-1">
              <div>
                <Link href="/dashboard">
                  <a
                    className="block pl-3 pr-4 text-base font-semibold text-gray-600 transition duration-150 ease-in-out dark:text-white focus:outline-none focus:text-gray-100"
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
                    className="block py-2 pl-3 pr-4 text-base font-semibold text-gray-600 transition duration-150 ease-in-out dark:text-white focus:outline-none focus:text-gray-100"
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
                    className="pl-3 pr-4 text-base font-semibold transition text-gray-600 duration-150 ease-in-out dark:text-white focus:outline-none focus:text-gray-100"
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
                  <div className="text-sm m-0 p-0 font-normal text-gray-600 dark:text-white">
                    {user && user.username}
                  </div>
                  <span className="text-xs m-0 p-0 font-normal text-gray-600 dark:text-gray-400">
                    {user && user.email}
                  </span>
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <Link href="/profile">
                  <a className="block py-2 pl-2 pr-4 text-base font-semibold text-gray-600 transition duration-150 ease-in-out dark:text-gray-400 border-l-4 border-transparent dark:text-gray-20 focus:outline-none">
                    <span className="flex flex-row">Your Profile</span>
                  </a>
                </Link>

                <button
                  onClick={() => logout()}
                  className="block w-full pb-4 pl-2 pr-2 text-base font-semibold text-left text-gray-600 transition duration-150 ease-in-out dark:text-gray-400 border-l-4 border-transparent dark:text-gray-20 focus:outline-none"
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
