import React from 'react'
import { useFavoriteContext } from '../../context/FavoriteContext'

const FavoriteWidget = () => {
    const {favorites}=useFavoriteContext();
   
    const accum = favorites.length

    return (
        <div>
            <i>🤍</i>
            <span className="badge align-top float-right badge-pill badge-light">{accum || null}</span>
        </div>
    )
}

export default FavoriteWidget
