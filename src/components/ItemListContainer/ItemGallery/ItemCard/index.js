import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../context/CartContext";
import FavoriteBtn from "../../../FavoriteBtn";
import ItemCardAdd from "./ItemCardAdd";


const ItemCard = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addToCart } = useCartContext();
    const onAdd = (count) => {
        setGoToCart(true);
        addToCart({ ...product, quantity: count });
    };

    return (
        <div className="card">
            <div className="card-body">
                <Link to={`/item/${product.id}`}>
                    <img src={product.pictureUrl} />
                    <h4 className="card-title">{product.title}</h4>
                    <h5>{(product.price) ? `$${product.price}` : ""}</h5>
                </Link>
                <FavoriteBtn item={product}/>
                {
                    goToCart ? 
                    <Link to='/carrito'><button>Ir al Carrito</button></Link>
                    :<ItemCardAdd onAdd={onAdd}/>
                }
                
            </div>
        </div>
    );
};
export default ItemCard;