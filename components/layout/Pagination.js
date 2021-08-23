import Link from 'next/link'
import { PER_PAGE, DASH_PER_PAGE } from '@/config/index'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

export default function Pagination({ page, total, pageName }) {
  let lastPage
  if (pageName === 'giving' || 'requests') {
    lastPage = Math.ceil(total / DASH_PER_PAGE)
  } else {
    lastPage = Math.ceil(total / PER_PAGE)
  }

  return (
    <div className="flex flex-row items-center justify-center">
      {page > 1 && (
        <Link href={`/dashboard/${pageName}?page=${page - 1}`}>
          <a className="p-2 m-3 border border-gray-400 flex flex-row items-center rounded-sm hover:bg-gray-400">
            <HiChevronDoubleLeft className="mr-2" />
            Prev
          </a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/dashboard/${pageName}?page=${page + 1}`}>
          <a className="p-2 m-3 border border-gray-400 flex flex-row items-center rounded-sm hover:bg-gray-400">
            Next
            <HiChevronDoubleRight className="ml-2" />
          </a>
        </Link>
      )}
    </div>
  )
}
