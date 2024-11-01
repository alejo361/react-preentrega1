import React from 'react'
import { useState } from 'react'

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleClickDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1) //checkear stock para validar
        }
    }

    return (
        <div>
            <button onClick={handleClickDecrement} className='btn btn btn-dark flat btn-comprar rounded-0'>-</button>
            <span className='center m-2'>{count} </span>
            <button onClick={handleClickIncrement} className='btn btn btn-dark flat btn-comprar rounded-0 '>+</button>
            <button onClick={() => addProduct(count)} className='btn btn btn-dark flat btn-comprar rounded-0 m-2'>Agregar producto</button>
        </div>
    )
}

export default ItemCount