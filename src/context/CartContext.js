import { createContext, useState } from "react";
// import { act } from "react-dom/test-utils";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isinCart(item.id)) {
            setCart(prev => [...prev, { ...item, quantity }])
        } else {
            console.log("ya esta añadido al carrito")
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {

        setCart([])
    }


    const isinCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = cart.reduce((acc, p) => {
        return acc + (p.price * p.quantity);
    }, 0);

    const totalQuantity = cart.length;


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
