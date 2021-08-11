import { useRouter } from 'next/router'
import { GrLinkPrevious } from 'react-icons/gr'

export default function GoBack() {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="btn-gray my-3"
    >
      <GrLinkPrevious className="mr-2" />
      Go Back
    </button>
  )
}
