import { useState } from "react";
import "bulma/css/bulma.css"

function ItemCount ({stock, initial, onAdd}){

    const [quantity, setQuantity] = useState(initial)

    function increment (){
        if (quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    function decrement (){
        if (quantity > 0){
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
                <div className="Controls">
                    <div className="buttons">
                    <button className="button m-3 is-primary" onClick={increment}>+</button>
                                        <h2 className="Number"> {quantity}</h2>

                    <button className="button m-3 is-warning" onClick={decrement}>-</button>
                    </div>
                </div>
                <div>
                    <button className="button is-active" onClick={() => onAdd(quantity)}>
                        Agregar al carrito
                    </button>
                </div>
        </div>
    )
}

export default ItemCount;