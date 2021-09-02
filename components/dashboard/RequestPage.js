import React from 'react'
import Pagination from '../layout/Pagination'
import Link from 'next/link'
import {
  FiTrash,
  FiTool,
  FiCheckSquare,
  FiXSquare,
  FiSettings,
  FiTrash2,
} from 'react-icons/fi'
import { API_URL } from '@/config/index'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'
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
      <div className="px-8 bg-white border border-gray-200 flex items-center justify-between">
        <h2 className="text-base py-3 font-semibold text-gray-800 uppercase">
          Your Requests
        </h2>
        <div className="text-gray-600 uppercase font-semibold text-sm">
          Actions
        </div>
      </div>
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className="py-4 px-8 bg-white border border-gray-200"
          >
            <div className="flex justify-between">
              <Link
                href={`/dashboard/items/${item.item.slug}/request/${item.id}`}
              >
                <a>
                  <p className="font-semibold text-gray-500 text-sm hover:underline w-full">
                    {item?.item.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {dayjs(item.created_at).fromNow()}
                  </p>
                </a>
              </Link>
              <div className="text-sm">
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
              </div>
              <div className="flex">
                <Link
                  href={`/dashboard/items/${item.item.slug}/request/${item.id}/edit`}
                >
                  <a className="flex items-center mr-3">
                    <FiSettings className="mr-1" />
                    Edit
                  </a>
                </Link>
                <button
                  className="flex items-center"
                  onClick={() => deleteItem(item.id)}
                >
                  <FiTrash2 className="mr-1" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      <Pagination page={page} total={total} pageName={'requests'} />
    </>
  )
}
