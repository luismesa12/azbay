import React from 'react'
import { useFavoriteContext } from '../../context/FavoriteContext'
import Badge from '@material-ui/core/Badge';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const FavoriteWidget = () => {
    const { favorites } = useFavoriteContext();

    const accum = favorites.length

    return (
        <div>
            <Badge badgeContent={accum} color="primary">
                <FavoriteBorderIcon color="primary"/>
            </Badge>
        </div>
    )
}

export default FavoriteWidget
