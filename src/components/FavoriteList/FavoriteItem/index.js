import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'

const FavoriteItem = ({ item, removeFromFavorites }) => {
    const { addToCart } = useCartContext();
    const [added, setAdded] = useState(false)
    const handleAddtoCart = () => {
        addToCart(item)
        setAdded(true)
    }
    return (
        <Container maxWidth='lg'>
            <Card >
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={12} sm={4} md={2} lg={1}>
                        <CardMedia
                            component="img"
                            title="product"
                            image={item.pictureUrl}
                        />
                    </Grid>
                    <Grid item xs={12} sm lg={4}>
                        <Typography variant="h6" color="initial" align='center'>{item.title}</Typography>
                    </Grid>
                    <Grid item xs={12} sm lg={4}>
                        <Typography variant="h6" color="initial" align='center'>Precio: ${item.price}</Typography>
                    </Grid>
                    <Grid item sm={1} lg={2}>
                        {
                            added ?
                                <Link to='/carrito'>
                                    <IconButton aria-label="go to cart">
                                        <ArrowForwardOutlinedIcon /><ShoppingCartIcon color='primary'/>
                                    </IconButton>
                                </Link>
                                : <IconButton aria-label="" onClick={handleAddtoCart}>
                                    <AddShoppingCartIcon color='primary'/>
                                </IconButton>
                        }
                    </Grid>
                    <Grid item sm={2} lg={1}>
                        <IconButton aria-label="delete" onClick={() => removeFromFavorites(item)}>
                            <DeleteForeverOutlinedIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    )
}

export default FavoriteItem;
