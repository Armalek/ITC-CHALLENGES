"use client"
import { useEffect, useState } from "react"
import Sidebar from "/src/components/SideBar"
import Header from "/src/components/Header"
import UsersTable from "/src/components/UsersTable"
import UserProfile from "/src/components/UserProfile"
import "/src/styles/users.css"

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch users from your API
    const fetchUsers = async () => {
      try {
        // Replace with your actual API endpoint
        // const response = await fetch('/api/users')
        // const data = await response.json()
        
        // For now, using mock data
        const mockData = [
          { id: 1, name: "John Doe", role: "Admin", level: "Expert", lastActive: "2 hours ago" },
          { id: 2, name: "Jane Smith", role: "User", level: "Intermediate", lastActive: "1 day ago" },
          { id: 3, name: "Bob Johnson", role: "Editor", level: "Beginner", lastActive: "3 days ago" },
        ]
        
        setUsers(mockData)
      } catch (error) {
        console.error("Error fetching users:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  if (loading) {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Header />
          <p>Loading users...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ width:"770px",padding: "20px" }}>
         <h2 style={{ paddingBottom: "10px" }}>Users Management</h2>
         <p style={{ paddingBottom: "20px", fontSize:"bold"}}>Manage All Users And Roles</p>
          <UsersTable users={users} />
        </div>
      </div>
      <div style={{ width: "300px", padding: "20px" }}>
        <UserProfile />
       <button style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "12px 70px",
            backgroundColor: "#98b5ccff",
            background: "linear-gradient(135deg, #c6e3fbff 0%, #21cbf3 100%)",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(49, 51, 54, 0.3)",
            width: "260px"
       }}>
  <span style={{ fontSize: "18px" }}>+</span>
  Add Member
</button>
      </div>
    </div>
  )
}