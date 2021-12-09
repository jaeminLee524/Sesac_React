import React from 'react';

function Hello({ name, color }) {
    return <div style={{ color: color }}>hi</div>;
}

Hello.defaultProps = {
    name: 'default',
};

export default Hello;
