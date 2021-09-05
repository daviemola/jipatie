import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import AuthContext from '@/context/AuthContext'
import GoogleLogin from 'react-google-login'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login, error, loading, googleAuth } = useContext(AuthContext)

  useEffect(() => error && toast.error(error))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.isTrusted) return
    login({ email, password })
  }

  const responseGoogle = async (response) => {
    const access_token = response?.accessToken
    googleAuth({ access_token })
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="Jipatie Login" content="Log in to your jipatie account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <section className="absolute w-full h-full sm:bg-gray-100 font-medium text-sm sm:mt-0 mt-20 dark:bg-gray-900">
        <div className="sm:container mx-auto px-4 h-full">
          <div className="sm:flex content-center items-center justify-center h-full">
            <div className="w-full sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-2/7 sm:px-4">
              <div className="relative sm:flex flex-col min-w-0 break-words w-full mb-6 shadow-lg sm:rounded-sm bg-white sm:border sm:border-gray-300 sm:py-4 dark:bg-gray-800 dark:border-gray-700">
                <div className="rounded-t mb-0 px-4 sm:px-7">
                  <div className="flex flex-wrap my-4">
                    <div className="w-1/2">
                      <div className="ml-0 text-xl">
                        <h2 className="text-gray-600 font-semibold dark:text-white">
                          Login
                        </h2>
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <Link href="/account/register">
                        <a className="text-gray-600 font-base mr-0 hover:underline dark:text-gray-400">
                          <small>Create an account</small>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-auto px-4 sm:px-7 py-3">
                  <form
                    onSubmit={handleSubmit}
                    // autoComplete="off"
                  >
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-600 mb-2 dark:text-gray-200"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="input-styles font-mono"
                        placeholder="Your Email address"
                        value={email}
                        autoComplete="given-name"
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-600 mb-2 dark:text-gray-200"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="input-styles font-mono"
                        placeholder="Your Password"
                        value={password}
                        autoComplete="given-name"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="flex items-center mt-3">
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-gray-600"
                        />
                        <span className="ml-2 text-gray-500 text-xs dark:text-gray-400">
                          Stay logged in
                        </span>
                      </label>
                      <Link href="/account/forgotpassword">
                        <a className="text-xs text-gray-500 pt-3 hover:underline dark:text-gray-400">
                          Forgot password?
                        </a>
                      </Link>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="btn-emerald-forms"
                        type="submit"
                        style={{ transition: 'all .15s ease' }}
                      >
                        {loading ? (
                          <div className="flex items-center justify-center">
                            <Image
                              alt="..."
                              className="w-full text-white m-0"
                              src="/loaderwhite.svg"
                              width={20}
                              height={20}
                            />
                            <div className="pr-2"></div>
                            Loading
                          </div>
                        ) : (
                          `Sign In`
                        )}
                      </button>
                    </div>
                  </form>
                  <div className="text-gray-500 text-center my-1">
                    <small>OR</small>
                  </div>
                  <GoogleLogin
                    clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
                    render={(renderProps) => (
                      <button
                        className="btn-login-register mb-4 disabled:opacity-50"
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                        onClick={renderProps.onClick}
                      >
                        <Image
                          alt="..."
                          className="w-full"
                          src="/google.svg"
                          width={15}
                          height={15}
                        />
                        <div className="pr-2"></div>
                        Sign in with Google
                      </button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
