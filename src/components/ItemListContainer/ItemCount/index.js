import React, { useState } from "react";


const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)

    const decCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    };
    const incCount = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    };
    const handlerOnAdd= ()=>{
        onAdd(count);
    }
    return (
        <>
            <button onClick={decCount}>-</button>
            <span>{count}</span>
            <button onClick={incCount}>+</button>
            <br />
            <button onClick={handlerOnAdd}>Agregar</button>
            {/* const onAdd = ()=>{
        alert(`Se agregaron ${count} Items`)    
    } */}
        </>
    )
}

export default ItemCount;