import React, { useState, useRef } from 'react';

function InputSample() {
    //useState를 객체 형식으로
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;

    const onChange = e => {
        const { name, value } = e.target;

        // 기존 객체를 복사 후 업데이트할때
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });

        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} {nickname}
            </div>
        </div>
    );
}
export default InputSample;