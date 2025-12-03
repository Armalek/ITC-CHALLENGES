"use client"
import { useNavigate } from "react-router-dom"
import "../styles/QuickActions.css"

const QuickActions = () => {
  const navigate = useNavigate()

  const actions = [
    { icon: "➕", label: "Add Member", color: "#E3F2FD", href: "#" },
    { icon: "➕", label: "Add Event", color: "#FFF3E0", href: "/events" },
    { icon: "📤", label: "Upload Report", color: "#FCE4EC", href: "#" },
    { icon: "➕", label: "Add Video", color: "#F3E5F5", href: "#" },
  ]

  const handleClick = (href) => {
    if (href !== "#") {
      navigate(href)
    }
  }

  return (
    <div className="quick-actions">
      <h3 className="actions-title">Quick Actions</h3>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() => handleClick(action.href)}
            className="action-btn"
            style={{ backgroundColor: action.color, background: "none", border: "none", cursor: "pointer" }}
          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickActions
