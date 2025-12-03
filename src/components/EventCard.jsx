"use client"
import "../styles/EventCard.css"

const EventCard = ({ event }) => {
  const getCardType = (type) => {
    if (type === "challenges") return "challenges"
    if (type === "workshops") return "workshops"
    return "workshops"
  }

  return (
    <div className={`event-card event-card-${getCardType(event.type)}`}>
      <div className="event-card-header">
        <h3>{event.title}</h3>
      </div>
      <div className="event-card-info">
        <div className="event-info-item">
          <span className="icon">📅</span>
          <span>{event.date}</span>
        </div>
        <div className="event-info-item">
          <span className="icon">📍</span>
          <span>{event.location}</span>
        </div>
      </div>
      <button className="details-btn">⊕ Details</button>
    </div>
  )
}

export default EventCard
