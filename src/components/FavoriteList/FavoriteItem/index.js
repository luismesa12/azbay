import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


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
                                <Link to='/carrito'>
                                    <IconButton aria-label="go to cart">
                                        <ArrowForwardOutlinedIcon /><ShoppingCartIcon />
                                    </IconButton>
                                </Link> 
                                :<IconButton aria-label="" onClick={handleAddtoCart}>
                                    <AddShoppingCartIcon/>
                                 </IconButton>
                        }
                        <IconButton aria-label="delete" onClick={() => removeFromFavorites(item)}>
                          <DeleteForeverOutlinedIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteItem;
