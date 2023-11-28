import '../css/listBlock.css'
import { useState } from 'react'
const ListBlock = ({ blocks, compare, sorted, swap }) => {
  const [width, setWidth] = useState(20)
  const color = 'black'
  return (
    <div className="listBlocks">
      {blocks.map((block, i) => {
        const height = (block * 500) / blocks.length

        let bg = 'turquoise'

        // i th element is being compared with some other element
        if (compare && (i === compare[0] || i === compare[1])) {
          bg = '#ffff50'  //Light yellow.
        }

        if (swap && (i === swap[0] || i === swap[1])) {
          bg = 'red'
        }
        // i th element is in its correct position
        if (sorted && sorted.includes(i)) {
          bg = '#4bc52e' //Strong lime green
        }

        const style = {
          backgroundColor: bg,
          color: color,
          height: height,
          width: width,
        }
        return (
          <div key={i} className="block" style={style}>
            {block}
          </div>
        )
      })}
    </div>
  )
}
export default ListBlock