import Link from 'next/link'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import { FiCheckSquare, FiXSquare } from 'react-icons/fi'

export default function Giving({ items }) {
  dayjs.extend(relativeTime)
  dayjs.locale('en')

  return (
    <>
      <div className="px-8 bg-white border border-gray-200 flex items-center justify-between">
        <h2 className="text-base py-3 font-semibold text-gray-800 uppercase">
          Your Items
        </h2>
        <Link href="/dashboard/giving">
          <a className="text-gray-600 uppercase font-semibold text-sm underline">
            View all
          </a>
        </Link>
      </div>
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className="py-4 px-8 bg-white border border-gray-200 hover:bg-gray-50"
          >
            <div className="flex justify-between">
              <Link href={`/dashboard/items/${item.slug}`}>
                <a>
                  <p className="font-semibold text-gray-500 text-sm hover:underline">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 tracking-wide">
                    {dayjs(item.created_at).fromNow()}
                  </p>
                </a>
              </Link>
              <p className="text-sm  hidden sm:block">
                {item.category && item.category.name}
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
            </div>
          </div>
        ))}
    </>
  )
}
