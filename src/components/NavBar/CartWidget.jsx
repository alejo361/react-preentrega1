//import { BsCart } from "react-icons/bs";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" className="nav-link " aria-current="page">
      <span className="badge text-bg-secondary">
        <span className="cartwidget">
          <ion-icon name="cart" className="bg-gray"></ion-icon>{totalQuantity()}
        </span>
      </span>
    </Link>
  )
}


export default CartWidget