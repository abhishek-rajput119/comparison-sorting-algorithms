import './App.css'
import ListBlock from './components/ListBlock'
import { useState, useEffect } from 'react'
import BubbleSort from './algorithms/BubbleSort'
import Navbar from './components/Navbar'
function App() {
  const [algo, setAlgo] = useState('bubbleSort')
  const [len, setLength] = useState(30)
  const [blocks, setBlocks] = useState([])
  const [sorting, setSorting] = useState(false)
  const [completed, setCompleted] = useState(true)
  const [speed, setSpeed] = useState(250)
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
    const randomArray = Array.from({ length:len }, () => getRandomInt(1, 20))
    console.log(randomArray)
    setBlocks(randomArray)
  }

  useEffect(() => {
    generateRandomArray()
  }, [len, algo])

  const handleSort = () => {
    const sortAccOrder = (order) => {
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

    setSorting(true)

    // algo === 'bubbleSort'
    //   ? sortAccOrder(bubbleSort(blocks))
    //   : algo === 'insertionSort'
    //   ? sortAccOrder(insertionSort(blocks))
    //   : algo === 'selectionSort'
    //   ? sortAccOrder(selectionSort(blocks))
    //   : algo === 'mergeSort'
    //   ? sortAccOrder(mergeSort(blocks))
    //   : algo === 'quickSort'
    //   ? sortAccOrder(quickSort(blocks))
    //   : (() => {
    //       setSorting(false)
    //       setCompleted(true)
    //     })()
    algo === 'bubbleSort'
      ? sortAccOrder(BubbleSort(blocks))
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
