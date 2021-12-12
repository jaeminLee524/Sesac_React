import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './../CreateUser';
import useInputs from './useInputs';

function countActiveUsers(users) {
    console.log('활성 사용자 수 확인중..');
    return users.filter(user => user.active).length;
}

const initialState = {
    // inputs: {
    //     username: '',
    //     email: '',
    // },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true,
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false,
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false,
        },
    ],
};

function reducer(state, action) {
    // state, action 비구조화 할당을 진행
    switch (action.type) {
        // case 'CHANGE_INPUTS':
        //     return {
        //         ...state,
        //         inputs: {
        //             ...state.inputs,
        //             [action.name]: action.value,
        //         },
        //     };

        case 'CREATE_USER':
            return {
                ...state,
                inputs: initialState.inputs,
                users: state.users.concat(action.user),
            };

        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user => (user.id === action.id ? { ...user, active: !user.active } : user)),
            };

        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id),
            };
    }
}

function View() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [form, onChange, onReset] = useInputs({
        username: '',
        email: '',
    });
    const { username, email } = form;
    const { users } = state;
    // const { username, email } = state.inputs;
    const nextId = useRef(4);

    // const onChange = useCallback(e => {
    //     const { name, value } = e.target;
    //     dispatch({
    //         type: 'CHANGE_INPUTS',
    //         name,
    //         value,
    //     });
    // }, []);

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
            },
        });
        nextId.current += 1;
        onReset();
    }, [username, email, onReset]);

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id,
        });
    }, []);

    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id,
        });
    }, []);

    const count = countActiveUsers(users);

    return (
        <div>
            <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <div>활성 사용자 수: {count} </div>
        </div>
    );
}

export default View;
