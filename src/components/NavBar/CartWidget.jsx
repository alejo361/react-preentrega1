//import { BsCart } from "react-icons/bs";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <span className="cartwidget">
      <ion-icon name="cart" className="bg-gray"></ion-icon>{ totalQuantity()}
    </span>

  )
}

export default CartWidget