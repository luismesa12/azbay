import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { useCartContext } from "../../../../context/CartContext";
import FavoriteBtn from "../../../FavoriteBtn";
import ItemCardAdd from "./ItemCardAdd";
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Typography from '@material-ui/core/Typography';


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
                <Typography>
                <Link component={RouterLink} to={`/item/${product.id}`} >
                    <img src={product.pictureUrl} />
                    <h4 className="card-title">{product.title}</h4>
                    <h5>{(product.price) ? `$${product.price}` : ""}</h5>
                </Link>
                </Typography>
                <FavoriteBtn item={product} />
                {
                    goToCart ?
                        <Link component={RouterLink} to='/carrito'>
                            <IconButton aria-label="go to cart">
                                <ArrowForwardOutlinedIcon /><ShoppingCartIcon />
                            </IconButton>
                        </Link>
                        : <ItemCardAdd onAdd={onAdd} />
                }

            </div>
        </div>
    );
};
export default ItemCard;