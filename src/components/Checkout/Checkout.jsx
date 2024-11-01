import React from "react"
import { useState } from "react"
import FormCheckout from "./FormCheckout"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection } from "firebase/firestore"
import db from "../../db/db"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
        repeatEmail: ""
    })

    const [orderId, setOrderId] = useState(null)

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()

        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            date: Timestamp.now().toDate(),
            total: totalPrice(),

        }
        if(dataForm.email === dataForm.repeatEmail){
            uploadOrder(order)
        }else{
            toast.error("Los emails ingresados con coinciden.")
        }
        
    }
    //subir orden a firestore
    const uploadOrder = (newOrder) => {
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection,newOrder)
        .then((response)=>{
            setOrderId(response.id)
        })
        .finally(()=>{
            toast.success("Pedido confirmado")
            clearCart()
        })
    }

    return (
        <div className="card m-4 w-80 col-xl-4 mx-auto bg-dark text-light">
            <div className="card-body">
            {
                orderId ? (
                    <div className="text-center">
                        <h2>Orden enviada</h2>
                        <h4>Guarde su número de orden: </h4>
                        <h2><span className="badge text-bg-secondary">{orderId} </span></h2>
                        <Link to="/" className="btn btn-success">Volver a HOME </Link>
                    </div>
                ): (
                    <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
                )
            }
            </div>
        </div>
    )
}

export default Checkout