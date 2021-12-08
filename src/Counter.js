// useState를 통해 바뀌는 값(동적)으로 관리할 수 있다
import React, { useState } from 'react';

function Counter() {
    // number의 기본값은 useState(0)에 지정한 0으로 설정하겠다.
    // setNumber 함수는 update하는 함수
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        // 어떻게 update할지를 넣어줄 수가 있다
        // 함수형 업데이트 함수를 넣어줄 수 있음, 최적화에 더 좋음
        setNumber(prevNumber => prevNumber + 1);
        //setNumber(number + 1);
    };
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber + 1);
        setNumber(number - 1);
    };
    return (
        <div>
            <h1>{number}</h1>
            {/* 하기 소스처럼 이벤트를 등록할때 함수를 넣어줘야되는데 함수를 호출()하는 형태로 작성하면 rendering되면서 바로 함수가 호출되어버림  */}
            {/* <button onClick={onIncrease()}>+1</button> */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;
