import React from 'react'
import Pagination from '../layout/Pagination'
import Image from 'next/image'
import Link from 'next/link'
import { FiTrash, FiTool } from 'react-icons/fi'
import { GrLinkPrevious } from 'react-icons/gr'
import { API_URL } from '@/config/index'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function GivingPage({ items, token }) {
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
      <div className="p-8 bg-white border border-gray-200">
        <Link href="/dashboard">
          <a className="flex flex-row font-bold text-gray-500">
            <GrLinkPrevious className="mt-1 mr-2 mb-3" />
            Go Back
          </a>
        </Link>
        <h2 className="text-xl py-3 font-bold text-gray-700">
          Items you are giving
        </h2>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full rounded-sm overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="tracking-wider text-left text-sm text-gray-600 bg-gray-100">
                  <th scope="col" className="px-5 py-3">
                    Item name
                  </th>
                  <th scope="col" className="px-5 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-5 py-3">
                    Dates
                  </th>
                  <th scope="col" className="px-5 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-5 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {items &&
                  items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <a href="#" className="block relative">
                              <Image
                                alt="profil"
                                src={
                                  item.photo
                                    ? item.photo.formats.thumbnail.url
                                    : '/000000.png'
                                }
                                width={40}
                                height={40}
                                className="mx-auto object-cover h-10 w-10 "
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {item.category && item.category.name}
                        </p>
                      </td>
                      <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {`${new Date(item.created_at).toLocaleDateString(
                            'en-US',
                          )}`}
                        </p>
                      </td>
                      <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                        {item.active ? (
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">active</span>
                          </span>
                        ) : item.delivered ? (
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">delivered</span>
                          </span>
                        ) : (
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-red-300 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">not active</span>
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                        <div className="flex flex-row">
                          <a
                            href="#"
                            className="flex flex-row text-gray-800 mr-4"
                            onClick={() => deleteItem(item.id)}
                          >
                            <FiTrash className="mt-1 mr-1" /> Delete
                          </a>
                          <Link href={`/dashboard/items/edit/${item.id}`}>
                            <a>
                              <div className="flex flex-row text-gray-800">
                                <FiTool className="mt-1 mr-1" /> Edit
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
