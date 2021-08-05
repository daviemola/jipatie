import Image from 'next/image'
import Link from 'next/link'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import { GrLinkPrevious } from 'react-icons/gr'
import MainLayout from '../../components/layout/MainLayout'

function giving() {
  return (
    <MainLayout>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-3 py-6 mx-auto max-w-screen-xl">
          <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div className="py-1">
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
                      <tr className="tracking-wider text-left font-medium text-gray-800 text-sm bg-gray-100">
                        <th scope="col" className="px-5 py-3 rounded-sm">
                          Item name
                        </th>
                        <th scope="col" className="px-5 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-5 py-3">
                          Created at
                        </th>
                        <th scope="col" className="px-5 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-5 py-3 rounded-sm">
                          Actions
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
                          <p className="text-gray-900 whitespace-no-wrap">
                            Admin
                          </p>
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            12/09/2020
                          </p>
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
                        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                          <div className="flex flex-row">
                            <div className="flex flex-row text-red-600 mr-4">
                              <FaTimes className=" mt-1 mr-1" /> Delete
                            </div>
                            <div className="flex flex-row text-blue-800">
                              <FaPencilAlt className="mt-1 mr-1" /> Edit
                            </div>
                          </div>
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
                          <p className="text-gray-900 whitespace-no-wrap">
                            Designer
                          </p>
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            01/10/2012
                          </p>
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                            ></span>
                            <span className="relative">not active</span>
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
                          <p className="text-gray-900 whitespace-no-wrap">
                            Developer
                          </p>
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            02/10/2018
                          </p>
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
                          <p className="text-gray-900 whitespace-no-wrap">
                            User
                          </p>
                        </td>
                        <td className="px-4 py-3 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            23/09/2010
                          </p>
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
                  <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="w-full p-4 border text-base rounded-sm text-gray-600 bg-white hover:bg-gray-100"
                      >
                        <svg
                          width="9"
                          fill="currentColor"
                          height="8"
                          className=""
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 "
                      >
                        1
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                      >
                        2
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100"
                      >
                        3
                      </button>
                      <button
                        type="button"
                        className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100"
                      >
                        4
                      </button>
                      <button
                        type="button"
                        className="w-full p-4 border-t border-b border-r text-base  rounded-sm text-gray-600 bg-white hover:bg-gray-100"
                      >
                        <svg
                          width="9"
                          fill="currentColor"
                          height="8"
                          className=""
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default giving
