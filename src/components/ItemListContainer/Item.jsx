import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({ product }) => {
    return (
        <Link to={"/detail/" + product.id} className='btn flat btn-comprar rounded-0' >
            <div className="col">
                <div className="card card-producto h-100 rounded-0">
                    <img src={product.image} className="card-img-top" alt="imagen de muestra" />
                    <div className="card-body">
                        <h5 className="card-title" id="nombreProd">{product.name}</h5>
                        <p>Unidades en stock: <span id="stockProd">{product.stock}</span></p>
                    </div>
                    <div className="card-footer rounded-0">
                        <span className="text-body-secondary " id="precioProd">Precio ${product.price}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item