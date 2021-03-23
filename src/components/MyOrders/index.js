import { useEffect, useState } from 'react'
import db from '../../firebase'
import { Box, Typography, Button, Grid, Container, Card, CardMedia, TextField, Divider } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const MyOrders = () => {
    const [inputId, setInputId] = useState('');
    const [orderFound, setOrderFound] = useState({ items: [] })
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [notFound, setNotFound] = useState(false)

    const itemCollection = db.collection('orders');

    const findOrder = (e) => {
        setLoading(true)
        e.preventDefault();
        itemCollection.get().then((value) => {
            let aux = value.docs.find(e => e.id === inputId)
            if (aux != undefined) {
                setOrderFound(aux.data())
                setLoading(false)
                setShow(true)
                setNotFound(false)
            }
            else {
                setOrderFound({ items: [] })
                setLoading(false)
                setShow(true)
                setNotFound(true)
            }
        })
    }

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
            <Box my={2} >
                <Container maxWidth="md">
                    <Grid container spacing={1} align='center'>
                        {show
                            &&
                            <Grid item xs>
                                {loading ?    
                                    <Box mx={8}>
                                        <Skeleton />
                                        <Skeleton animation={false} />
                                        <Skeleton animation="wave" />
                                        <Skeleton />
                                    </Box>
                                    : notFound?
                                    <Box my={2}>
                                    <Typography variant="h4" color="secondary" align='center'>Orden No Encontrada</Typography>
                                    </Box>
                                        :
                                        <Card>
                                            <Box my={2}>
                                                <Grid container spacing={1} align='center'>
                                                    <Grid item xs>
                                                        <Box mx={2}>
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
                                                    <Grid item xs mx={2}>
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
                                                <Typography variant="h5" color="initial">Total: ${orderFound.total}</Typography>
                                            </Box>
                                        </Card>
                                }

                            </Grid>
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default MyOrders;
