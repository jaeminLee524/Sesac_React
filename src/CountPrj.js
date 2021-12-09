import React, { useState } from 'react';

function Display({ count }) {
    return <div>{count}</div>;
}

function Button({ onIncreaseCount, onDecreaseCount }) {
    return (
        <div>
            <button onClick={onIncreaseCount}>+1</button>
            <button onClick={onDecreaseCount}>-1</button>
        </div>
    );
}

function CountPrj() {
    const [count, setCount] = useState(10);

    function onIncreaseCount() {
        setCount(prev => prev + 1);
    }

    function onDecreaseCount() {
        setCount(prev => prev - 1);
    }

    function onReset() {
        setCount(0);
    }

    return (
        <>
            <Display count={count} />
            <button onClick={onReset}>Reset</button>
            <Button onIncreaseCount={onIncreaseCount} onDecreaseCount={onDecreaseCount}></Button>
        </>
    );
}

export default CountPrj;
