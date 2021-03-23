import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { useCartContext } from "../../../../context/CartContext";
import FavoriteBtn from "../../../FavoriteBtn";
import ItemCardAdd from "../../ItemGallery/ItemCard/ItemCardAdd";
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles(theme => ({

    media: {
    },
    favorite: {
    },
    price: {
    },
    typoLink: {
        textDecoration: 'none',
        '&:hover': {
            color: 'inherit',
            textDecoration: 'none'
        },
    },

}));
const ItemListCard = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addToCart } = useCartContext();
    const onAdd = (count) => {
        setGoToCart(true);
        addToCart({ ...product, quantity: count });
    };
    const classes = useStyles();
    return (
        <Card>
            <Grid container spacing={3} alignItems="center">
                <Grid item xs={4} md={1}>
                    <Link component={RouterLink} to={`/item/${product.id}`} >
                        <CardMedia
                            component="img"
                            className={classes.media}
                            title="product"
                            image={product.pictureUrl}
                        />
                    </Link>
                </Grid>

                <Grid item xs={8} md={11}>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item xs={7}>
                            <Grid container spacing={1} alignItems="center" style={{ paddingTop: 20, paddingBottom: 20, }}>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="h5" component={RouterLink} to={`/item/${product.id}`} className={classes.typoLink} color='inherit'>
                                        {product.title}
                                    </Typography>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="h3" className={classes.price} color='inherit' >
                                        ${product.price}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container spacing={1} alignItems="center" style={{ paddingTop: 20, paddingBottom: 20,}}>
                                <Grid item xs={12} md={8}>
                                    {
                                        goToCart ?
                                            <Link component={RouterLink} to='/carrito'>
                                                <IconButton aria-label="go to cart">
                                                    <ArrowForwardOutlinedIcon /><ShoppingCartIcon />
                                                </IconButton>
                                            </Link>
                                            : <ItemCardAdd onAdd={onAdd} />
                                    }
                                </Grid>
                                <Grid item  xs={12} md={4}>
                                    <FavoriteBtn item={product} />
                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>

                </Grid>
            </Grid>


        </Card>
    );
};
export default ItemListCard;