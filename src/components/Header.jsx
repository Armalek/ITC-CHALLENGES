"use client"
import { Search } from "lucide-react"
import "../styles/Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="search-box">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Search member..." />
      </div>

      <div className="header-right">
        <div className="user-badge">
          <span className="user-name">Arab Abdel Malek Mehdi </span>
        </div>
        <div className="header-icons">
          <div className="icon-item">
            <span className="badge">5</span>🎁
          </div>
          <div className="icon-item">
            <span className="badge">5</span>🔥
          </div>
          <div className="icon-item">
            <span className="badge">5</span>⭐
          </div>
          <div className="notification-icon">
            <div className="avatar">👤</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
