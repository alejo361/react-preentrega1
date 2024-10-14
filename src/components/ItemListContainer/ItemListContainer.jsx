import { useState, useEffect } from 'react';
import React from 'react'
import { getProducts } from '../../data/data';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import "./itemlistcontainer.css";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        getProducts()
            .then((dataProducts) => {
                if (idCategory) {
                    const productFilter = dataProducts.filter((product) => product.category === idCategory);
                    setProducts(productFilter);
                } else {
                    setProducts(dataProducts);
                }
                
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                //console.log("Finalizo la promesa");
            })
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