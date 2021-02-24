import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);



export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        if (cart.length !== 0) {
            if (indexInCart(item) >= 0) {
                cart[indexInCart(item)].quantity += item.quantity;
                setCart(cart)
            }
            else {
                setCart([...cart, item])
            }
        }
        else {
            setCart([item])
        }
    };
    function removeFromCart(itemId) {
        cart.splice(itemId,1);
        setCart(cart);
    };
    function clearCart() {
        setCart([]);
    };
    const indexInCart = item => cart.findIndex(i => i.id === item.id);


    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    )
};

