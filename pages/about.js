import Image from 'next/image'
import Link from 'next/link'

function register() {
  return (
    <div className="flex flex-wrap w-full h-full">
      <div className="w-1/2 shadow-2xl">
        <Image
          className="hidden object-cover w-full h-screen md:block"
          src="/register.jpg"
          alt=""
          width={300}
          height={500}
        />
      </div>
      <div className="w-1/2 ">
        <div className="w-full lg:w-8/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-white border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h4 className="text-gray-600 font-bold text-lg">
                  Create your account with Jipatie
                </h4>
                <hr className="mt-6 border-b-1 border-gray-300" />
              </div>
              <div className="text-center mb-3">
                <h6 className="text-gray-600 font-bold">
                  Create an account with
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  className="btn-login-register"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  <Image
                    alt="..."
                    className="w-5 mr-1"
                    src="/github.svg"
                    width={15}
                    height={15}
                  />
                  <div className="pr-2"></div>
                  Github
                </button>
                <button
                  className="btn-login-register"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  <Image
                    alt="..."
                    className="w-5 pr-500"
                    src="/google.svg"
                    width={15}
                    height={15}
                  />
                  <div className="pr-2"></div>
                  Google
                </button>
              </div>
              <hr className="mt-6 border-b-1 border-gray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-gray-500 text-center mb-3 font-bold">
                <small>Or sign in with credentials</small>
              </div>
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First & Last Name
                  </label>
                  <input
                    type="text"
                    className="input-styles"
                    placeholder="First Name"
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="input-styles"
                    placeholder="yourname@example.com"
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="input-styles"
                    placeholder="Type your password"
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password Again
                  </label>
                  <input
                    type="password"
                    className="input-styles"
                    placeholder="Type your password Again"
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="btn-emerald-forms"
                    type="button"
                    style={{ transition: 'all .15s ease' }}
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="flex flex-wrap mt-6">
                <div className="w-1/2">
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className="text-gray-600"
                  >
                    <small>Forgot password?</small>
                  </a>
                </div>
                <div className="w-1/2 text-right">
                  <Link href="/register">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-600 font-bold"
                    >
                      <small>Create new account</small>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default register
