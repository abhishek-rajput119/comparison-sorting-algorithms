import '../css/navbar.css'
import React from 'react'

const Navbar = ({ onBubbleSortClick }) => {
  return (
    <nav>
      <div className="navbar">
        <h1>Sorting Visualizer</h1>
        <button onClick={onBubbleSortClick}>Bubble Sort</button>
      </div>
    </nav>
  )
}

export default Navbar
