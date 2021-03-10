import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);



export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    function addToCart(item) {
        if (cart.length !== 0) {
            if (indexInCart(item) >= 0) {
                let tempCart = [...cart]
                tempCart[indexInCart(item)].quantity += item.quantity;
                setCart(tempCart)
            }
            else {
                setCart([...cart, item])
            }
        }
        else {
            setCart([item])
        }
    };
    function removeFromCart(item) {
        let tempCart = [...cart]
        tempCart.splice(indexInCart(item),1);
        setCart(tempCart);
    };
    function clearCart() {
        setCart([]);
    };
    const indexInCart = item => cart.findIndex(i => i.id === item.id);


    return (
        <CartContext.Provider value={{ cart, clearCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
};

