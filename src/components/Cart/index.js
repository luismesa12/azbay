// import { useContext } from "react";
import { /* CartContext, */ useCartContext } from "../../context/CartContext";


const Cart = () => {
    const cartContext = useCartContext();
    console.log(cartContext);
    return (
        <>
            <h1>Soy El Carrito</h1>
        </>
    )
}
export default Cart;