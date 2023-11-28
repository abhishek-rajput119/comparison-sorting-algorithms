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
              setAlgo('insertionSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Insertion Sort
          </button>
          <button
            onClick={() => {
              setAlgo('selectionSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Selection Sort
          </button>
          <button
            onClick={() => {
              setAlgo('quickSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Quick Sort
          </button>
          <button
            onClick={() => {
              setAlgo('mergeSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Merge Sort
          </button>
          <button
            onClick={() => {
              setAlgo('shellSort')
              handleSort()
            }}
            disabled={sorting}
          >
            Shell Sort
          </button>
          <button
            onClick={null}
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
