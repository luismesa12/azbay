import { Box, Typography, Button, Grid, Container, Card, TextField,  } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert, AlertTitle } from '@material-ui/lab';

const ContactForm = ({ name, email, phone, msg, open,handleClose, handleName, handleEmail, handlePhone, handleMsg, sendMsg }) => {
    
    
    return (
        <Container maxWidth="md">
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert  severity="success">
            <AlertTitle>Recibimos tu mensaje y ya estamos trabajando en ello!</AlertTitle>
        </Alert>
      </Snackbar>
            <Card >
                <Box m={2} mb={4}>
                    <Grid container spacing={1} align='center'>
                        <Grid item xs>
                            <Typography variant="h5" color="initial">Cuéntanos!</Typography>
                            <form onSubmit={sendMsg}>
                                <Box mb={2}>
                                    <TextField
                                        id="NombreContact"
                                        label="Nombre:"
                                        value={name}
                                        onChange={handleName}
                                        required
                                    />
                                </Box>
                                <Box m={2}>
                                    <TextField
                                        id="EmailContact"
                                        label="Email"
                                        onChange={handleEmail}
                                        value={email}
                                        required
                                    />
                                </Box>
                                <Box m={2}>
                                    <TextField
                                        id="TélefonoContact"
                                        label="Télefono"
                                        onChange={handlePhone}
                                        value={phone}
                                        required
                                    />
                                </Box>
                                <Box m={2}>
                                    <TextField
                                        id="MensajeContact"
                                        label="Mensaje..."
                                        onChange={handleMsg}
                                        value={msg}
                                        multiline
                                        rows={4}
                                        required
                                    />
                                </Box>
                                <Button type="submit" variant="contained" color="primary">
                                    Enviar Mensaje
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        </Container>
    )
}

export default ContactForm
