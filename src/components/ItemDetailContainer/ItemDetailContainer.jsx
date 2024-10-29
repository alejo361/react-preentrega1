import { useState, useEffect } from 'react'
//import { getProduct } from '../../data/data'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import React from 'react'
import { doc, getDoc } from "firebase/firestore"
import db  from "../../db/db.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct } = useParams();

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
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer