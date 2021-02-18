import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../../ItemCount"

const ItemCard = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false);
    const onAdd = (count)=>{
        setGoToCart(true)
        console.log(count);
    };
    return (
        <div className="card">
            <div className="card-body">
                <img src={product.pictureUrl} />
                <h4 className="card-title">{product.title}</h4>
                <h5>{(product.price)?`$${product.price}`:""}</h5>
                {goToCart?<Link to='/carrito'><button>Ir al Carrito</button></Link>:<ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>}
            </div>
        </div>
    );
};
export default ItemCard;