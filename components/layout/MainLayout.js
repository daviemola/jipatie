import Footer from './Footer'
import MainMenu from './MainMenu'

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-100">
      <MainMenu />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
