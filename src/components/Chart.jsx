"use client"
import "../styles/Chart.css"

const Chart = () => {
  return (
    <div className="chart-section">
      <h3 className="chart-title">Points Earned By Each Team This Month</h3>
      <div className="chart-container">
        <svg viewBox="0 0 800 250" className="chart-svg">
          {/* Background area */}
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#FFF9E6", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#FFFBF0", stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Chart line and area */}
          <path
            d="M 50 180 L 100 160 L 150 140 L 200 145 L 250 155 L 300 150 L 350 130 L 400 135 L 450 120 L 500 125 L 550 100 L 600 95 L 650 90 L 700 85 L 750 80"
            fill="none"
            stroke="#FDB913"
            strokeWidth="3"
          />

          {/* Area fill */}
          <path
            d="M 50 180 L 100 160 L 150 140 L 200 145 L 250 155 L 300 150 L 350 130 L 400 135 L 450 120 L 500 125 L 550 100 L 600 95 L 650 90 L 700 85 L 750 80 L 750 250 L 50 250 Z"
            fill="url(#areaGradient)"
          />

          {/* Data points */}
          {[50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750].map((x, i) => (
            <circle key={i} cx={x} cy={180 - i * 10} r="6" fill="#FDB913" />
          ))}

          {/* X-axis labels */}
          <text x="50" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 1
          </text>
          <text x="100" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 2
          </text>
          <text x="150" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 3
          </text>
          <text x="200" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 4
          </text>
          <text x="250" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 5
          </text>
          <text x="300" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 6
          </text>
          <text x="350" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 7
          </text>
          <text x="400" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 8
          </text>
          <text x="450" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 9
          </text>
          <text x="500" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 10
          </text>
          <text x="550" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 11
          </text>
          <text x="600" y="240" textAnchor="middle" fontSize="12" fill="#999">
            Team 12
          </text>
        </svg>
      </div>
    </div>
  )
}

export default Chart
