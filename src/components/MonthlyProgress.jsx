"use client"
import "/src/styles/MonthlyProgress.css"

const MonthlyProgress = () => {
  return (
    <div className="monthly-progress">
      <h3>Monthly Progress</h3>
      <div className="chart-bars">
        <div className="bar-item">
          <div className="bar" style={{ height: "80%" }}></div>
          <span>Week 1</span>
        </div>
        <div className="bar-item">
          <div className="bar" style={{ height: "60%" }}></div>
          <span>Week 2</span>
        </div>
        <div className="bar-item">
          <div className="bar" style={{ height: "70%" }}></div>
          <span>Week 3</span>
        </div>
        <div className="bar-item">
          <div className="bar" style={{ height: "30%" }}></div>
          <span>Week 4</span>
        </div>
      </div>
    </div>
  )
}

export default MonthlyProgress
