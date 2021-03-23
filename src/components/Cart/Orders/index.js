import { useCartContext } from "../../../context/CartContext";
import firebase from 'firebase/app';
import db from "../../../firebase";
import { useState } from "react";
import AlertOrder from "./AlertOrder";
import SendIcon from '@material-ui/icons/Send';
import { Box, Typography, Button, Grid, Container, Card, CardMedia, TextField, Divider } from '@material-ui/core';

const Orders = () => {
    const { cart, clearCart } = useCartContext();
    const [currentOrder, setCurrentOrder] = useState({});
    const [orderOk, setOrderOk] = useState(false);
    const [orderError, setOrderError] = useState(false);
    const [validated, setValidated] = useState({})
    const tempCart = [...cart];
    const accum = tempCart.reduce(totalQ, 0);

    function totalQ(acc, i) {
        return acc += i.price * i.quantity
    };
    /* Validation.. */
    const validate=(values)=>{
        let aux = {};
        aux.name = values.name.trim().length>1?false:'Nombre es requerido'
        aux.lastName = values.lastName.trim().length>1?false:'Apellido es requerido'
        aux.number = values.number.length>9?false:'Minimo 10 caracteres requeridos'
        aux.email = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(values.email)?false:'Email no valido'
        setValidated(aux)
        return aux
    };
    const resetValidateName = ()=>{
        const aux = {...validated}
        aux.name=false
        setValidated(aux)
    }
    const resetValidateLName = ()=>{
        const aux = {...validated}
        aux.lastName=false
        setValidated(aux)
    }
    const resetValidateEmail = ()=>{
        const aux = {...validated}
        aux.email=false
        setValidated(aux)
    }
    const resetValidateNumber = ()=>{
        const aux = {...validated}
        aux.number=false
        setValidated(aux)
    }
    /*..Validation*/
    /* */
    async function createOrder(e) {
        e.preventDefault();
        const buyer = {
            name: document.getElementById("fname").value,
            lastName: document.getElementById("sname").value,
            number: document.getElementById("pnumber").value,
            email: document.getElementById("email").value
        };
        const tempVal = validate(buyer);
        if (tempVal.name||tempVal.lastName ||tempVal.email ||tempVal.number ) {
            console.log("Errores en Formulario");
        }
        else{
            const newOrder = {
                ...buyer,
                items: cart,
                date: firebase.firestore.FieldValue.serverTimestamp(),
                total: accum
            };
    
            const orders = db.collection("orders");
    
            try {
                await orders.add(newOrder).then(id => {
                    console.log('Order created with id: ', id.id);
                    setCurrentOrder({ id: id.id, ...newOrder });
                    clearCart();
                    e.target.reset();
                    setOrderOk(true)
                });
            }
            catch (err) {
                console.error(err);
                setOrderError(true)
            }
        }
        
    }
    /*  */

    return (
        <>
            <Box my={2}>
                <Typography variant="h2" color="initial" align='center'>Crea Tu Orden</Typography>
            </Box>



            <Box mb={5}>
                <Container maxWidth="md">
                    <Grid container spacing={1} align='center'>
                        <Grid item xs>
                            <Card>
                                <Box mt={2} mx={5}>
                                    
                                    {cart.map((item) => <Typography
                                        variant="subtitle1"
                                        color="initial"
                                        key={item.id}>

                                        {
                                            `${item.title} | Precio: $
                                        ${item.price} | Cantidad: 
                                        ${item.quantity} | Total: 
                                        $${item.price * item.quantity}
                                        `}
                                        <Divider variant='middle' light/>
                                    </Typography>
                                    )}
                                </Box>

                                <Box my={2}>
                                    <Typography variant="h4" color="initial">Total a pagar: ${accum}</Typography>
                                </Box>

                                <form onSubmit={createOrder}>
                                    <Typography gutterBottom variant="h6" color="initial">Ingresa Tus Datos</Typography>
                                    <Grid container spacing={1} align='center'>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="fname"
                                                label="Nombre"
                                                required
                                                helperText={validated.name}
                                                error={Boolean(validated.name)}
                                                onChange={resetValidateName}
                                                disabled={!Boolean(accum)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="sname"
                                                label="Apellido"
                                                required
                                                helperText={validated.lastName}
                                                error={Boolean(validated.lastName)}
                                                onChange={resetValidateLName}
                                                disabled={!Boolean(accum)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>

                                            <TextField
                                                id="pnumber"
                                                label="Celular"
                                                required
                                                helperText={validated.number}
                                                error={Boolean(validated.number)}
                                                onChange={resetValidateNumber}
                                                disabled={!Boolean(accum)}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>

                                            <TextField
                                                id="email"
                                                label="Email"
                                                required
                                                helperText={validated.email}
                                                error={Boolean(validated.email)}
                                                onChange={resetValidateEmail}
                                                disabled={!Boolean(accum)}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box my={3}>
                                        <Button type="submit"
                                            variant="contained"
                                            color="primary"
                                            startIcon={<SendIcon />}>
                                            Finalizar Orden
                                            </Button>
                                    </Box>

                                </form>

                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <AlertOrder currentOrder={currentOrder} orderOk={orderOk} orderError={orderError} />

        </>
    )
}
export default Orders;