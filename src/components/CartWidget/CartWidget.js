import { useContext } from "react"
import img from "./img/img3.png"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


function CartWidget (){

    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart' >
        <img className="carrito" src={img} alt="foto Carrito" />
        <div>{totalQuantity}</div>
        
        </Link>
    )
}
export default CartWidget