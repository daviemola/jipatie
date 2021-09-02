import Footer from './Footer'
import MainNav from './MainNav'

const MainLayout = ({ children }) => {
  return (
    <>
      <MainNav />
      <main className="bg-white dark:bg-gray-800">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
