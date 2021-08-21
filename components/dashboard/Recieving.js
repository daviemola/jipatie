import Link from 'next/link'
import { FiCheckSquare, FiXSquare } from 'react-icons/fi'
import { GrLinkNext } from 'react-icons/gr'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

export default function Recieving({ requests }) {
  dayjs.extend(relativeTime)
  dayjs.locale('en')

  return (
    <>
      <div className="px-8 bg-white border border-gray-200 flex items-center justify-between mt-6">
        <h2 className="text-base py-3 font-semibold text-gray-800 uppercase">
          Your requests
        </h2>
        <Link href="/dashboard/requests">
          <a className="text-gray-600 uppercase text-sm font-semibold underline">
            View all
          </a>
        </Link>
      </div>
      {requests &&
        requests.map((item) => (
          <div
            key={item.id}
            className="py-4 px-8 bg-white border border-gray-200 hover:bg-gray-50"
          >
            <Link href={`#`}>
              <a className="flex justify-between">
                <div>
                  <p className="font-semibold text-gray-500 text-sm">
                    {item?.item.name}
                  </p>
                  <p className="text-xs text-gray-400 tracking-wide">
                    {dayjs(item.created_at).fromNow()}
                  </p>
                </div>

                <p className="text-sm  hidden sm:block">
                  {item.item.location && item.item.location}
                </p>
                <div className="text-sm">
                  {item.accepted === false ? (
                    <div className="flex items-center">
                      <FiXSquare className="text-red-500 mr-2" />
                      Not yet accepted
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <FiCheckSquare className="text-green-500 mr-2" />
                      Accepted
                    </div>
                  )}
                </div>
              </a>
            </Link>
          </div>
        ))}
    </>
  )
}
