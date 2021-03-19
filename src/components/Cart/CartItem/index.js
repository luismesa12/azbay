import { useEffect, useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import Counter from "../../ItemCount/Counter";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import IconButton from '@material-ui/core/IconButton'

const CartItem = ({ item }) => {
    const { removeFromCart, editQuantityCart } = useCartContext();
    const [count, setCount] = useState(item.quantity)
    
    useEffect(() => {
        editQuantityCart(item, count)
    }, [count]);
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <img src={item.pictureUrl} className='col-1' />
                        <h2 className='my-auto col'>{item.title}</h2>
                        <h5 className='my-auto col'>Precio: ${item.price}</h5>
                        <h5 className='my-auto col'>Cantidad: <span><Counter count={count} max={12} setCount={setCount}/></span></h5> 
                        <h5 className='my-auto col'>Total: ${item.price * item.quantity}</h5>
                        <IconButton aria-label="remove" onClick={() => removeFromCart(item)}>
                          <DeleteForeverOutlinedIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CartItem;
