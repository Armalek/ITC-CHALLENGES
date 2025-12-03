"use client"
import "../styles/EventHistory.css"

const EventsHistory = ({ events }) => {
  return (
    <div className="events-history-table">
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Type</th>
            <th>Date</th>
            <th>Attendees</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.type}</td>
              <td>
                <span className="date-badge">📅 {event.date}</span>
              </td>
              <td>{event.attendees}</td>
              <td>
                <a href="#" className="view-details">
                  View Details
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EventsHistory
