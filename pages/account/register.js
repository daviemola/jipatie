import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import AuthContext from '@/context/AuthContext'
import GoogleLogin from 'react-google-login'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const { register, error, message, googleAuth, loading } = useContext(
    AuthContext,
  )

  useEffect(() => {
    error && toast.error(error)
    // message && toast.success(message, { duration: 5000 })
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    //validation
    const hasEmptyFields = Object.values({
      username,
      email,
      password2,
      password,
    }).some((element) => element === '')
    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
      return
    }

    if (password !== password2) {
      toast.error('Passwords do not match.')
      return
    }

    register({ username, email, password })
  }

  const responseGoogle = async (response) => {
    const access_token = response?.accessToken
    googleAuth({ access_token })
  }

  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <section className="absolute w-full bg-gray-100 font-medium text-sm pt-24 pb-12 dark:bg-gray-900">
        <div className="sm:container mx-auto px-4">
          <div className="sm:flex content-center items-center justify-center">
            <div className="w-full sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-2/7 sm:px-4">
              <div className="relative sm:flex flex-col min-w-0 break-words w-full mb-6 pt-5 sm:rounded-sm bg-white border border-gray-300 sm:py-4 dark:bg-gray-800 dark:border-gray-700">
                <div className="rounded-t mb-0 px-4 sm:px-7">
                  <div className="flex flex-wrap my-4">
                    <div className="w-1/2">
                      <div className="ml-0 text-xl">
                        <h2 className="text-gray-600 font-semibold dark:text-white">
                          Register
                        </h2>
                      </div>
                    </div>
                    <div className="w-1/2 text-right">
                      <Link href="/account/login">
                        <a className="text-gray-600 font-semibold hover:underline mr-0 sm:mr-4 dark:text-gray-400">
                          <small>Log in here?</small>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex-auto px-4 sm:px-7 py-3">
                  {message && (
                    <p className="text-emerald-800 text-sm bg-emerald-200 p-2 mb-3 text-center">
                      Success. Check your email for instructions.
                    </p>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-600 dark:text-gray-200 mb-2"
                        htmlFor="grid-2"
                      >
                        Username*
                      </label>
                      <input
                        type="text"
                        className="input-styles font-mono"
                        placeholder="Your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-600 dark:text-gray-200 mb-2"
                        htmlFor="grid-password"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        className="input-styles font-mono"
                        placeholder="yournames@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-600 dark:text-gray-200 mb-2"
                        htmlFor="grid-password"
                      >
                        Password*
                      </label>
                      <input
                        type="password"
                        className="input-styles font-mono"
                        placeholder="Type your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-600 dark:text-gray-200 mb-2"
                        htmlFor="grid-password"
                      >
                        Password Again*
                      </label>
                      <input
                        type="password"
                        className="input-styles font-mono"
                        placeholder="Type your password again"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="btn-emerald-forms"
                        type="submit"
                        style={{ transition: 'all .15s ease' }}
                      >
                        Register
                      </button>
                    </div>
                  </form>

                  <div className="text-gray-500 text-center my-1 font-semibold">
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
                          <>
                            <Image
                              alt="..."
                              className="w-full"
                              src="/google.svg"
                              width={15}
                              height={15}
                            />
                            <div className="pr-2"></div>
                            Register with Google
                          </>
                        )}
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
