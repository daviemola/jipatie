import cookie from 'cookie'
import { API_URL } from '@/config/index'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { access_token } = req.body
    const strapiRes = await fetch(
      `${API_URL}/auth/google/callback?access_token=${access_token}`,
    )

    const user = await strapiRes.json()

    if (strapiRes.ok) {
      // set cookie
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('token', user.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 7,
          sameSite: 'strict',
          path: '/',
        }),
      )
      res.status(200).json({ user: user.user })
    } else {
      res.status(403).json({ message: 'User forbidden' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
