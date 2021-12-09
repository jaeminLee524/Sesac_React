import React from 'react';

function Child({ onIncreaseCount, onDecreaseCount }) {
    return (
        <div>
            <button onClick={onIncreaseCount}>+1</button>
            <button onClick={onDecreaseCount}>-1</button>
        </div>
    );
}

export default Child;
