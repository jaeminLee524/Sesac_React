import React, { useCallback, useState, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                [action.name]: action.value,
            };
        case 'RESET':
            return Object.keys(state).reduce((acc, curr) => {
                console.log(Object.keys(state));
                console.log({ acc, curr });
                acc[curr] = '';
                return acc;
            }, {});
        default:
            return state;
    }
}

function useInputs(initialForm) {
    // const [form, setForm] = useState(initialForm);
    const [form, dispatch] = useReducer(reducer, initialForm);

    // onChange
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value,
        });
        // setForm(form => ({ ...form, [name]: value }));
    }, []);

    // onReset
    const onReset = useCallback(() => {
        dispatch({ type: 'RESET' });
        //      setForm(initialForm);
        // }, [initialForm]);
    }, []);

    return [form, onChange, onReset];
}

export default useInputs;
