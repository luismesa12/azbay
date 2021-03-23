import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import FavoriteBtn from "../../FavoriteBtn";
import ItemCount from "../../ItemCount"
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { Box, Typography, Button, Grid, Container, Card, CardMedia, TextField, Divider } from '@material-ui/core';


const DetailCard = ({ product }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addToCart } = useCartContext();
    const onAdd = (count) => {
        setGoToCart(true);
        addToCart({ ...product, quantity: count });
    };

    return (
        <Box my={3}>

            <Container maxWidth="md">
                <Card className="card">
                    <Grid container spacing={1} justify="space-between" alignItems="center" align='center'>
                        <Grid item>
                            <img src={product.pictureUrl} />
                        </Grid>
                        <Grid item xs>
                            <h4 className="card-title">{product.title}</h4>
                            <h5>{(product.price) ? `$${product.price}` : ""}</h5>
                        </Grid>
                        <Grid item xs>
                            {
                                goToCart ?
                                    <Link to='/carrito'>
                                        <IconButton aria-label="go to cart">
                                            <ArrowForwardOutlinedIcon /><ShoppingCartIcon />
                                        </IconButton>
                                    </Link>
                                    : <ItemCount stock={12} initial={1} onAdd={onAdd}></ItemCount>
                            }
                        </Grid>
                        <Grid item xs>
                            <FavoriteBtn item={product} />
                        </Grid>
                    </Grid>
                    <Box m={3}>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4" color="initial">Descripción:</Typography>
                                <p>Descripción larga del mueble, aproximadamente 7 lineas. </p>
                                <p>Descripción larga del mueble, aproximadamente 7 lineas. </p>
                                <p>Descripción larga del mueble, aproximadamente 7 lineas. </p>
                                <p>Descripción larga del mueble, aproximadamente 7 lineas. </p>
                                <p>Descripción larga del mueble, aproximadamente 7 lineas. </p>
                                <p>Descripción larga del mueble, aproximadamente 7 lineas. </p>
                                <p>Descripción larga del mueble, aproximadamente 7 lineas. </p>
                            </Grid>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4" color="initial">Características:</Typography>
                                <p>Características del mueble, aproximadamente 7 lineas. </p>
                                <p>Características del mueble, aproximadamente 7 lineas. </p>
                                <p>Características del mueble, aproximadamente 7 lineas. </p>
                                <p>Características del mueble, aproximadamente 7 lineas. </p>
                                <p>Características del mueble, aproximadamente 7 lineas. </p>
                                <p>Características del mueble, aproximadamente 7 lineas. </p>
                                <p>Características del mueble, aproximadamente 7 lineas. </p>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>
            </Container>

        </Box>
    );
};
export default DetailCard;
