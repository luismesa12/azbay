import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../context/CartContext";
import FavoriteBtn from "../../../FavoriteBtn";
import ItemCardAdd from "../../ItemGallery/ItemCard/ItemCardAdd";


const ItemListCard = ({ product}) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addToCart } = useCartContext();
    const onAdd = (count) => {
        setGoToCart(true);
        addToCart({ ...product, quantity: count });
    };

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">

                    <div className="col-2">
                        <Link to={`/item/${product.id}`}>
                            <img src={product.pictureUrl} />
                        </Link>
                    </div>

                    <div className="col">
                        <Link to={`/item/${product.id}`}>
                            <h4 className="card-title">{product.title}</h4>
                            <h5>{(product.price) ? `$${product.price}` : ""}</h5>
                            <p>Aquì va una corta descripciòn del producto, aproximadamente dos o tres lineas. Escribir lo estrictamente necesario </p>
                        </Link>
                    </div>

                    <div className="col">
                        <FavoriteBtn item={product} />
                        {
                            goToCart ?
                                <Link to='/carrito'><button>Ir al Carrito</button></Link>
                                :<ItemCardAdd onAdd={onAdd} />
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};
export default ItemListCard;