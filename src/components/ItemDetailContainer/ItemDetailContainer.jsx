import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import React from 'react'
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js";
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct } = useParams();
  const { addProductInCart } = useContext(CartContext)
  const [hideItemCount, setHideItemCount] = useState(false)
  const navigate = useNavigate();

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }
    addProductInCart(productCart)
    setHideItemCount(true) 
  }

  const getProduct = () => {
    const docRef = doc(db, "products", idProduct)
    getDoc(docRef)
      .then((dataDb) => {
        if (dataDb.exists()) {
          // Si el producto existe, se guarda en el estado
          const productDb = { id: dataDb.id, ...dataDb.data() }
          setProduct(productDb)
        } else {
          // Si el producto no existe, redirigimos a la página principal
          toast.error("No se encontró el producto.")
          navigate('/'); 
        }
      })
      .catch((error) => {
        toast.error("Ocurrio un error, vuelva a intertarlo mas tarde.")
        navigate('/'); 
      });
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <ItemDetail product={product} addProduct={addProduct} hideItemCount={hideItemCount} />
  )
}

export default ItemDetailContainer