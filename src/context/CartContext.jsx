import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]) //inicializa array vacio de productos

    //add prod to cart
    const addProductInCart = (newProduct) => {
        //setCart([newProduct]) //solo pisa
        setCart([...cart, newProduct])

    }

    //console.log(cart)
    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
        return quantity
    }

    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }