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
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({

    mediaRoot: {
        position: 'relative',
    },
    media: {
    },
    favorite: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
    price: {
        flexGrow: 1,
    },
    typoLink:{
        textDecoration: 'none',
        '&:hover': {
            color: 'inherit',
            textDecoration: 'none'
        },
    },

}));
const ItemCard = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addToCart } = useCartContext();
    const onAdd = (count) => {
        setGoToCart(true);
        addToCart({ ...product, quantity: count });
    };
    const classes = useStyles();
    return (
        <Card>
            <Box className={classes.mediaRoot}>
                <Link component={RouterLink} to={`/item/${product.id}`} >
                    <CardMedia
                        component="img"
                        className={classes.media}
                        title="product"
                        image={product.pictureUrl}
                    />
                </Link>
                <Box className={classes.favorite}>
                    <FavoriteBtn item={product} />
                </Box>
            </Box>
            <CardContent>
                    <Typography gutterBottom variant="h5" component={RouterLink} to={`/item/${product.id}`} className={classes.typoLink} color='inherit'>
                        {product.title}
                    </Typography>
               
                <Box display="flex" flexWrap="wrap" alignItems="center">
                    <Typography variant="h3" className={classes.price} color='inherit'>
                        ${product.price}
                    </Typography>
                    {
                        goToCart ?
                            <Link component={RouterLink} to='/carrito'>
                                <IconButton aria-label="go to cart">
                                    <ArrowForwardOutlinedIcon /><ShoppingCartIcon />
                                </IconButton>
                            </Link>
                            : <ItemCardAdd onAdd={onAdd} />
                    }
                </Box>
            </CardContent>
        </Card>
    );
};
export default ItemCard;