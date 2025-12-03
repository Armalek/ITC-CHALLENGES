"use client"
import "../styles/ReportsTable.css"

const ReportsTable = () => {
  const reports = [
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Not Found",
      date: "Oct 22,2025",
      report: "Not Found",
      actions: ["Request Revision"],
    },
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Submitted",
      date: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Late",
      date: "Oct 22,2025",
      report: "Not Found",
      actions: ["Send Reminder"],
    },
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Submitted",
      date: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Submitted",
      date: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Submitted",
      date: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Late",
      date: "Oct 22,2025",
      report: "Not Found",
      actions: ["Send Reminder"],
    },
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Submitted",
      date: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Submitted",
      date: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Submitted",
      date: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Submitted",
      date: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
    {
      title: "Report Title",
      submittedBy: "Username",
      status: "Submitted",
      date: "Oct 22,2025",
      report: "Report.Pdf",
      actions: ["Approve", "Request Revision"],
    },
  ]

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Submitted":
        return "status-submitted"
      case "Late":
        return "status-late"
      case "Not Found":
        return "status-not-found"
      default:
        return ""
    }
  }

  return (
    <div className="reports-table-container">
      <table className="reports-table">
        <thead>
          <tr>
            <th>Report Title</th>
            <th>Submitted By</th>
            <th>Status</th>
            <th>Submission Date</th>
            <th>Report</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, idx) => (
            <tr key={idx}>
              <td>{report.title}</td>
              <td>{report.submittedBy}</td>
              <td>
                <span className={`status-badge ${getStatusBadgeClass(report.status)}`}>{report.status}</span>
              </td>
              <td>{report.date}</td>
              <td>{report.report}</td>
              <td className="actions-cell">
                {report.actions.map((action, i) => (
                  <button key={i} className={`action-btn ${action.toLowerCase().replace(" ", "-")}`}>
                    {action}
                  </button>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ReportsTable
