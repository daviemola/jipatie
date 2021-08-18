import Link from 'next/link'

export default function ItemRequests({ request }) {
  console.log(request)
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
              <p className="py-2">
                {new Date(req.created_at).toLocaleString()}
              </p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
