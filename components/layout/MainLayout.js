import Footer from './Footer'
import MainMenu from './MainMenu'

const MainLayout = ({ children }) => {
  return (
    <>
      <MainMenu />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
