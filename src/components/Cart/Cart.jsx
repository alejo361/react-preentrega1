import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const Cart = () => {
    const { cart, totalPrice, deleteProductInCart, clearCart } = useContext(CartContext)

    //Early return --> rendering
    if (cart.length === 0) {
        return (
            <div className="card w-75 mx-auto m-3 bg-dark m-5 p-5">
                <div className="card-body text-center">
                    <h5 className="card-title text-light ">UPS! Carrito vacio. </h5>
                    <Link to="/" className='text-center btn btn-success'>Mira nuestros productos</Link>
                </div>
            </div>
        )
    }

    return (

        <div className="card w-75 mx-auto m-3 bg-dark">
            <div className="card-body">
                <h5 className="card-title text-light">Detalle de su pedido</h5>
                <div className='table-responsive'>
                    <table className="table table-dark table-hover table-borderless">
                        <thead>
                            <tr className='text-end'>
                                <th colSpan={2}>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th >Subtotal</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((productCart) => (
                                    <tr key={productCart.id} className='text-end'>
                                        <td className=''><img className="img-responsive mx-auto d-block" src={productCart.image} width={40} /></td>
                                        <td>{productCart.name}</td>
                                        <td>${productCart.price}</td>
                                        <td>{productCart.quantity}</td>
                                        <td className='text-end'>${(productCart.price * productCart.quantity).toFixed(2)}</td>
                                        <td><button className="btn btn-outline-danger" onClick={() => (deleteProductInCart(productCart.id))}>X</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr className='text-end'>
                                <td colSpan="5" className='text-end'>Total ${totalPrice().toFixed(2)}</td>
                                <td><Link to="/checkout" className="btn btn-success">Finalizar compra</Link> <button onClick={clearCart} className="btn btn-outline-danger">Vaciar carrito</button></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart