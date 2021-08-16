import Link from 'next/link'
import { GrLinkNext } from 'react-icons/gr'

export default function Recieving({ requests }) {
  return (
    <div className="px-7 pt-4 border border-gray-200 bg-white mt-5">
      <h2 className="text-xl py-2 mb-3 font-semibold text-gray-600">
        Requested
      </h2>
      <div className="-mx-4 sm:-mx-8 pt-2 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full rounded-sm overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="uppercase text-xs text-gray-400 text-left bg-gray-100">
                <th scope="col" className="pl-3 py-3 font-semibold rounded-sm">
                  Item
                </th>
                <th scope="col" className="pl-3 py-3 font-semibold">
                  Submitted
                </th>
                <th scope="col" className="pl-3 py-3 font-semibold rounded-sm">
                  status
                </th>
              </tr>
            </thead>
            <tbody>
              {requests &&
                requests.map((item) => (
                  <tr
                    key={item.id}
                    className="text-xs text-gray-800 border-gray-200 bg-white font-normal"
                  >
                    <td className="pl-3 py-3 border-b">
                      <div className="flex items-center">
                        <div className="">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {item.item.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-3 py-3 border-b">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {`${new Date(item.created_at).toLocaleDateString(
                          'en-US',
                        )}`}
                      </p>
                    </td>
                    <td className="pl-3 py-3 border-b">
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
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white pb-5">
        <Link href="/dashboard/requests">
          <a className="btn-gray">
            view more
            <GrLinkNext className="text-sm mt-1 ml-2" />
          </a>
        </Link>
      </div>
    </div>
  )
}
