import Link from 'next/link'
import { PER_PAGE } from '@/config/index'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

export default function Pagination({ page, total }) {
  const lastPage = Math.ceil(total / PER_PAGE)
  return (
    <div className="flex flex-row items-center justify-center">
      {page > 1 && (
        <Link href={`/dashboard/items?page=${page - 1}`}>
          <a className="p-2 m-3 border border-gray-400 flex flex-row items-center rounded-sm hover:bg-gray-400">
            <HiChevronDoubleLeft className="mr-2" />
            Prev
          </a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/dashboard/items?page=${page + 1}`}>
          <a className="p-2 m-3 border border-gray-400 flex flex-row items-center rounded-sm hover:bg-gray-400">
            Next
            <HiChevronDoubleRight className="ml-2" />
          </a>
        </Link>
      )}
    </div>
  )
}
