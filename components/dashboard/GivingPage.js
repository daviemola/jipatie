import React from 'react'
import Pagination from '../layout/Pagination'
import Link from 'next/link'
import {
  FiTrash,
  FiCheckSquare,
  FiXSquare,
  FiMoreHorizontal,
  FiPenTool,
} from 'react-icons/fi'
import { API_URL } from '@/config/index'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import { Menu, Transition } from '@headlessui/react'

export default function GivingPage({ items, token, page, total }) {
  dayjs.extend(relativeTime)
  dayjs.locale('en')
  const router = useRouter()
  const deleteItem = async (id) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/items/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message)
      } else {
        toast.success('Delete successful')
        router.reload()
      }
    }
  }

  return (
    <>
      <Toaster />
      <div className="px-8 bg-white border border-gray-200 flex items-center justify-between dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-base py-3 font-semibold text-gray-800 dark:text-white uppercase">
          Your Items
        </h2>
      </div>
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className="py-4 px-8 bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 "
          >
            <div className="flex justify-between">
              <Link href={`#`}>
                <a className="dark:text-gray-400">
                  <p className="font-semibold text-gray-500 text-sm dark:text-white hover:underline">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 tracking-wide">
                    {dayjs(item.created_at).fromNow()}
                  </p>
                </a>
              </Link>
              <p className="sm:block hidden text-sm md:w-1/4">
                {item.category.name}
              </p>
              <div className="text-sm flex items-center">
                {item.accepted === false ? (
                  <div className="flex items-center">
                    <FiCheckSquare className="text-emerald-500 mr-2" />
                    Active
                  </div>
                ) : (
                  <div className="flex items-center">
                    <FiXSquare className="text-red-500 mr-2" />
                    Inactive
                  </div>
                )}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium dark:text-white text-gray-700 bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      <FiMoreHorizontal
                        className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
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
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-400'
                                  : 'text-gray-200'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-700 dark:text-white`}
                            >
                              {active ? (
                                <FiPenTool className="text-gray-700 dark:text-gray-400  mr-2" />
                              ) : (
                                <FiPenTool className="text-gray-700 dark:text-gray-400  mr-2" />
                              )}
                              Edit
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              onClick={() => deleteItem(item.id)}
                              className={`${
                                active
                                  ? 'dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-400'
                                  : 'text-gray-200'
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-700 dark:text-white`}
                            >
                              {active ? (
                                <FiTrash className="text-gray-700 dark:text-gray-400  mr-2" />
                              ) : (
                                <FiTrash className="text-gray-700 dark:text-gray-400  mr-2" />
                              )}
                              Delete
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        ))}
      <Pagination page={page} total={total} pageName={'giving'} />
    </>
  )
}
