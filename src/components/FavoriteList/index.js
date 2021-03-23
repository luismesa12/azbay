import { Box, Typography, Button, Grid, Link, } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'
import { useFavoriteContext } from '../../context/FavoriteContext'
import FavoriteItem from './FavoriteItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    link:{
        '&:hover': {
            color: 'white',
            textDecoration: 'none'
        },
    },
})



const FavoriteList = () => {
    const { removeFromFavorites, favorites } = useFavoriteContext();
    const classes = useStyles();

    return (
        <div>
            <Box my={2}>
                <Typography variant="h2" color="initial" align='center'>Tus Favoritos</Typography>
            </Box>
            {favorites.length ?
                favorites.map((item) => <Box mb={2} key={item.id}> <FavoriteItem removeFromFavorites={removeFromFavorites} item={item} /> </Box>)
                : <Grid container spacing={1} align='center'>
                    <Grid item xs>
                    <Typography gutterBottom variant='h4' color="initial" align='center'>¿Te Gustaría Tener Los Mejores Espacios?</Typography>
                        <Button className={classes.link} variant="contained" color="primary" size='large' component={RouterLink} to='/'>
                            Ir A Antojarme
                    </Button>
                    </Grid>
                </Grid>
            }

        </div>
    )
}

export default FavoriteList
