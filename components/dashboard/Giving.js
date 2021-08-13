import Image from 'next/image'
import Link from 'next/link'
import { GrLinkNext } from 'react-icons/gr'

export default function Giving({ items }) {
  return (
    <div className="px-7 pt-4 border border-gray-200 bg-white">
      <h2 className="text-xl py-3 font-bold text-gray-700">Giving</h2>
      <div className="-mx-4 sm:-mx-8 pt-2 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full rounded-sm overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="tracking-wider text-left font-medium text-gray-800 text-sm bg-gray-100">
                <th scope="col" className="px-5 py-3 rounded-sm">
                  Item
                </th>
                <th scope="col" className="px-5 py-3">
                  Category
                </th>
                <th scope="col" className="px-5 py-3">
                  Created at
                </th>
                <th scope="col" className="px-5 py-3 rounded-sm">
                  status
                </th>
              </tr>
            </thead>
            <tbody>
              {items &&
                items.items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <a href="#" className="block relative">
                            <Image
                              alt="profile"
                              src={item.photo.formats.thumbnail.url}
                              width={40}
                              height={40}
                              className="mx-auto object-cover h-10 w-10 rounded-md"
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
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="bg-white py-5">
            <Link href="/dashboard/giving">
              <a className="btn-gray">
                view more
                <GrLinkNext className="text-sm mt-1 ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
