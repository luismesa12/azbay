// import { useContext } from "react";
import { Link } from "react-router-dom";
import { /* CartContext, */ useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import Button from '@material-ui/core/Button'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import StoreIcon from '@material-ui/icons/Store';

const Cart = () => {
    const { cart } = useCartContext();
    const tempCart = [...cart];
    const accum = tempCart.reduce(totalQ, 0)

    function totalQ(acc, i) {
        return acc += i.price * i.quantity
    }
    return (
        <>
            <h1>Soy El Carrito</h1>
            {
                cart.length ?
                    <>
                        {cart.map((item) => <span key={item.id}> <CartItem item={item} /> </span>)}
                        <div className='container'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h3>
                                        Total a pagar: ${accum}
                                    </h3>
                                    <Link to='/orders'>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            startIcon={<AssignmentTurnedInIcon />}>
                                            Finalizar Compra
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                    : <h1>Carrito Vacio
                        <Link to='/items'>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<StoreIcon/>}>
                                Ir A Comprar La Mejor Calidad
                            </Button>
                        </Link></h1>
                }

        </>
    )
}
export default Cart;