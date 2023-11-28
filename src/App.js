import './App.css'
import { useState, useEffect } from 'react'
import ListBlock from './components/ListBlock'
import Navbar from './components/Navbar'
import BubbleSort from './algorithms/BubbleSort'
import SelectionSort from './algorithms/SelectionSort'
import MergeSort from './algorithms/BubbleSort'
import QuickSort from './algorithms/QuickSort'
import InsertionSort from './algorithms/InsertionSort'

function App() {
  const [algo, setAlgo] = useState('bubbleSort')
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
    console.log(randomArray)
    setBlocks(randomArray)
  }

  useEffect(() => {
    generateRandomArray()
  }, [len])

  const handleSort = () => {
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

    algo === 'bubbleSort'
      ? sortAccOrder(BubbleSort(blocks))
      : algo === 'insertionSort'
      ? sortAccOrder(InsertionSort(blocks))
      : algo === 'selectionSort'
      ? sortAccOrder(SelectionSort(blocks))
      : algo === 'mergeSort'
      ? sortAccOrder(MergeSort(blocks))
      : algo === 'quickSort'
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
        setAlgo={setAlgo}
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
