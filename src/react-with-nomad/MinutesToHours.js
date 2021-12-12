import React, { useState } from 'react';

function StatePractice() {
    // const [minutes, setMinutes] = useState(0);
    const [inputs, setInputs] = useState({
        minutes: 0,
        hours: 0,
    });
    const { minutes, hours } = inputs;
    const [flipped, setFlipped] = useState(false);

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () =>
        setInputs({
            minutes: 0,
            hours: 0,
        });
    const onFlip = () => {
        onReset();
        setFlipped(prev => !prev);
    };
    return (
        <div>
            <div>
                <label htmlFor="minutes">Minutes</label> &nbsp;
                <input
                    id="minutes"
                    name="minutes"
                    placeholder="Minutes"
                    type="number"
                    value={flipped === false ? minutes : hours * 60}
                    onChange={onChange}
                    disabled={flipped}
                />
            </div>
            <div>
                <label htmlFor="hours">Hours</label> &nbsp;
                <input
                    id="hours"
                    name="hours"
                    placeholder="Hours"
                    type="number"
                    value={flipped === true ? hours : Math.round(minutes / 60)}
                    onChange={onChange}
                    disabled={!flipped}
                />
            </div>
            <button onClick={onReset}>Reset</button> &nbsp;
            <button onClick={onFlip}>{flipped ? 'Turn back' : 'Flip'}</button>
        </div>
    );
}

export default StatePractice;
