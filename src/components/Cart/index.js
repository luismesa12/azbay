// import { useContext } from "react";
import { Link as RouterLink } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { Box, Typography, Button, Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    link: {
        '&:hover': {
            color: 'white',
            textDecoration: 'none'
        },
    },
})

const Cart = () => {
    const classes = useStyles();
    const { cart } = useCartContext();
    const tempCart = [...cart];
    const accum = tempCart.reduce(totalQ, 0)

    function totalQ(acc, i) {
        return acc += i.price * i.quantity
    }
    return (
        <>
            <Box my={2}>
                <Typography variant="h2" color="initial" align='center'>Carrito de Compras</Typography>
            </Box>
            {
                cart.length ?
                    <>
                        {cart.map((item) => <Box mb={2} key={item.id}> <CartItem item={item} /> </Box>)}
                        <Typography gutterBottom variant="h3" color="initial" align='center'>Total a pagar: ${accum}</Typography>

                        <Grid container align='center'>
                            <Grid item xs >
                                <Box pb={3}>
                                    <Button
                                        className={classes.link}
                                        component={RouterLink}
                                        to='/orders'
                                        size='large'
                                        variant="contained"
                                        color="primary"
                                        startIcon={<AssignmentTurnedInIcon />}>
                                        Finalizar Compra
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>

                    </>
                    :
                    <Grid container spacing={1} align='center'>
                        <Grid item xs>
                            <Typography gutterBottom variant='h4' color="initial" align='center'>Entonces, ¿Cuándo Piensas Cambiar Esos Muebles Viejos?</Typography>
                            <Button className={classes.link} variant="contained" color="primary" size='large' component={RouterLink} to='/'>
                                Ir A Comprar La Mejor Calidad
                        </Button>
                        </Grid>
                    </Grid>
            }

        </>
    )
}
export default Cart;