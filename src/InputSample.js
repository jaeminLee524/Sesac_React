import React, { useState } from 'react';

function InputSample() {
    const [text, setText] = useState('입력된 값이 없습니다.');
    const initText = '입력된 값이 없습니다.';
    const onChange = e => {
        setText(e.target.value);
    };

    const onReset = () => {
        setText('입력된 값이 없습니다.');
    };

    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {text}
            </div>
        </div>
    );
}
export default InputSample;

// 1. input에 값이 변경되었을때 어쩌고 저쩌고에 넣어줌

// 2. 초기화 누르면 값이 없어지게
