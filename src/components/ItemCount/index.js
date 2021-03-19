import React, { useState } from "react";
import Counter from "./Counter";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton'


const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [count, setCount] = useState(initial)
    
    const handlerOnAdd= ()=>{
        onAdd(count);
    }
    return (
        <>
            <Counter count={count} max={stock} setCount={setCount}/>
            <IconButton aria-label="addToCart" onClick={handlerOnAdd}>
              <AddShoppingCartIcon/>
            </IconButton>
        </>
    )
}

export default ItemCount;