"use client"
import "/src/styles/UsersTable.css"

const UsersTable = ({ users }) => {
  const handleRemove = (userId) => {
    console.log("[v0] Remove user:", userId)
  }

  const handleViewProfile = (userId) => {
    console.log("[v0] View profile:", userId)
  }

  return (
    <div className="users-table-container">
      <table className="users-table">
        <thead>
          <tr>
            <th>Member</th>
            <th>Role</th>
            <th>Level</th>
            <th>Last Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="member-name">{user.name}</td>
              <td className="role">{user.role}</td>
              <td className="level">{user.level}</td>
              <td className="last-active">{user.lastActive}</td>
              <td className="action">
                <button className="view-profile-btn" onClick={() => handleViewProfile(user.id)}>
                  View Profile
                </button>
                <button className="remove-btn" onClick={() => handleRemove(user.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTable
