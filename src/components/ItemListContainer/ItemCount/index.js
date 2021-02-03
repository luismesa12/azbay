import React, { useState } from "react";
import Add from "./Add";

const ItemCount = ({ stock, initial }) => {
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

    return (
        <>
            <button onClick={decCount}>-</button>
            <span>{count}</span>
            <button onClick={incCount}>+</button>
            <br />
            <Add {...{ count }}></Add>
        </>
    )
}

export default ItemCount;