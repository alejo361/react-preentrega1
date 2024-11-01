import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  const total = totalQuantity()

  return (
    <Link to="/cart" className="nav-link " aria-current="page">
      <span className="badge text-bg-secondary">
        <span className="cartwidget">
          <ion-icon name={total >= 1 ? "cart" : "cart-outline"} className="bg-gray" size="small"></ion-icon>{total >= 1 && total}
        </span>
      </span>
    </Link>
  )
}


export default CartWidget