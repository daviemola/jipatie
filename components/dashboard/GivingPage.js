import React from 'react'
import Pagination from '../layout/Pagination'
// import DashPagination from '../layout/DashPagination'
import Link from 'next/link'
import { FiTrash, FiCheckSquare, FiXSquare } from 'react-icons/fi'
import { API_URL } from '@/config/index'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

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
      <div className="px-8 bg-white border border-gray-200 flex items-center justify-between">
        <h2 className="text-base py-3 font-semibold text-gray-800 uppercase">
          Your Items
        </h2>
        {/* <div className="text-gray-600 uppercase font-semibold text-sm">
          Actions
        </div> */}
      </div>
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className="py-4 px-8 bg-white border border-gray-200"
          >
            <Link href={`#`}>
              <a className="flex justify-between">
                <div className="md:w-1/4">
                  <p className="font-semibold text-gray-500 text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 tracking-wide">
                    {dayjs(item.created_at).fromNow()}
                  </p>
                </div>
                <p className="sm:block hidden text-sm md:w-1/4">
                  {item.category.name}
                </p>
                <div className="text-sm">
                  {item.accepted === false ? (
                    <div className="flex items-center">
                      <FiCheckSquare className="text-green-500 mr-2" />
                      Active
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <FiXSquare className="text-red-500 mr-2" />
                      Inactive
                    </div>
                  )}
                </div>

                <div>
                  <button
                    className="flex items-center"
                    onClick={() => deleteItem(item.id)}
                  >
                    <FiTrash className="text-red-500 mr-2" />
                    Delete
                  </button>
                </div>
              </a>
            </Link>
          </div>
        ))}
      <Pagination page={page} total={total} pageName={'giving'} />
    </>
  )
}
