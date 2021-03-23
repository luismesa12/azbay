import React, { useEffect, useState } from 'react'
import { useFavoriteContext } from '../../context/FavoriteContext'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite';

const FavoriteBtn = ({item}) => {
    const{addToFavorites, removeFromFavorites, indexInFavorites}=useFavoriteContext();
    const [checkedFav, setCheckedFav] = useState(false)
    const toggleCheckedFav =()=>{
        if (checkedFav) {
            setCheckedFav(false);
            removeFromFavorites(item);
        } else {
            setCheckedFav(true);
            addToFavorites(item);
        }
    };
    useEffect(() => {
        if (indexInFavorites(item)>=0) {
            setCheckedFav(true);
        }
    }, [])
    
    return (
        <>
            <IconButton aria-label="favorite" onClick={toggleCheckedFav}>
            {checkedFav?<FavoriteIcon color='secondary'/>:<FavoriteBorderIcon />}
            </IconButton>
        </>
    )
}

export default FavoriteBtn;
