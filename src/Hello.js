import React from 'react';

function Hello({ title, color, name, A, B, C }) {
    return (
        <>
            <div>
                {title}, {name}
            </div>
        </>
    );
}

Hello.defaultProps = {
    name: 'default',
};

export default Hello;
