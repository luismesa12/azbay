import React, { useState } from 'react'

function Counter({count, setCount, max}) {

    const decCount = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };
    const incCount = () => {
        if (count < max) {
            setCount(count + 1)
        }
    };

    return (
        <div>
            <button onClick={decCount}>-</button>
            <span>{count}</span>
            <button onClick={incCount}>+</button>
        </div>
    )
}

export default Counter
