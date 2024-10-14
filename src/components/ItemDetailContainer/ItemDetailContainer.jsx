import { useState, useEffect } from 'react'
import { getProduct } from '../../data/data'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import React from 'react'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { idProduct } = useParams();

  useEffect(() => {
    getProduct(idProduct)
      .then((data) => setProduct(data))
  }, [])

  return (
      <ItemDetail product={product} />
    )
}

export default ItemDetailContainer