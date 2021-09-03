import React from 'react'
import Pagination from '../layout/Pagination'
import Link from 'next/link'
import {
  FiCheckSquare,
  FiXSquare,
  FiMoreHorizontal,
  FiPenTool,
  FiTrash,
} from 'react-icons/fi'
import { API_URL } from '@/config/index'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { Menu, Transition } from '@headlessui/react'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

export default function RequestPage({ items, token, page, total }) {
  dayjs.extend(relativeTime)
  dayjs.locale('en')
  const router = useRouter()
  //
  const deleteItem = async (id) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/requests/${id}`, {
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
        setTimeout(function () {
          router.reload()
        }, 3000)
      }
    }
  }

  return (
    <>
      <Toaster />
      <div className="px-8 bg-white border border-gray-200 flex items-center justify-between dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-base py-3 font-semibold text-gray-800 uppercase dark:text-white">
          Your Requests
        </h2>
        <div className="text-gray-600 dark:text-gray-400 uppercase font-semibold text-sm">
          Actions
        </div>
      </div>
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className="py-4 px-8 bg-white border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
          >
            <div className="flex justify-between">
              <Link
                href={`/dashboard/items/${item.item.slug}/request/${item.id}`}
              >
                <a>
                  <p className="font-semibold text-gray-500 text-sm hover:underline w-full dark:text-white dark:hover:text-gray-200">
                    {item?.item.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {dayjs(item.created_at).fromNow()}
                  </p>
                </a>
              </Link>
              <div className="text-sm flex items-center">
                {item.accepted === false ? (
                  <div className="flex items-center">
                    <FiXSquare className="text-red-500 mr-2" />
                    Not yet accepted
                  </div>
                ) : (
                  <div className="flex items-center">
                    <FiCheckSquare className="text-emerald-500 mr-2" />
                    Accepted
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
                            <Link
                              href={`/dashboard/items/${item.item.slug}/request/${item.id}/edit`}
                            >
                              <a>
                                <button
                                  className={`${
                                    active
                                      ? 'dark:bg-gray-700 bg-gray-200 dark:text-white text-gray-400'
                                      : 'text-gray-200'
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-700 dark:text-gray-400`}
                                >
                                  {active ? (
                                    <FiPenTool className="text-gray-600 dark:text-gray-400 mr-2" />
                                  ) : (
                                    <FiPenTool className="text-gray-600 dark:text-gray-400 mr-2" />
                                  )}
                                  Edit
                                </button>
                              </a>
                            </Link>
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
                              } group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-700 dark:text-gray-400`}
                            >
                              {active ? (
                                <FiTrash className="text-gray-600 dark:text-gray-400 mr-2" />
                              ) : (
                                <FiTrash className="text-gray-600 dark:text-gray-400 mr-2" />
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
      <Pagination page={page} total={total} pageName={'requests'} />
    </>
  )
}
