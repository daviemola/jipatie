import Link from 'next/link'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import { FiCheckSquare, FiXSquare } from 'react-icons/fi'

export default function Giving({ items }) {
  dayjs.extend(relativeTime)
  dayjs.locale('en')

  return (
    <>
      <div className="px-8 bg-white border border-gray-200 flex items-center justify-between dark:bg-gray-800 dark:border-gray-700">
        <h2 className="text-base py-3 font-semibold dark:text-white text-gray-800 uppercase">
          Your Items
        </h2>
        <Link href="/dashboard/giving">
          <a className="text-emerald-600 font-semibold text-sm underline">
            View all
          </a>
        </Link>
      </div>
      {items &&
        items.map((item) => (
          <div
            key={item.id}
            className="py-4 px-8 bg-white border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-between">
              <Link href={`/dashboard/items/${item.slug}`}>
                <a>
                  <p className="font-semibold text-gray-500 text-sm hover:underline dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-400 tracking-wide">
                    {dayjs(item.created_at).fromNow()}
                  </p>
                </a>
              </Link>
              <p className="text-sm  hidden sm:block dark:text-gray-400">
                {item.category && item.category.name}
              </p>
              <div className="text-sm dark:text-gray-400">
                {item.accepted === false ? (
                  <div className="flex items-center">
                    <FiCheckSquare className="text-emerald-500 mr-2" />
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
