import React from 'react'

const FavoriteItem = ({ item, removeFromFavorites }) => {
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <img src={item.pictureUrl} className='col-1' />
                        <h2 className='my-auto col'>{item.title}</h2>
                        <h5 className='my-auto col'>Precio: ${item.price}</h5>
                        <button className='my-auto col-1' onClick={() => removeFromFavorites(item)}>x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteItem;
