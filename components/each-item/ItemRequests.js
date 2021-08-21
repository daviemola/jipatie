import Link from 'next/link'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

export default function ItemRequests({ request }) {
  dayjs.extend(relativeTime)

  // console.log(request)
  return (
    <div>
      {request?.map((req) => (
        <div
          key={req.id}
          className="py-4 px-8 bg-white border border-gray-200 hover:bg-gray-50"
        >
          <Link href={`/dashboard/items/${req.item.slug}/request/${req.id}`}>
            <a>
              <p className="font-semibold text-gray-600 text-lg">
                {req.requested_by?.username}
              </p>
              <h1>{req.description}</h1>
              <p className="py-2">{dayjs(req.created_at).fromNow()}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
