import { useState, useEffect } from 'react';
import React from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import "./itemlistcontainer.css";
import { getProduct } from '../../data/data';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db  from "../../db/db.js";
const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    const getProducts = () => {
        const collectionName = collection(db, "products")

        getDocs(collectionName)
            .then((dataDb)=>{
                //console.log(dataDb)
                const productsDb = dataDb.docs.map((productDb)=>{
                    return { id: productDb.id, ...productDb.data() } //spread
                })
                //console.log(productsDb)
                setProducts(productsDb)
            })
    }

    const getProductsByCategory = () => {
        const collectionName = collection(db, "products")
        const q = query( collectionName, where( "category", "==", idCategory ) )

        getDocs(q)
            .then((dataDb)=>{
                const productsDb = dataDb.docs.map((productDb)=>{
                    return { id: productDb.id, ...productDb.data() } //spread
                })
                setProducts(productsDb)
            })

    }

    useEffect(() => {
        console.log(idCategory);
        if(idCategory){
            getProductsByCategory();
            console.log("Filtro por categoria")
        }else{
            getProducts()
        }
    }, [idCategory]) //parametro dinamico para volver a ejectura el useEffect con nombre cat, vacio evita bucle infinito

    return (
        <div className="itemListContainer container text-center">
            <div className="row mt-4">
                <div className="col">
                    <h1 className="text-center u"> {greeting} </h1>
                </div>
            </div>
            {
                <ItemList products={products} />
            }
        </div>
    )
}

export default ItemListContainer