import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'

function EachItem({ item }) {
  dayjs.extend(relativeTime)
  dayjs.locale('en')
  return (
    <div className="md:w-1/2 lg:w-1/4 p-3">
      <Link href={`/institutions/${item.institution.id}/${item.slug}`}>
        <a>
          <div className="border bg-white border-gray-200 rounded-sm md:border-white lg:border-gray-200 hover:shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full block"
              src={item.photo ? item.photo.formats.small.url : '/420x260.png'}
              height={260}
              width={420}
            />
            <div className="py-2 px-4">
              <h2 className="text-base text-gray-700 font-semibold mb-1 dark:text-gray-50">
                <span className="mr-1">{item.name}</span>
              </h2>
              <div className="flex mb-2 text-emerald-700 dark:text-emerald-500 text-sm items-center">
                <span className="text-gray-700 dark:text-gray-300 mr-1">
                  By
                </span>
                <span className="mr-1">{item.user.username}</span>
                <span className="ml-1">&middot;</span>
                <span className="text-xs text-gray-500 font-light ml-1">
                  {dayjs(item.created_at).fromNow()}
                </span>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default EachItem
