import { useCartContext } from "../../../context/CartContext";

const CartItem = ({ item }) => {
    const { removeFromCart } = useCartContext();
    
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className='row'>

                    <img src={item.pictureUrl} className='col-1'/>
                    <h2 className='my-auto col-3'>{item.title}</h2>
                    <h5 className='my-auto col-2'>Precio: ${item.price}</h5>
                    <h5 className='my-auto col-3'>Cantidad: {item.quantity}</h5>
                    <button className='my-auto col-1' onClick={()=>removeFromCart(item)}>x</button>

                    </div>

                </div>
            </div>
        </div>
    )
};
export default CartItem;
