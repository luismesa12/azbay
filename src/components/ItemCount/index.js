import React, { useState } from "react";
import Counter from "./Counter";


const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [count, setCount] = useState(initial)
    
    const handlerOnAdd= ()=>{
        onAdd(count);
    }
    return (
        <>
            <Counter count={count} max={stock} setCount={setCount}/>
            <button onClick={handlerOnAdd}>Agregar</button>
        </>
    )
}

export default ItemCount;