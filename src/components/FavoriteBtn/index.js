import React, { useEffect, useState } from 'react'
import { useFavoriteContext } from '../../context/FavoriteContext'

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
            <button onClick={toggleCheckedFav}>{checkedFav?<i>❤</i>:<i>♡</i>}</button>
        </>
    )
}

export default FavoriteBtn;
