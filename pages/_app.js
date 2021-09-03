import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import { AuthProvider } from '@/context/AuthContext'
import { ThemeProvider } from 'next-themes'

const progress = new ProgressBar({
  size: 2,
  color: '#059669',
  className: 'bar-of-progress',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
