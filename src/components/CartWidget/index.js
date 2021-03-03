
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { cart } = useCartContext();

    const tempCart = [...cart];
    const accum = tempCart.reduce(totalQ, 0)

    function totalQ(acc, i) {
        return acc += i.quantity
    }
    return (
        <>
            <img src="../../img/carrito-de-compras.svg" width="40" alt="carrito" />
            <span class="badge badge-light">{accum || null}</span>
        </>
    )
}

export default CartWidget;