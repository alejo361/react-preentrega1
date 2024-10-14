import React from 'react'
import { Link } from 'react-router-dom'
const ItemDetail = ({ product, cargando }) => {
    
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
                        <select className="form-select rounded-0 w-10 " id="inputGroupSelect04" aria-label="Example select with button addon">
                            <option value={1} defaultValue={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                        <button className="btn btn btn-dark flat btn-comprar rounded-0" type="button">Comprar Ahora</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemDetail