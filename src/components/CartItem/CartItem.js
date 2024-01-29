import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({name, price, id, quantity, }) => {

    const {removeItem} = useContext(CartContext)

    return (
        <div className="d-flex flex-row mb-3 justify-content-between">
            <h2 className="p-2">{name}</h2>
            <p className="p-2">cantidad: {quantity}</p>
            <p className="p-2">precio por unidad: {price}</p>
            <p className="p-2">subtotal: { price * quantity}</p>
            <button onClick={()=> removeItem(id)}>eliminar item</button>
        </div>
    )
}
export default CartItem
