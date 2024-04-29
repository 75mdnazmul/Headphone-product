import { Outlet } from "react-router-dom"
import { Footer, /* Navbar */ } from "../shared"
import GoToTopBtn from "../components/GoToTopBtn"

const MainLayout = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <Outlet />
        <Footer/>
        <GoToTopBtn />
    </div>
  )
}

export default MainLayout