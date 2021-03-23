import { Box, Typography,  } from '@material-ui/core';
import React from 'react'
import { useFavoriteContext } from '../../context/FavoriteContext'
import FavoriteItem from './FavoriteItem';

const FavoriteList = () => {
    const{removeFromFavorites, favorites}=useFavoriteContext();

    return (
        <div>
            <Box my={2}>
            <Typography variant="h2" color="initial" align='center'>Tus Favoritos</Typography>
            </Box>
            {favorites.map((item) => <Box mb={2} key={item.id}> <FavoriteItem removeFromFavorites={removeFromFavorites} item={item} /> </Box>)}
        </div>
    )
}

export default FavoriteList
