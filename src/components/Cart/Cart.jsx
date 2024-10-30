import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    const { cart, totalPrice, deleteProductInCart, clearCart } = useContext(CartContext)

    return (
        <div>
            <div className="card w-75 mx-auto m-3 bg-dark">
                <div className="card-body">
                    <h5 className="card-title text-light">Detalle de su pedido</h5>
                    <div className='table-responsive'>
                        <table className="table table-dark table-hover table-responsive table-borderless">
                            <thead>
                                <th></th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th></th>
                            </thead>
                            <tbody>
                                {
                                    cart.map((productCart) => (
                                        <tr key={productCart.id}>
                                            <td ><img className="img-responsive" src={productCart.image} width={40} /></td>
                                            <td>{productCart.name}</td>
                                            <td>${productCart.price}</td>
                                            <td>{productCart.quantity}</td>
                                            <td>${(productCart.price * productCart.quantity).toFixed(2)}</td>
                                            <td><button className="btn btn-outline-danger" onClick={() => (deleteProductInCart(productCart.id))}>Quitar</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="5">Total ${totalPrice().toFixed(2)}</td>
                                    <td><button onClick={clearCart} className="btn btn-outline-danger">Vaciar carrito</button></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart