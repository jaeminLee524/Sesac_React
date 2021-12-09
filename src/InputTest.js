import React from 'react';

function InputTest() {
    const value = 'modify';
    const obj = [
        {
            id: 'objId',
            name: 'objName',
        },
        {
            id: 'sampleId',
            name: 'sampleName',
        },
    ];
    console.log(obj);
    return <div>{(obj[0].name = value)}</div>;
}

export default InputTest;
