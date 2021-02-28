// import { useContext } from "react";
import { Link } from "react-router-dom";
import { /* CartContext, */ useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";


const Cart = () => {
    const { cart } = useCartContext();
    return (
        <>
            <h1>Soy El Carrito</h1>
            {
                cart.length ?
                    cart.map((item) => <span key={item.id}> <CartItem item={item} /> </span>)
                    : <h1>Carrito Vacio <Link to='/'><button>Ir a Comprar</button></Link></h1>
            }

        </>
    )
}
export default Cart;