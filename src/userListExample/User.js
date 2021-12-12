import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    useEffect(() => {
        console.log(user);
    }, [user]);
    return (
        <div>
            <b
                style={{
                    color: user.active ? 'green' : 'black',
                    cursor: 'pointer',
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

export default React.memo(User);
