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
    <div className="pt-2 relative mx-auto text-gray-600 hidden md:block">
      <form onSubmit={handleSubmit}>
        <input
          className="border border-gray-50  bg-white h-9 px-4 pr-16 ml-4 rounded-sm text-sm focus:outline-none"
          type="search"
          name="search"
          value={term}
          placeholder="Search Items"
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <FaSearch className="text-yellow-700" />
        </button>
      </form>
    </div>
  )
}
