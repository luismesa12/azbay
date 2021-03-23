import { useEffect, useState } from 'react'
import db from '../../firebase'
import { Box, Typography, Button, Grid, Container, Card, CardMedia, TextField, Divider } from '@material-ui/core';

const MyOrders = () => {
    const [inputId, setInputId] = useState('');
    const [orderFound, setOrderFound] = useState({ items: [] })
    const itemCollection = db.collection('orders');

    const findOrder = (e) => {
        e.preventDefault();
        itemCollection.get().then((value) => {
            let aux = value.docs.find(e => e.id === inputId)
            if (aux != undefined) {
                setOrderFound(aux.data())
            }
            else {
                console.log('No se econtró');
            }
        })
    }

    console.log('inputId', inputId);
    console.log(orderFound);

    return (
        <>
            <Box my={2}>
                <Typography variant="h2" color="initial" align='center'>Buscar Mi Orden</Typography>
            </Box>
            <form onSubmit={findOrder}>
                <Grid container spacing={1} align='center'>
                    <Grid item xs={12}>
                        <TextField
                            id="myorder"
                            label="Ingresa Id de Tu Orden"
                            onChange={(e) => setInputId(e.target.value.trim())}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type='submit'>
                            Buscar
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <Box my={2}>
            <Container maxWidth="md">
                <Grid container spacing={1} align='center'>
                    <Grid item xs>
                        <Card>
                            <Box my={2}>
                                <Grid container spacing={1} align='center'>
                                    <Grid item xs>
                                        <Box>
                                            <Typography variant="subtitle2" color="initial">Cliente: </Typography>
                                            <Typography variant="body2" color="initial">{orderFound.name} {orderFound.lastName}</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs>
                                        <Box>
                                            <Typography variant="subtitle2" color="initial">Estado De La Orden: </Typography>
                                            <Typography variant="body2" color="initial">En Proceso</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs>
                                        <Box>
                                            <Typography variant="subtitle2" color="initial">Email: </Typography>
                                            <Typography variant="body2" color="initial">{orderFound.email}</Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Box my={2} mx={5}>
                                <Typography variant="h5" color="initial">Tus Productos</Typography>
                                {orderFound.items.map((item) => <Typography
                                    variant="subtitle1"
                                    color="initial"
                                    key={item.id}>

                                    {
                                        `${item.title} | Precio: $
                                        ${item.price} | Cantidad: 
                                        ${item.quantity} | Total: 
                                        $${item.price * item.quantity}
                                        `}
                                    <Divider variant='middle' light />
                                </Typography>
                                )}
                                <Typography variant="h5" color="initial">Total: $6546654</Typography>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </>
    )
}

export default MyOrders;
