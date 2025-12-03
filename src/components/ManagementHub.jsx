"use client"
import { useNavigate } from "react-router-dom"
import "/src/styles/ManagementHub.css"

const ManagementHub = () => {
  const navigate = useNavigate()

  const hubItems = [
    { icon: "👥", label: "Manage Team", bgColor: "#E3F2FD", borderColor: "#2196F3", href: "/users" },
    { icon: "📅", label: "Manage Events", bgColor: "#FFF3E0", borderColor: "#FF9800", href: "/events" },
    { icon: "📊", label: "Manage Reports", bgColor: "#FCE4EC", borderColor: "#E91E63", href: "/reports" },
    { icon: "🎨", label: "Manage Content", bgColor: "#F3E5F5", borderColor: "#9C27B0", href: "/content" },
  ]

  const handleClick = (href) => {
    if (href !== "#") {
      navigate(href)
    }
  }

  return (
    <div className="management-hub">
      <h3 className="hub-title">Management Hub</h3>
      <div className="hub-items">
        {hubItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item.href)}
            className="hub-item"
            style={{
              backgroundColor: item.bgColor,
              borderLeftColor: item.borderColor,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span className="hub-icon">{item.icon}</span>
            <span className="hub-label">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ManagementHub
