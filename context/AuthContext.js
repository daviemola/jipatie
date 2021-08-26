import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '@/config/index'
// import { getSession, signIn, signOut } from 'next-auth/client'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => checkUserLoggedIn(), [])

  //register user
  const register = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()

    if (res.ok) {
      setUser(null)
      setMessage('Check your email for further instructions. ')
      setTimeout(function () {
        router.push('/login')
      }, 6000)
    } else {
      setError(data.message)
      setError(null)
    }
  }

  //login user
  const login = async ({ email: identifier, password }) => {
    setLoading(true)
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier, password }),
    })

    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
      router.push('/dashboard/items')
      setLoading(false)
    } else {
      setLoading(false)
      setError(data.message)
      setError(null)
    }
  }

  //logout user
  const logout = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: 'POST',
    })

    if (res.ok) {
      setUser(null)
      router.push('/')
    }
  }

  //check if user is logged in
  const checkUserLoggedIn = async () => {
    const res = await fetch(`${NEXT_URL}/api/user`)
    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
    } else {
      setUser(null)
    }
  }

  //send email
  const forgotpassword = async ({ email }) => {
    const res = await fetch(`${NEXT_URL}/api/forgotpassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (res.ok) {
      setUser(null)
      setMessage(data.message)
      setTimeout(function () {
        router.push('/login')
      }, 6000)
    } else {
      setError(data.message)
      setError(null)
    }
  }

  //Reset Password for a user
  const resetpassword = async ({ code, password, passwordConfirmation }) => {
    const res = await fetch(`${NEXT_URL}/api/resetpassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, password, passwordConfirmation }),
    })

    const data = await res.json()

    if (res.ok) {
      setUser(data.user)
      router.push('/dashboard/items')
    } else {
      setError(data.message)
      setError(null)
    }
  }

  //Google auth functionality
  const googleAuth = async () => {}

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        register,
        login,
        logout,
        message,
        forgotpassword,
        googleAuth,
        resetpassword,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
