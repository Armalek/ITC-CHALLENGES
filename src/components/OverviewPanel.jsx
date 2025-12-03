"use client"
import "../styles/OverviewPanel.css"

const OverviewPanel = () => {
const stats = [
  { icon: "👥", number: "50", label: "Members" },
  { icon: "📊", number: "20", label: "Playlists" },
  { icon: "🏆", number: "5", label: "Rank" },
  { icon: "✅", number: "6", label: "Active Tasks" },
]
  return (
    <div className="overview-panel">
      <h2 className="panel-title">Overview Panel</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OverviewPanel
