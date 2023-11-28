import '../css/listBlock.css'
import { useState } from 'react'
const ListBlock = ({blocks}) => {
    console.log(blocks)
    const [width, setWidth] = useState(20)
    const color = 'black'
    return (
        <div className='listBlocks'>

            {blocks.map((block, i) => {
                const height = block * 500 / blocks.length;

                
                const style = { 
                    'height': height, 
                    'width': width
                }
                return (<div key={i} className='block' style={style}>{block}</div>)
            })}
        </div>
    );
}
export default ListBlock