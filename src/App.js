import './App.css'
import { useState, useEffect } from 'react'
import ListBlock from './components/ListBlock'
import Navbar from './components/Navbar'
import BubbleSort from './algorithms/BubbleSort'
import SelectionSort from './algorithms/SelectionSort'
import MergeSort from './algorithms/MergeSort'
import QuickSort from './algorithms/QuickSort'
import InsertionSort from './algorithms/InsertionSort'

function App() {
  const [len, setLength] = useState(20)
  const [blocks, setBlocks] = useState([])
  const [sorting, setSorting] = useState(false)
  const [completed, setCompleted] = useState(true)
  const [speed, setSpeed] = useState(100)
  const [compare, setCompare] = useState([])
  const [swap, setSwap] = useState([])
  const [sortedIndex, setSortedIndex] = useState([])

  const generateRandomArray = () => {
    setCompleted(false)
    setSorting(false)
    setSortedIndex([])

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const randomArray = Array.from({ length: len }, () => getRandomInt(1, 20))
    setBlocks(randomArray)
  }

  useEffect(() => {
    generateRandomArray()
  }, [len])

  const handleSort = (selectedAlgorithm) => {
    const sortAccOrder = (order) => {
      setSorting(true)
      setSortedIndex([])
      ;(function loop(i) {
        setTimeout(function () {
          const [j, k, arr, index] = order[i]
          setCompare([j, k])
          setSwap([])

          if (index !== null) {
            setSortedIndex((prevState) => [...prevState, index])
          }

          if (arr) {
            setBlocks(arr)
            if (j !== null || k != null) setSwap([j, k])
          }

          if (++i < order.length) {
            loop(i)
          } else {
            setSorting(false)
            setCompleted(true)
          }
        }, speed)
      })(0)
    }
    console.log(selectedAlgorithm)
    selectedAlgorithm === 'bubbleSort'
      ? sortAccOrder(BubbleSort(blocks))
      : selectedAlgorithm === 'insertionSort'
      ? sortAccOrder(InsertionSort(blocks))
      : selectedAlgorithm === 'selectionSort'
      ? sortAccOrder(SelectionSort(blocks))
      : selectedAlgorithm === 'mergeSort'
      ? sortAccOrder(MergeSort(blocks))
      : selectedAlgorithm === 'quickSort'
      ? sortAccOrder(QuickSort(blocks))
      : (() => {
          setSorting(false)
          setCompleted(true)
        })()
  }
  return (
    <>
      <Navbar
        generateRandomArray={generateRandomArray}
        handleSort={handleSort}
        sorting={sorting}
      />
      <ListBlock
        blocks={blocks}
        compare={sorting && compare}
        swap={sorting && swap}
        sorted={sortedIndex}
      />
    </>
  )
}

export default App
