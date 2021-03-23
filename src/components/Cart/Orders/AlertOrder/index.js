import { Box, Container } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton'

function AlertOrder({ currentOrder, orderOk, orderError }) {

    return (
        <>
            {orderOk &&
            <Box mb={3}>

                <Container maxWidth="md">
                    <Alert severity="success">
                        <AlertTitle>Genial {currentOrder.name}! La orden fue creada correctamente</AlertTitle>
                        Conserva este id: <strong>{currentOrder.id}</strong> para consultar el estado de tu orden, aquí <ArrowForwardOutlinedIcon />
                        <Link to='/myorders'>
                            <IconButton aria-label="go to cart">
                                <AssignmentIndIcon />
                            </IconButton>
                        </Link>
                    </Alert>
                </Container>
            </Box>

            }
            {orderError &&
                <Alert severity="error">
                    La orden no fue creada
                </Alert>
            }
        </>
    )
}

export default AlertOrder
