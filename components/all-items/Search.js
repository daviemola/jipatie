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
          className="bg-gray-800 h-10 bg-opacity-50 px-4 pr-16 ml-4 rounded-sm text-sm focus:outline-none placeholder-gray-50 focus:bg-gray-700 focus:text-gray-50"
          name="search"
          value={term}
          placeholder="Search Items"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-4 mr-4 flex flex-col items-center"
        >
          <FaSearch className="text-yellow-500" />
        </button>
      </form>
    </div>
  )
}
