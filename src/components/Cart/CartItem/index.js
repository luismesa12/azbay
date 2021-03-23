import { useEffect, useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import Counter from "../../ItemCount/Counter";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import IconButton from '@material-ui/core/IconButton'
import { Box, Typography, Button, Grid, Container, Card, CardMedia } from '@material-ui/core';


const CartItem = ({ item }) => {
    const { removeFromCart, editQuantityCart } = useCartContext();
    const [count, setCount] = useState(item.quantity)

    useEffect(() => {
        editQuantityCart(item, count)
    }, [count]);
    return (
        <Container maxWidth="lg">
            <Card >
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item lg={1} sm={2}>
                        <CardMedia
                            component="img"
                            title="product"
                            image={item.pictureUrl}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg>
                        <Typography variant="h6" color="initial" align='center'>{item.title}</Typography>
                    </Grid>
                    <Grid item xs={12} sm lg>
                        <Typography variant="h6" color="initial" align='center'>Precio: ${item.price}</Typography>
                    </Grid>
                    <Grid item xs={12} sm lg>
                        <Grid container align='center'>
                            <Grid item xs>
                                <Counter count={count} max={12} setCount={setCount} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} lg>
                        <Typography variant="h6" color="initial" align='center'> Total: ${item.price * item.quantity}</Typography>
                    </Grid>
                    <Grid item xs sm={2} lg={1}>
                        <Grid container align='center'>
                            <Grid item xs>
                                <IconButton aria-label="remove" onClick={() => removeFromCart(item)}>
                                    <DeleteForeverOutlinedIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
};
export default CartItem;
