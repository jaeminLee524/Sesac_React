import React, { useState } from 'react';

function Todo() {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('현재 카운트는 0입니다.');

    function onIncrease() {
        setCount(prevNumber => prevNumber + 1); // 숫자 증가
        setTitle(`현재 카운트는 ${count}입니다.`); // 문구 변경
        console.log(1);
        onChangeTitle(title);
    }

    function onChangeTitle({ title }) {
        // 문구변경
        return;
    }

    return (
        <>
            <div id="title"></div>
            <button onClick={onIncrease}>증가</button>
        </>
    );
}

export default Todo;
