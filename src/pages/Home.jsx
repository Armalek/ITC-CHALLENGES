"use client"
import Sidebar from "../components/SideBar"
import Header from "../components/Header"
import OverviewPanel from "../components/OverviewPanel"
import Chart from "../components/Chart"
import QuickActions from "../components/QuickActions"
import UserProfile from "../components/UserProfile"
import ManagementHub from "../components/ManagementHub"
import "../styles/dashboard.css"

export default function Home() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: "20px" }}>
          <OverviewPanel />
          <Chart />
          <QuickActions />
        </div>
      </div>
      <div style={{ width: "350px", padding: "20px" }}>
        <UserProfile />
        <ManagementHub />
      </div>
    </div>
  )
}
