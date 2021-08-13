import Image from 'next/image'
import { useState } from 'react'
import { API_URL } from '@/config/index'
import { FaCloudUploadAlt } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'

export default function ImageUpload({ item, token }) {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [filename, setFilename] = useState(false)

  const [imagePreview, setImagePreview] = useState(
    item.photo ? item.photo.formats.thumbnail.url : null,
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append('files', image)
    formData.append('ref', 'item')
    formData.append('refId', item.id)
    formData.append('field', 'photo')

    if (formData.entries().next().value[1] == 'null') {
      toast.error('Please upload an image.')
      setLoading(false)
      return
    }

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })

    if (res.ok) {
      setLoading(false)
      setFilename('')
      toast.success('Image Uploaded')
      const res = await fetch(`${API_URL}/items/${item.id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
      setImagePreview(data.photo.formats.thumbnail.url)
    } else {
      setLoading(false)
      toast.error('Image not uploaded. Try again')
    }
  }

  const handleFileChange = (e) => {
    setImage(e.target.files[0])
    setFilename(e.target.files[0].name)
  }

  return (
    <div className="flex flex-col w-full mb-2">
      <Toaster />
      <h1 className="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-900">
        Upload Image
      </h1>
      <div className="flex flex-wrap">
        <div className="w-1/2 pr-2">
          <form onSubmit={handleSubmit}>
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-gray-100 rounded-sm uppercase border cursor-pointer hover:bg-gray-200 text-yellow-600 ease-linear transition-all duration-150">
              <FaCloudUploadAlt className="" />
              <span className="mt-2 text-base leading-normal">
                Select an image
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {filename && <p>{filename}</p>}
            <input
              type="submit"
              value={loading ? 'Uploading...' : 'Upload'}
              className={
                loading
                  ? 'btn-gray mt-2 opacity-50 cursor-not-allowed'
                  : 'btn-gray mt-2 cursor-pointer'
              }
            />
          </form>
        </div>
        <div className="w-1/2 px-2">
          {imagePreview && (
            <Image src={imagePreview} height={100} width={170} alt="" />
          )}
        </div>
      </div>
      {!imagePreview && (
        <div className="text-base my-2">
          <p>No image uploaded</p>
        </div>
      )}
    </div>
  )
}
