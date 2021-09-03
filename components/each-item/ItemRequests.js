import Link from 'next/link'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import { FiArrowRight } from 'react-icons/fi'

export default function ItemRequests({ request }) {
  dayjs.extend(relativeTime)

  return (
    <div>
      {request?.map((req) => (
        <div
          key={req.id}
          className="py-4 px-8 bg-white border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-700"
        >
          <p className="font-semibold text-gray-600 text-base dark:text-white">
            {req.requested_by?.username}
          </p>
          <p className="pb-2 dark:text-gray-400 text-xs">
            {dayjs(req.created_at).fromNow()}
          </p>
          <h1 className="text-sm">{req.description}</h1>
          <Link href={`/dashboard/items/${req.item.slug}/request/${req.id}`}>
            <a className="flex items-center py-2 text-emerald-700 dark:text-emerald-400 text-sm hover:underline">
              View Request
              <FiArrowRight className="ml-2" />
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
