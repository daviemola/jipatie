import Footer from './Footer'
import MainNav from './MainNav'

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <MainNav />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
