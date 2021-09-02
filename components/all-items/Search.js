import { useState } from 'react'
import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'

export default function Search() {
  const [term, setTerm] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (term !== '') {
      router.push(`/dashboard/items/search?term=${term}`)
      setTerm('')
    }
  }

  return (
    <div className="pt-1 relative mx-auto text-gray-600 hidden md:block">
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          className="bg-white h-10 bg-opacity-50 px-4 pr-16 ml-4 border border-gray-300 rounded-md text-sm focus:ring-0 focus:outline-none dark:border-gray-600 dark:focus:border-emerald-800 focus:border-emerald-600 dark:placeholder-gray-100 placeholder-gray-500 focus:bg-gray-100 focus:text-gray-500 dark:bg-gray-800 dark:text-gray-50"
          name="search"
          value={term}
          placeholder="Search Items"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-4 mr-4 flex flex-col items-center"
        >
          <FaSearch className="text-emerald-600 dark:text-gray-400" />
        </button>
      </form>
    </div>
  )
}
