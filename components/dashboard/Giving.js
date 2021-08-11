import Image from 'next/image'
import Link from 'next/link'
import { GrLinkNext } from 'react-icons/gr'

export default function Giving() {
  return (
    <div className="px-7 pt-4 border border-gray-200">
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
              <tr>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#" className="block relative">
                        <Image
                          alt="profil"
                          src="/000000.png"
                          width={40}
                          height={40}
                          className="mx-auto object-cover h-10 w-10 "
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Jean marc
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Admin</p>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">12/09/2020</p>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">active</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#" className="block relative">
                        <Image
                          alt="profil"
                          src="/000000.png"
                          width={40}
                          height={40}
                          className="mx-auto object-cover h-10 w-10 "
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Marcus coco
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Designer</p>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">01/10/2012</p>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">active</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#" className="block relative">
                        <Image
                          alt="profil"
                          src="/000000.png"
                          width={40}
                          height={40}
                          className="mx-auto object-cover h-10 w-10 "
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Ecric marc
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">Developer</p>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">02/10/2018</p>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">active</span>
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <a href="#" className="block relative">
                        <Image
                          alt="profil"
                          src="/000000.png"
                          width={40}
                          height={40}
                          className="mx-auto object-cover h-10 w-10 "
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Julien Huger
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">User</p>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">23/09/2010</p>
                </td>
                <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">active</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bg-white py-5">
            <Link href="dashboard/giving">
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
