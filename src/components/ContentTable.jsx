"use client"
import "../styles/ContentTable.css"

const ContentTable = () => {
  const contentData = [
    {
      id: 1,
      title: "Content Title",
      submittedBy: "Username",
      status: "pending",
      submissionDate: "Oct 22,2025",
      report: "Not Found",
      actions: ["Send Reminder"],
    },
    {
      id: 2,
      title: "Content Title",
      submittedBy: "Username",
      status: "Submitted",
      submissionDate: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      id: 3,
      title: "Content Title",
      submittedBy: "Username",
      status: "late",
      submissionDate: "Oct 22,2025",
      report: "Not Found",
      actions: ["Send Reminder"],
    },
    {
      id: 4,
      title: "Content Title",
      submittedBy: "Username",
      status: "Submitted",
      submissionDate: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      id: 5,
      title: "Content Title",
      submittedBy: "Username",
      status: "Submitted",
      submissionDate: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      id: 6,
      title: "Content Title",
      submittedBy: "Username",
      status: "Submitted",
      submissionDate: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      id: 7,
      title: "Content Title",
      submittedBy: "Username",
      status: "late",
      submissionDate: "Oct 22,2025",
      report: "Not Found",
      actions: ["Send Reminder"],
    },
    {
      id: 8,
      title: "Content Title",
      submittedBy: "Username",
      status: "Submitted",
      submissionDate: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      id: 9,
      title: "Content Title",
      submittedBy: "Username",
      status: "Submitted",
      submissionDate: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      id: 10,
      title: "Content Title",
      submittedBy: "Username",
      status: "Submitted",
      submissionDate: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      id: 11,
      title: "Content Title",
      submittedBy: "Username",
      status: "Submitted",
      submissionDate: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      id: 12,
      title: "Content Title",
      submittedBy: "Username",
      status: "Submitted",
      submissionDate: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
  ]

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "submitted":
        return "#10b981"
      case "pending":
        return "#f59e0b"
      case "late":
        return "#ef4444"
      default:
        return "#6b7280"
    }
  }

  return (
    <div className="content-table-container">
      <div className="content-filters">
        <button className="filter-tab active">All</button>
        <button className="filter-tab">Status</button>
        <button className="filter-tab">Content Type</button>
      </div>

      <table className="content-table">
        <thead>
          <tr>
            <th>Content Type</th>
            <th>Submitted By</th>
            <th>Status</th>
            <th>Submission Date</th>
            <th>Report</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contentData.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.submittedBy}</td>
              <td>
                <span
                  className="status-badge"
                  style={{
                    color: getStatusColor(item.status),
                    borderColor: getStatusColor(item.status),
                    backgroundColor: `${getStatusColor(item.status)}20`,
                  }}
                >
                  ● {item.status}
                </span>
              </td>
              <td>{item.submissionDate}</td>
              <td>
                <a href="#" className="report-link">
                  {item.report === "Not Found" ? "Not Found" : "📄 " + item.report}
                </a>
              </td>
              <td>
                <div className="actions-cell">
                  {item.actions.map((action, idx) => (
                    <button
                      key={idx}
                      className={`action-btn ${action.toLowerCase().includes("approve") ? "approve" : "revision"}`}
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ContentTable
