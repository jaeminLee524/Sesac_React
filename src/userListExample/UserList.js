import React from 'react';
import User from './User';

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {
                // 배열의 인덱스를 조회해서 렌더링 : map
                users.map(user => (
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
                ))
            }
        </div>
    );
}

export default React.memo(UserList);
