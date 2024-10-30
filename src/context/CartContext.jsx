import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]) //inicializa array vacio de productos

    //add prod to cart
    const addProductInCart = (newProduct) => {
        //setCart([newProduct]) //solo pisa
        if(isInCart(newProduct.id)){

        }else{
            setCart([...cart, newProduct])
        }
        
    }

    //console.log(cart)
    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
        return quantity
    }

    const totalPrice = () => {
        const totprice = cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0)
        return totprice
    }

    const deleteProductInCart = (idProduct) => {
        const productsFilter = cart.filter((productCart) => productCart.id !== idProduct)
        setCart(productsFilter)
    }

    const isInCart = (idProduct) => {
        const existe = cart.some((productCart) => productCart.id == idProduct)
        return existe
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }