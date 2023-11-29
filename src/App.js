import './App.css'
import { useState, useEffect } from 'react'
import ListBlock from './components/ListBlock'
import Navbar from './components/Navbar'
import BubbleSort from './algorithms/BubbleSort'
import SelectionSort from './algorithms/SelectionSort'
import MergeSort from './algorithms/MergeSort'
import QuickSort from './algorithms/QuickSort'
import InsertionSort from './algorithms/InsertionSort'
import ShellSort from './algorithms/ShellSort'
import Heading from './components/Heading'
import Footer from './components/Footer'

function App() {
  const [blocks, setBlocks] = useState([])
  const [sorting, setSorting] = useState(false)
  const [speed, setSpeed] = useState(150)
  const [compare, setCompare] = useState([])
  const [swap, setSwap] = useState([])
  const [sortedIndex, setSortedIndex] = useState([])
  const [size, setSize] = useState(1)

  const generateRandomArray = () => {
    setSorting(false)
    setSortedIndex([])

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const randomArray = Array.from({ length: 20 }, () => getRandomInt(1, 20))
    setBlocks(randomArray)
  }
  function changeSize(){
    setSize((prevState) =>
      prevState > 0.1 ? setSize(prevState - 0.1) : setSize(prevState)
    )
    
  }
  useEffect(() => {
    generateRandomArray()
  }, [])

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
          }
        }, 500-speed)
      })(0)
    }
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
      : selectedAlgorithm === 'shellSort'
      ? sortAccOrder(ShellSort(blocks))
      : (() => {
          setSorting(false)
        })()
  }
  return (
    <>
      <Heading />
      <Navbar
        generateRandomArray={generateRandomArray}
        handleSort={handleSort}
        sorting={sorting}
        changeSize = {changeSize}
      />
      <ListBlock
        blocks={blocks}
        compare={sorting && compare}
        swap={sorting && swap}
        sorted={sortedIndex}
        size = {size}
      />
      <Footer setSpeed={setSpeed} sorting={sorting} initialSpeed = {speed}/>
    </>
  )
}

export default App
