import '../css/listBlock.css'
const ListBlock = ({ blocks, compare, sorted, swap , size}) => {
  const width= 20
  const color = 'black'
  return (
    <div className="listBlocks">
      {blocks.map((block, i) => {
        const height = block * 19  + 20

        let bg = '#9EADE5'

        if (compare && (i === compare[0] || i === compare[1])) {
          bg = '#ffff50' //Light yellow.
        }

        if (swap && (i === swap[0] || i === swap[1])) {
          bg = 'red'
        }
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
            <div className="value-block">{block}</div>
          </div>
        )
      })}
    </div>
  )
}
export default ListBlock