import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/core'
import MoodBadIcon from '@material-ui/icons/MoodBad';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
const ProductsNotFound = () => {
    return (
        <div>
            <Box pb={5}>

            
            <Typography color="initial" align='center'>
                <MoodBadIcon fontSize='large'/>
            </Typography>
            <Typography variant="h3" color="initial" align='center'>
                Productos No Encontrados 
            </Typography>
            <Typography variant="h5" color="initial" align='center'>
                Intenta Con Otros Parámetros 
            </Typography>
            <Typography color="initial" align='center'>
                <SentimentVerySatisfiedIcon fontSize='large'/>
            </Typography>
            
            </Box>
        </div>
    )
}

export default ProductsNotFound;
