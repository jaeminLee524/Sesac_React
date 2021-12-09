import React from 'react';

// 상태관리를 부모 컴포넌트인 App에서 하게 함
// input의 값 및 이벤트로 등록할 함수들을 props로 넘겨받아서 사용
function CreateUser({ username, email, onChange, onCreate }) {
    return (
        <div>
            <input name="username" placeholder="계정명" onChange={onChange} value={username} />
            <input name="email" placeholder="이메일" onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default CreateUser;
