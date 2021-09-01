import Footer from './Footer'
import MainNav from './MainNav'

const MainLayout = ({ children }) => {
  return (
    <main className="bg-gray-100">
      <MainNav />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
