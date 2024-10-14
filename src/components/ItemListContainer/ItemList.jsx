import React from 'react'
import Item from './Item'
const ItemList = ( {products} ) => {
    return (
        <section className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3  g-3 m-4" id="productos-grid">
            {
                products.map((product) => (
                    <Item product={product} key={product.id} />
                ))
            }
        </section>
    )
}
export default ItemList