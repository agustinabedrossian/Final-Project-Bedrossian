import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
});
  
export function CartProvider({children}) {
    
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const addCartItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])
            setTotalQuantity(totalQuantity + quantity)
            setTotalAmount(totalAmount + (item.price * quantity))
        }
        else
            console.log("El producto ya fue agregado");
    }

    const clearCart = () => {
        setCart([])
        setTotalQuantity(0)
        setTotalAmount(0)
    }

    const isInCart = (itemId) => {
        return cart.some((cartItem) => cartItem.id === itemId)
    }

    
    return <CartContext.Provider value={{cart, addCartItem, clearCart, totalQuantity, totalAmount}}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;