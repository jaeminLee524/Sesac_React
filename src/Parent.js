import React, { useState } from 'react';
import Child from './Child';
//
function Parent() {
    const [count, setCount] = useState(0);
    function onReset() {
        setCount(0);
    }

    function onIncreaseCount() {
        setCount(count => count + 1);
    }

    function onDecreaseCount() {
        setCount(count => count - 1);
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={onReset}>Reset</button>
            <Child onIncreaseCount={onIncreaseCount} onDecreaseCount={onDecreaseCount} />
        </>
    );
}

export default Parent;
