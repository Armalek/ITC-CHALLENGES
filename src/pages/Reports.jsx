"use client"
import Sidebar from "../components/SideBar"
import Header from "../components/Header"
import ReportsTable from "../components/ReportsTable"
import UserProfile from "../components/UserProfile"
import MonthlyProgress from "../components/MonthlyProgress"
import "../styles/reports.css"

export default function Reports() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: "20px" }}>
          <h2>Reports Managements</h2>
          <p>Upload, Track, And Review Team Reports</p>

          <div className="reports-stats">
            <div className="stat-card submitted">
              <div className="stat-icon">📄</div>
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

          <ReportsTable />
        </div>
      </div>
      <div style={{ width: "350px", padding: "20px" }}>
        <UserProfile />
        <MonthlyProgress />
        <button className="upload-report-btn">
          <span>⬆</span> Upload Report
        </button>
      </div>
    </div>
  )
}
