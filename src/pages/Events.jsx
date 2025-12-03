import Sidebar from "/src/components/SideBar";
import Header from "/src/components/Header"
import UserProfile from "/src/components/UserProfile"
import TeamsProgress from "/src/components/TeamProgress"
import "/src/styles/events.css"

export default function Events() {
  const eventCards = [
    { type: "challenges", title: "Challenges", date: "Sep 12, 14:00", location: "Location" },
    { type: "workshops", title: "Workshops", date: "Sep 12, 14:00", location: "ITC Local" },
    { type: "challenges", title: "Challenges", date: "Sep 12, 14:00", location: "Location" },
    { type: "workshops", title: "Workshops", date: "Sep 12, 14:00", location: "ITC Local" },
    { type: "challenges", title: "Challenges", date: "Sep 12, 14:00", location: "Location" },
    { type: "workshops", title: "Workshops", date: "Sep 12, 14:00", location: "ITC Local" },
  ]

  // History of events data (removed status and rating)
  const eventHistory = [
    { id: 1, eventName: "Web Dev Workshop", type: "Workshop", date: "2024-03-15", attendees: 45 },
    { id: 2, eventName: "AI Hackathon", type: "Challenge", date: "2024-03-10", attendees: 28 },
    { id: 3, eventName: "UX Design Masterclass", type: "Workshop", date: "2024-03-05", attendees: 32 },
    { id: 4, eventName: "Data Science Competition", type: "Challenge", date: "2024-02-28", attendees: 37 },
    { id: 5, eventName: "Mobile App Development", type: "Workshop", date: "2024-02-20", attendees: 41 },

  ]

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: "20px", width: "770px" }}>
          {/* Current Events Section */}
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ marginBottom: "8px", fontSize: "24px", fontWeight: "700", color: "#333" }}>
              Events
            </h2>
            <p style={{ fontWeight: "600", color: "#555", fontSize: "14px", marginBottom: "20px" }}>
              Upcoming Workshops & Challenges
            </p>
            
            <h3 style={{ marginBottom: "15px", fontSize: "18px", fontWeight: "600", color: "#444" }}>
              Workshops
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "30px" }}>
              {eventCards.map((card, index) => (
                <div
                  key={index}
                  style={{
                    padding: "20px",
                    borderRadius: "12px",
                    backgroundColor: card.type === "workshops" ? "#FFF3CD" : "#E7F3FF",
                    border: card.type === "workshops" ? "2px solid #FFA500" : "2px solid #0066CC",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <div style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: card.type === "workshops" ? "#FFA500" : "#0066CC",
                      marginRight: "8px"
                    }} />
                    <h4 style={{ 
                      margin: 0, 
                      fontSize: "16px", 
                      fontWeight: "600",
                      color: card.type === "workshops" ? "#D68910" : "#1A5276"
                    }}>
                      {card.title}
                    </h4>
                  </div>
                  <p style={{ margin: "6px 0", fontSize: "14px", color: "#555" }}>
                    📅 {card.date}
                  </p>
                  <p style={{ margin: "6px 0 12px 0", fontSize: "14px", color: "#555" }}>
                    📍 {card.location}
                  </p>
                  <button
                    style={{
                      width: "100%",
                      padding: "10px",
                      marginTop: "10px",
                      border: card.type === "workshops" ? "2px solid #FFA500" : "2px solid #0066CC",
                      borderRadius: "8px",
                      backgroundColor: "white",
                      cursor: "pointer",
                      color: card.type === "workshops" ? "#FFA500" : "#0066CC",
                      fontWeight: "600",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = card.type === "workshops" ? "#FFA500" : "#0066CC";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.color = card.type === "workshops" ? "#FFA500" : "#0066CC";
                    }}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* History of Events Table */}
          <div style={{ 
            backgroundColor: "white", 
            borderRadius: "12px", 
            padding: "25px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            marginTop: "20px"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h3 style={{ margin: 0, fontSize: "20px", fontWeight: "700", color: "#333" }}>
                Workshops History
              </h3>
            
            </div>
            
            <div style={{ overflowX: "auto" }}>
              <table style={{ 
                width: "100%", 
                borderCollapse: "collapse",
                fontSize: "14px"
              }}>
                <thead>
                  <tr style={{ 
                    backgroundColor: "#f8f9fa",
                    borderBottom: "2px solid #e0e0e0"
                  }}>
                    <th style={{ 
                      textAlign: "left", 
                      padding: "14px 16px", 
                      fontWeight: "600", 
                      color: "#555",
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>
                      Event Name
                    </th>
                    <th style={{ 
                      textAlign: "left", 
                      padding: "14px 16px", 
                      fontWeight: "600", 
                      color: "#555",
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>
                      Type
                    </th>
                    <th style={{ 
                      textAlign: "left", 
                      padding: "14px 16px", 
                      fontWeight: "600", 
                      color: "#555",
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>
                      Date
                    </th>
                    <th style={{ 
                      textAlign: "left", 
                      padding: "14px 16px", 
                      fontWeight: "600", 
                      color: "#555",
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>
                      Attendees
                    </th>
                    <th style={{ 
                      textAlign: "left", 
                      padding: "14px 16px", 
                      fontWeight: "600", 
                      color: "#555",
                      fontSize: "13px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px"
                    }}>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {eventHistory.map((event) => (
                    <tr key={event.id} style={{ 
                      borderBottom: "1px solid #f0f0f0",
                      transition: "background-color 0.2s ease"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f8fafc"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <td style={{ padding: "16px", fontWeight: "500", color: "#333" }}>
                        {event.eventName}
                      </td>
                      <td style={{ padding: "16px" }}>
                        <span style={{
                          padding: "6px 12px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "600",
                          backgroundColor: event.type === "Workshop" ? "#e3f2fd" : "#f3e5f5",
                          color: event.type === "Workshop" ? "#1976d2" : "#7b1fa2"
                        }}>
                          {event.type}
                        </span>
                      </td>
                      <td style={{ padding: "16px", color: "#666" }}>
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </td>
                      <td style={{ padding: "16px", color: "#666" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ 
                            width: "8px", 
                            height: "8px", 
                            borderRadius: "50%", 
                            backgroundColor: "#4caf50" 
                          }} />
                          {event.attendees}
                        </div>
                      </td>
                      <td style={{ padding: "16px" }}>
                        <button style={{
                          padding: "6px 12px",
                          backgroundColor: "transparent",
                          border: "1px solid #ddd",
                          borderRadius: "6px",
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#555",
                          cursor: "pointer",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#f0f0f0";
                          e.currentTarget.style.borderColor = "#999";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.borderColor = "#ddd";
                        }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              marginTop: "25px",
              paddingTop: "20px",
              borderTop: "1px solid #f0f0f0"
            }}>
              <div style={{ fontSize: "13px", color: "#666" }}>
                Showing {eventHistory.length} of {eventHistory.length} events
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button style={{
                  padding: "8px 12px",
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "13px"
                }}>
                  Previous
                </button>
                <button style={{
                  padding: "8px 12px",
                  backgroundColor: "#2196f3",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "600"
                }}>
                  1
                </button>
                <button style={{
                  padding: "8px 12px",
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "13px"
                }}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "350px", padding: "20px" }}>
        <UserProfile />
        <TeamsProgress />
      </div>
    </div>
  )
}