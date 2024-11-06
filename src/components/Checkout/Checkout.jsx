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

    const [errors, setErrors] = useState({});

    const [orderId, setOrderId] = useState(null)

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const validateForm = () => {
        const newErrors = {};

        // Validar fullname (no vacío)
        if (!dataForm.fullname.trim()) {
            newErrors.fullname = 'El nombre completo es obligatorio';
        }

        // Validar teléfono (puedes usar una expresión regular simple)
        const phoneRegex = /^[0-9]{10}$/;
        if (!dataForm.phone || !phoneRegex.test(dataForm.phone)) {
            newErrors.phone = 'El número de teléfono debe tener 10 dígitos';
        }

        // Validar email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!dataForm.email || !emailRegex.test(dataForm.email)) {
            newErrors.email = 'Por favor, ingresa un correo electrónico válido';
        }

        // Validar repeatEmail
        if (dataForm.repeatEmail !== dataForm.email || !dataForm.repeatEmail) {
            newErrors.repeatEmail = 'Los correos electrónicos no coinciden';
        }

        return newErrors;
    };

    const handleSubmitForm = (event) => {
        event.preventDefault()
        let error = false;
        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            date: Timestamp.now().toDate(),
            total: totalPrice(),
        }

        //Verifico que hayan productos en el carrito.
        if (!order.products || order.products.length === 0) {
            toast.error("No se puede generar una orden sin productos en el carrito")
            error = true;
        }
        
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0 && !error) {
            uploadOrder(order)
        } else {
            // Si hay errores, se actualizan los mensajes de error en el estado
            setErrors(validationErrors);
        }

    }
    //Subir orden a firestore
    const uploadOrder = (newOrder) => {
        const orderCollection = collection(db, "orders")

        addDoc(orderCollection, newOrder)
            .then((response) => {
                setOrderId(response.id)
            })
            .finally(() => {
                toast.success("Su pedido fué confirmado")
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
                    ) : (
                        <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} errors={errors} />
                    )
                }
            </div>
        </div>
    )
}

export default Checkout