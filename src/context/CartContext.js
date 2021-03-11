import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);



export const CartProvider = ({ children }) => {
    const lsCart = JSON.parse(localStorage.getItem("cart")) || [];  
    const [cart, setCart] = useState(lsCart);
    localStorage.setItem("cart", JSON.stringify(cart));

    function addToCart(item) {
        if (!item.quantity) {
            item.quantity=1
        };
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
    function editQuantityCart(item, newQuantity) {
        let tempCart = [...cart]
        tempCart[indexInCart(item)].quantity = newQuantity;
        setCart(tempCart)
    };
    function removeFromCart(item) {
        let tempCart = [...cart]
        tempCart.splice(indexInCart(item), 1);
        setCart(tempCart);
    };
    function clearCart() {
        setCart([]);
    };
    const indexInCart = item => cart.findIndex(i => i.id === item.id);


    return (
        <CartContext.Provider value={{ cart, clearCart, addToCart, removeFromCart, editQuantityCart}}>
            {children}
        </CartContext.Provider>
    )
};

