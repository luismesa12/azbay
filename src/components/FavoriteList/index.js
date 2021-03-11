import React from 'react'
import { useFavoriteContext } from '../../context/FavoriteContext'
import FavoriteItem from './FavoriteItem';

const FavoriteList = () => {
    const{removeFromFavorites, favorites}=useFavoriteContext();

    console.log('FavoriteList', favorites);
    return (
        <div>
            <h1>FavoriteList /myFavorites</h1>
            {favorites.map((item) => <span key={item.id}> <FavoriteItem removeFromFavorites={removeFromFavorites} item={item} /> </span>)}
        </div>
    )
}

export default FavoriteList
