import Head from 'next/head'
import { useState, useEffect, useContext } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import AuthContext from '@/context/AuthContext'
import { useRouter } from 'next/router'

export default function LoginPage() {
  //   const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const { resetpassword, error, message } = useContext(AuthContext)

  const router = useRouter()
  //   setCode(router.query.code)
  const code = router.query.code

  useEffect(() => {
    error && toast.error(error)
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (password !== passwordConfirmation) {
      toast.error('Passwords do not match.')
      return
    }
    resetpassword({ code, password, passwordConfirmation })
  }

  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <section className="absolute w-full h-full sm:bg-gray-100 font-medium text-sm sm:mt-0 mt-20">
        <div className="sm:container mx-auto px-4 h-full">
          <div className="sm:flex content-center items-center justify-center h-full">
            <div className="w-full sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-2/7 sm:px-4">
              <div className="relative sm:flex flex-col min-w-0 break-words w-full mb-6 sm:rounded-sm bg-white sm:border sm:border-gray-300 sm:py-4">
                <div className="rounded-t mb-0 px-4 sm:px-7">
                  <div className="flex flex-wrap my-4">
                    <div className="ml-0 text-xl">
                      <h2 className="text-gray-600 font-semibold">
                        Reset Password
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex-auto px-4 sm:px-7 py-3">
                  <form onSubmit={handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-600 mb-2"
                        htmlFor="grid-password"
                      >
                        Password*
                      </label>
                      <input
                        type="password"
                        className="input-styles"
                        placeholder="Type your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-gray-600 mb-2"
                        htmlFor="grid-password"
                      >
                        Confirm Password*
                      </label>
                      <input
                        type="password"
                        className="input-styles"
                        placeholder="Confirm password"
                        value={passwordConfirmation}
                        onChange={(e) =>
                          setPasswordConfirmation(e.target.value)
                        }
                        style={{ transition: 'all .15s ease' }}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="btn-yellow-forms"
                        type="submit"
                        style={{ transition: 'all .15s ease' }}
                      >
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
