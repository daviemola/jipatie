import Image from 'next/image'
import Link from 'next/link'

function register() {
  return (
    <section className="w-full h-full pt-7 sm:bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 bg-register font-sans">
      {/* <div className="absolute top-0 w-full h-full bg-gray-700 bg-register"></div> */}
      <div className="sm:container mx-auto px-4 h-full">
        <div className="sm:flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 sm:px-4">
            <div className="sm:flex flex-col min-w-0 break-words w-full mb-6 sm:rounded-sm bg-white sm:border sm:border-gray-300">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h4 className="text-gray-600 font-bold text-lg font-mono">
                    JIPATIE
                  </h4>
                  <hr className="mt-6 border-b-1 border-gray-300" />
                </div>
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 font-bold">
                    Register an account with
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
                  <small>Or register with your credentials</small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      First & Last Name*
                    </label>
                    <input
                      type="text"
                      className="input-styles"
                      placeholder="Your Names"
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block  text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      className="input-styles"
                      placeholder="yournames@example.com"
                      style={{ transition: 'all .15s ease' }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password*
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
                      className="block text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password Again*
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
                      className="btn-yellow-forms"
                      type="button"
                      style={{ transition: 'all .15s ease' }}
                    >
                      Register
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
                    <Link href="/login">
                      <a className="text-gray-600 font-bold">
                        <small>Log in here?</small>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default register
