<<<<<<< HEAD
import React from 'react';
import InputSample2 from './InputSample2';
function App() {
    return <InputSample2 />;
=======
import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import ValidationSample from './ValidationSample';

function App() {
    const [inputs, setInput] = useState({
        username: '',
        email: '',
    });
    const { username, email } = inputs;

    const onChange = e => {
        const { name, value } = e.target;

        setInput({
            ...inputs,
            [name]: value,
        });
    };

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
        },
    ]);

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        setUsers([...users, user]);

        setInput({
            username: '',
            email: '',
        });
        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };
    return (
        <>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onRemove={onRemove} />
        </>
    );

    // return <ValidationSample />;
>>>>>>> d62e85a90fea2120ca9c7fa967188e6528d8c8ae
}

export default App;
