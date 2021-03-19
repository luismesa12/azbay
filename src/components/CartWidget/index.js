import { useCartContext } from "../../context/CartContext";
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const CartWidget = () => {
    const { cart } = useCartContext();

    const tempCart = [...cart];
    const accum = tempCart.reduce(totalQ, 0)

    function totalQ(acc, i) {
        return acc += i.quantity
    }
    return (
        <div >
            <Badge badgeContent={accum} color="secondary">
                <ShoppingCartOutlinedIcon color="primary"/>
            </Badge>
        </div>
    )
}

export default CartWidget;