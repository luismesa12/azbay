import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../../context/CartContext";
import ItemCount from "../../../ItemCount"


const ItemCard = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false);
    // const [q, setQ] = useState({});
    const { cart, addToCart } = useCartContext();
    const onAdd = (count) => {
        // setQ({ quantity: count, item: product });
        setGoToCart(true);
        // console.log(count);
        addToCart({ ...product, quantity: count });
    };
    // console.log(q);
    console.log(cart);

    return (
        <div className="card">
            <div className="card-body">
                <Link to={`/item/${product.id}`}>
                    <img src={product.pictureUrl} />
                    <h4 className="card-title">{product.title}</h4>
                    <h5>{(product.price) ? `$${product.price}` : ""}</h5>
                </Link>
                {goToCart ? <Link to='/carrito'><button>Ir al Carrito</button></Link> : <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>}
            </div>
        </div>
    );
};
export default ItemCard;