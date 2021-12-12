import React from 'react';

const CreateUser = ({ username, email, onChange, onCreate }) => {
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={username} />
            <input name="email" placeholder="이메일" onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default React.memo(CreateUser);
