// Navbar.js

import React from 'react'
import '../css/navbar.css'
const Navbar = ({ generateRandomArray, handleSort, sorting }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="buttons">
          <button onClick={generateRandomArray} disabled={sorting}>
            Randomize Array
          </button>
          <button onClick={() => handleSort('bubbleSort')} disabled={sorting}>
            Bubble Sort
          </button>
          <button
            onClick={() => handleSort('insertionSort')}
            disabled={sorting}
          >
            Insertion Sort
          </button>
          <button
            onClick={() => handleSort('selectionSort')}
            disabled={sorting}
          >
            Selection Sort
          </button>
          <button onClick={() => handleSort('quickSort')} disabled={sorting}>
            Quick Sort
          </button>
          <button onClick={() => handleSort('mergeSort')} disabled={sorting}>
            Merge Sort
          </button>
          <button onClick={() => handleSort('shellSort')} disabled={sorting}>
            Shell Sort
          </button>
          <button onClick={null} disabled={sorting}>
            Change Size
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
