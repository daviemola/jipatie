import React from 'react'
import Pagination from '../layout/Pagination'
import Image from 'next/image'
import Link from 'next/link'
import { FiTrash, FiTool } from 'react-icons/fi'
import { GrLinkPrevious } from 'react-icons/gr'
import { API_URL } from '@/config/index'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function RequestPage({ items, token }) {
  const router = useRouter()
  //
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
    <div>
      <Toaster />
      <Link href="/dashboard">
        <a className="flex flex-row text-sm text-gray-700">
          <GrLinkPrevious className="mt-1 mr-2 mb-3" />
          Go Back
        </a>
      </Link>
      <div className="p-8 bg-white border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-600">Items requested</h2>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full rounded-sm overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="uppercase text-xs text-gray-400 text-left bg-gray-100">
                  <th scope="col" className="pl-3 py-3 font-semibold">
                    Item
                  </th>
                  <th scope="col" className="pl-4 py-3 font-semibold">
                    Dates
                  </th>
                  <th scope="col" className="pl-4 py-3 font-semibold">
                    Status
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {items &&
                  items.map((item) => (
                    <tr
                      key={item.id}
                      className="text-xs text-gray-800 border-gray-200 bg-white font-normal"
                    >
                      <td className="pl-3 py-3 border-b">
                        <div className="ml-0">
                          <p>{item.item.name}</p>
                        </div>
                      </td>
                      <td className="px-4 py-3 border-b">
                        <p>
                          {`${new Date(item.created_at).toLocaleDateString(
                            'en-US',
                          )}`}
                        </p>
                      </td>
                      <td className="px-4 py-3 border-b">
                        {item.accepted ? (
                          <span className="relative inline-block px-3 py-1 text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">accepted</span>
                          </span>
                        ) : item.delivered ? (
                          <span className="relative inline-block px-3 py-1 text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">delivered</span>
                          </span>
                        ) : item.created_at ? (
                          <span className="relative inline-block px-3 py-1 text-blue-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-blue-300 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">submitted</span>
                          </span>
                        ) : (
                          <span className="relative inline-block px-3 py-1 text-blue-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-blue-300 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">not accepted</span>
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 border-b">
                        <div className="flex flex-row">
                          <a
                            href="#"
                            className="flex flex-row text-gray-800 mr-4"
                            onClick={() => deleteItem(item.id)}
                          >
                            <FiTrash className="text-sm mr-1" /> Delete
                          </a>
                          <Link href={`/dashboard/items/edit/${item.id}`}>
                            <a>
                              <div className="flex flex-row text-gray-800">
                                <FiTool className="text-sm mr-1" />
                                <span>Edit</span>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}
