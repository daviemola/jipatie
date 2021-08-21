import Link from 'next/link'
import { FiCheckCircle, FiClock, FiXCircle } from 'react-icons/fi'

export default function ReqDetailsRequestor({ request, item }) {
  const deleteItem = async (id) => {
    if (confirm('Are you sure you want to withdraw?')) {
      const res = await fetch(`${API_URL}/requests/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()

      if (!res.ok) {
        toast.error(data.message)
      } else {
        toast.success('Delete successful')
        setTimeout(function () {
          router.push('/dashboard')
        }, 3000)
      }
    }
  }

  return (
    <>
      <div className="lg:w-1/2 md:w-2/3 mx-auto sm:border sm:rounded-md border-gray-200 pb-4 bg-white min-h-full">
        <div className="md:mx-6 md:px-4 md:py-1 mt-4 font-semibold uppercase text-xl">
          <h2>Details of the request</h2>
        </div>
        <div className="md:mx-6 md:px-4 md:py-1">
          {request.accepted === true && item.accepted === true && (
            <>
              <div className="flex items-center my-2 font-normal text-lg">
                <FiCheckCircle className="mr-4 text-green-600" />
                <p>Item request has been accepted</p>
              </div>
              {request.delivered === false || item.delivered === false ? (
                <div className="flex items-center my-2 font-normal text-lg">
                  <FiClock className="mr-4 text-red-600" />
                  <p>Item request has not been delivered.</p>
                </div>
              ) : (
                <div className="flex items-center my-2 font-normal text-lg">
                  <FiCheckCircle className="mr-4 text-green-600" />
                  <p>Item request has been delivered</p>
                </div>
              )}
            </>
          )}
          {request.accepted === false && item.accepted === true && (
            <div className="flex items-center my-2 font-normal text-lg">
              <FiXCircle className="mr-4 text-red-600" />
              <p>Item request has not been accepted</p>
            </div>
          )}
          {request.accepted === false && item.accepted === false && (
            <div className="flex items-center my-2 font-normal text-lg">
              <FiClock className="mr-4 text-yellow-600" />
              <p>Item request is pending. Kindly wait.</p>
            </div>
          )}
          {request.accepted === true && item.accepted === false && (
            <div className="flex items-center my-2 font-normal text-lg">
              <FiClock className="mr-4 text-yellow-600" />
              <p>Item request is pending. Kindly wait.</p>
            </div>
          )}
          {(request.accepted === true && item.accepted === true) ||
            (request.delivered === true && item.delivered === true && (
              <div className="flex items-center my-2 font-normal text-lg">
                <FiCheckCircle className="mr-4 text-green-600" />
                <p>Item request has been delivered</p>
              </div>
            ))}
        </div>
        <div className="md:mx-6 md:px-4 md:py-1 mt-4 border-t-2 border-gray-200">
          <div className="w-full mt-7">
            <Link href="#">
              <a className=" text-gray-600 font-semibold bg-yellow-400 py-3 w-full px-5 mr-2 rounded-sm">
                Change Request
              </a>
            </Link>
            <button
              className="text-gray-600 border border-gray-300 py-3 px-5 rounded-sm mr-4"
              onClick={() => deleteItem(request.id)}
            >
              Withdraw Request
            </button>
          </div>
        </div>
      </div>
      <div className="text-right lg:w-1/2 md:w-2/3 mx-auto my-3">
        <Link href="/dashboard/items">
          <a className="mr-3 text-yellow-60">Search for items</a>
        </Link>
      </div>
    </>
  )
}
