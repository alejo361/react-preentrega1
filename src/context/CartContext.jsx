import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    //Agrega un producto al carrito, si ya existe, aumenta cantidad del mimso
    const addProductInCart = (newProduct) => {
        if (isInCart(newProduct.id)) {
            let newCart = [...cart]
            newCart.forEach((productCart) => {
                if (newProduct.id === productCart.id) {
                    const newQuantity = productCart.quantity + newProduct.quantity
                    if (newQuantity > productCart.stock) {
                        alert("ya compraste todo") //reemplazar por toasty
                        return productCart
                    } else {
                        productCart.quantity = productCart.quantity + newProduct.quantity
                        return { ...productCart, quantity: newQuantity }
                    }
                }else{
                    return productCart
                }
                
            })
            setCart(newCart)
        } else {
            setCart([...cart, newProduct])
        }
    }
    //Calcula la cantidad total de productos en carrtio.
    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0)
        return quantity
    }
    //Calcula el precio total de la compra
    const totalPrice = () => {
        const totprice = cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0)
        return totprice
    }
    //Quita un producto del carrito
    const deleteProductInCart = (idProduct) => {
        const productsFilter = cart.filter((productCart) => productCart.id !== idProduct)
        setCart(productsFilter)
    }
    //Comprueba si un producto ya esta en el carrito.
    const isInCart = (idProduct) => {
        const existe = cart.some((productCart) => productCart.id == idProduct)
        return existe
    }
    //Vacia carrito
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