import { Outlet } from "react-router-dom"
import Navigation from "../../routes/navigation/Navigation"
import Footer from "../Footer"

const Layout = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout