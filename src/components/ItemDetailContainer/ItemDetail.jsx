import ItemCount from '../ItemCount/ItemCount'
import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ product, addProduct, cargando , hideItemCount}) => {
    
    return (
        <div className="itemdetalcontainer container">
            <h1 className='m-4 text-center'>{product.name} {cargando}</h1>
            <div className="row m-4 ">
                <div className="col-12 col-sm-12 col-md-6 col-xs-12">
                    <img className="img-fluid" src={product.image} />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-xs-12 justify-content-middle mt-3">
                    <p className=''> {product.description}</p>
                    <p>Categorias <Link to={"/category/" + product.category} className='label'><span className="badge bg-secondary">{product.category}</span></Link></p>
                    <p>Unidades disponibles: {product.stock}</p>
                    <p className='fs-2 text'>Precio: ${product.price}</p>
                    <div className="input-group w-50">
                        {
                            hideItemCount === true ? (
                                <Link to="/cart" className="btn btn btn-dark flat btn-comprar rounded-0 m-2">Terminar compra</Link>
                            ):(
                                <ItemCount stock={product.stock} addProduct={addProduct}/>    
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail