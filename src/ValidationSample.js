import React, { useState } from 'react';

function ValidationSample() {
    const [input, setInput] = useState('');

    const onChange = e => {
        // 패스워드 정보를 업데이트
        setInput(e.target.value);
    };

    const onClickBtn = () => {
        console.log(input === '0000');
    };

    return (
        <>
            <input type="password" onChange={onChange}></input>
            <button onClick={onClickBtn}>패스워드 검증</button>
        </>
    );
}

export default ValidationSample;
