import Head from 'next/head'
import { FaPencilAlt, FaSave } from 'react-icons/fa'
import { HiPencil } from 'react-icons/hi'
import MainLayout from '../../components/layout/MainLayout'

function edit() {
  return (
    <MainLayout>
      <Head>
        <title>Edit Item</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-3">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Edit an Item
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    Item Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-give"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    Estimated Item Value*
                  </label>
                  <input
                    type="number"
                    id="value"
                    name="number"
                    className="input-give"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    Item Description*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="input-give"
                  ></textarea>
                </div>
              </div>

              <div className="p-2 w-1/2 my-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    <span>Item Size*</span>
                    <select
                      name="cars"
                      id="cars"
                      form="carform"
                      className="form-select block w-full input-give p-2"
                    >
                      <option value="volvo">Select Item Size</option>
                      <option value="volvo">Small</option>
                      <option value="saab">Medium</option>
                      <option value="opel">Large</option>
                      <option value="audi">Extra-Large</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="p-2 w-1/2 my-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    <span>Item Color*</span>
                    <select
                      name="cars"
                      id="cars"
                      form="carform"
                      className="form-select block w-full input-give p-2"
                    >
                      <option value="volvo">Select Item Color</option>
                      <option value="volvo">Greed</option>
                      <option value="saab">Black</option>
                      <option value="saab">Blue</option>
                      <option value="opel">Yellow</option>
                      <option value="audi">Red</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    Out of 10 condition*
                  </label>
                  <input
                    type="number"
                    id="value"
                    name="number"
                    className="input-give"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    <span>Item Condition*</span>
                    <select
                      name="cars"
                      id="cars"
                      form="carform"
                      className="form-select block w-full input-give p-2"
                    >
                      <option value="volvo">Select Item Condition</option>
                      <option value="volvo">Excellent</option>
                      <option value="saab">Great</option>
                      <option value="saab">Good</option>
                      <option value="opel">Fair</option>
                      <option value="audi">Bad</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600 font-semibold"
                  >
                    Item Location*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="input-give"
                  />
                </div>
              </div>
              <div className="p-2 m-3 w-full">
                <button className="submit-btn">
                  <HiPencil className="text-2xl" />
                  EDIT ITEM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default edit
