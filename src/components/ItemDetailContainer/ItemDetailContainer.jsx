import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import React from 'react'
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db.js";
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct } = useParams();
  const { addProductInCart } = useContext(CartContext)
  const [hideItemCount, setHideItemCount] = useState(false)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }
    addProductInCart(productCart)
    setHideItemCount(true) 
  }

  const getProduct = () => {
    const docRef = doc(db, "products", idProduct)
    getDoc(docRef)
      .then((dataDb) => {
        const productDb = { id: dataDb.id, ...dataDb.data() }
        setProduct(productDb)
      })
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <ItemDetail product={product} addProduct={addProduct} hideItemCount={hideItemCount} />
  )
}

export default ItemDetailContainer