"use client"
import "/src/styles/UserProfile.css"

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="profile-placeholder">
        <div className="online-indicator"></div>
      </div>
      <h3 className="profile-name">ARAB Abdel Malek Mehdi</h3>
      <p className="profile-title">Web developer
      </p>
      <div className="profile-info">
        <span>📅 Joined November 2025</span>
        <span>💻 Computer Science</span>
      </div>

      <div className="team-progress">
        <h4>Team Level Progress</h4>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "50%" }}></div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
