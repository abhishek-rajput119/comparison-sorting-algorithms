import React, { useState } from 'react'
import '../css/footer.css' 

const Footer = ({ setSpeed, sorting, initialSpeed }) => {
  const [speed, setLocalSpeed] = useState(initialSpeed)

  const handleSpeedChange = (e) => {
    const newSpeed = parseInt(e.target.value, 10)
    setLocalSpeed(newSpeed)
    setSpeed(newSpeed)
  }

  return (
    <div className="footer-container">
      <div className="legend">
        <span className="yellow-legend">Legends:</span>
        <span className="swap-legend">Comparing</span>
        <span className="green-legend">Sorted</span>
        <span className="red-legend">Swapping</span>
      </div>
      <div className="speed-input">
        <label htmlFor="speed">Speed:</label>
        <input
          type="range"
          id="speed"
          name="speed"
          min="100"
          max="400"
          step="10"
          value={speed}
          onChange={handleSpeedChange}
          disabled={sorting}
        />
        <span>{speed}</span>
      </div>
    </div>
  )
}

export default Footer
