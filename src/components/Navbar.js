// Navbar.js

import React from 'react'
import '../css/navbar.css'
const Navbar = ({ generateRandomArray, handleSort, setAlgo, sorting }) => {
  return (
    <nav>
      <div className="navbar">
        <h1>Sorting Visualizer</h1>
        <div className="buttons">
          <button onClick={generateRandomArray} disabled={sorting}>
            Randomize Array
          </button>
          <button
            onClick={() => {
              setAlgo('bubbleSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Bubble Sort
          </button>
          <button
            onClick={() => {
              setAlgo('bubbleSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Insertion Sort
          </button>
          <button
            onClick={() => {
              setAlgo('bubbleSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Selection Sort
          </button>
          <button
            onClick={() => {
              setAlgo('bubbleSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Quick Sort
          </button>
          <button
            onClick={() => {
              setAlgo('bubbleSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Merge Sort
          </button>
          <button
            onClick={() => {
              setAlgo('bubbleSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Shell Sort
          </button>
          <button
            onClick={() => {
              setAlgo('bubbleSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Change Size
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
