import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import FavoriteBtn from "../../FavoriteBtn";
import ItemCount from "../../ItemCount"
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';


const DetailCard = ({ product }) => {
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
                        <img src={product.pictureUrl} />
                    </div>

                    <div className="col">

                        <h4 className="card-title">{product.title}</h4>
                        <h5>{(product.price) ? `$${product.price}` : ""}</h5>
                    </div>

                    <div className="col">
                        {
                            goToCart ?
                                <Link to='/carrito'>
                                    <IconButton aria-label="go to cart">
                                        <ArrowForwardOutlinedIcon /><ShoppingCartIcon />
                                    </IconButton>
                                </Link>
                                : <ItemCount stock={12} initial={1} onAdd={onAdd}></ItemCount>
                        }
                    </div>
                    <div className="col">
                        <FavoriteBtn item={product} />
                    </div>

                </div>
                <div className="row">
                    <div className="col">
                        <h2>Descripciòn:</h2>
                        <p>Aquì va una descripciòn larga del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì va una descripciòn larga del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì va una descripciòn larga del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì va una descripciòn larga del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì va una descripciòn larga del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì va una descripciòn larga del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì va una descripciòn larga del producto, aproximadamente 7 lineas. </p>
                    </div>
                    <div className="col">
                        <h2>características:</h2>
                        <p>Aquì van características del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì van características del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì van características del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì van características del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì van características del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì van características del producto, aproximadamente 7 lineas. </p>
                        <p>Aquì van características del producto, aproximadamente 7 lineas. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailCard;
