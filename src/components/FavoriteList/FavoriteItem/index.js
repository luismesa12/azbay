import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';

const FavoriteItem = ({ item, removeFromFavorites }) => {
    const {addToCart}=useCartContext();
    const [added, setAdded] = useState(false)
    const handleAddtoCart = ()=>{
        addToCart(item)
        setAdded(true)
    }
    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className='row'>
                        <img src={item.pictureUrl} className='col-1' />
                        <h2 className='my-auto col'>{item.title}</h2>
                        <h5 className='my-auto col'>Precio: ${item.price}</h5>
                        {
                            added?
                                <Link className='my-auto mr-1 col' to='/carrito'><button > Ir a Carrito</button></Link> 
                                :<button className='my-auto mr-1 col' onClick={handleAddtoCart}>Añadir al Carrito</button>
                        }
                        <button className='my-auto col-1' onClick={() => removeFromFavorites(item)}>x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteItem;
