"use client"
import Sidebar from "../components/SideBar"
import Header from "../components/Header"
import ContentTable from "../components/ContentTable"
import UserProfile from "../components/UserProfile"
import MonthlyProgress from "../components/MonthlyProgress"
import "../styles/content.css"

export default function Content() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: "20px" }}>
          <h2>Content Managements</h2>
          <p>Manage Content, And Review Team Progress</p>

          <div className="content-stats">
            <div className="stat-card submitted">
              <div className="stat-icon">📝</div>
              <div className="stat-content">
                <h4>12</h4>
                <p>Submitted</p>
              </div>
            </div>
            <div className="stat-card pending">
              <div className="stat-icon">⏳</div>
              <div className="stat-content">
                <h4>02</h4>
                <p>Pending</p>
              </div>
            </div>
            <div className="stat-card late">
              <div className="stat-icon">⚠️</div>
              <div className="stat-content">
                <h4>01</h4>
                <p>Late</p>
              </div>
            </div>
          </div>

          <ContentTable />
        </div>
      </div>
      <div style={{ width: "350px", padding: "20px" }}>
        <UserProfile />
        <MonthlyProgress />
        <button className="add-video-btn">
          <span>+</span> Add Video
        </button>
      </div>
    </div>
  )
}
