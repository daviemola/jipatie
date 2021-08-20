import { FiCheckCircle, FiClock, FiXCircle } from 'react-icons/fi'

export default function ReqDetailsRequestor() {
  return (
    <div className="lg:w-1/2 md:w-2/3 mx-auto sm:border sm:rounded-md border-gray-200 pb-4">
      <div className="md:mx-6 md:px-4 md:py-1 mt-4 font-semibold uppercase text-xl">
        <h2>Details of the request</h2>
      </div>
      <div className="md:mx-6 md:px-4 md:py-1">
        <div className="flex items-center my-2 font-normal text-lg">
          <FiCheckCircle className="mr-4 text-green-600" />
          <p>Request has been accepted</p>
        </div>
        <div className="flex items-center my-2 font-normal text-lg">
          <FiXCircle className="mr-4 text-red-600" />
          <p>Request has not been accepted</p>
        </div>
        <div className="flex items-center my-2 font-normal text-lg">
          <FiClock className="mr-4 text-yellow-600" />
          <p>Item request is pending. Kindly wait.</p>
        </div>
      </div>
    </div>
  )
}
