import { Outlet } from "react-router-dom"
import GoToTopBtn from "../components/GoToTopBtn"

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>This is the dashboard</p>
      <Outlet />
      <GoToTopBtn />
    </div>
  )
}

export default Dashboard