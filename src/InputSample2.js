import React, { useState, useRef } from 'react';

function InputSample2() {
    //useState를 초기값 할당 및 누적 값 관리
    // input 태그에 입력받는 값들을 관리해야되는 변수
    const [inputs, setInput] = useState({
        name: '',
        nickname: '',
    });
    const nameFocus = useRef();

    const { name, nickname } = inputs;

    const onChange = e => {
        // input 값이 변경되었을 떄 name, value를 뽑아야 함
        const { name, value } = e.target;

        // 리액트에서 객체를 수정하기 위해선 객체를 복사하고, 값을 수정해야된다
        // 객체를 복사하지않고, 객체의 값을 다이렉트로 변경하면, React에는 불변성이 지켜지지 않아 리렌더링 되지 않는다.
        setInput({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInput({
            name: '',
            nickname: '',
        });

        //.current : 원하는 DOM 객체를 가리킴
        nameFocus.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameFocus} />
            <input name="nickname" placeholder="별명" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} : {nickname}
            </div>
        </div>
    );
}

export default InputSample2;
