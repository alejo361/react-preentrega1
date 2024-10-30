import React from 'react'
import { useState } from 'react'
//import { useContext } from 'react'
//import { CartContext } from '../../context/CartContext'


const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)
    //const { cart, saludo } = useContext(CartContext)

    //console.log(cart)


    const handleClickDecrement = () => {
        //saludo()
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
            <button onClick={handleClickDecrement}>-</button>
            <p>{count}</p>
            <button onClick={handleClickIncrement}>+</button>
            <button onClick={() => addProduct(count)}>Agregar producto</button>
        </div>
    )
}

export default ItemCount