import cookie from 'cookie'
import { API_URL } from '@/config/index'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body

    const strapiRes = await fetch(`${API_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const data = await strapiRes.json()

    if (data.ok) {
      res.status(200).json({
        message: `Success. Email sent.`,
      })
    } else {
      res
        .status(data.statusCode)
        .json({ message: data.message[0].messages[0].message })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
