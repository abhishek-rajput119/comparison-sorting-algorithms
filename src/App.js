import './App.css';
import ListBlock from './components/ListBlock';
import {useState,useEffect} from 'react';

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

  const generateRandomArray = (length) => {
    setCompleted(false)
    setSorting(false)
    setSortedIndex([])

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const randomArray = Array.from(
      { length },
      () => getRandomInt(1,20)
    )
    console.log(randomArray)
    setBlocks(randomArray)
  }
  
  useEffect(() => {
    generateRandomArray(len)
  }, [len, algo])
  
  
  return (
    <ListBlock blocks={blocks}/>
  );
}

export default App;
