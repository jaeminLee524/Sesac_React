import React from 'react';
import MinutesToHours from './MinutesToHours';
import KmToMiles from './KmToMiles';
import { useState } from 'react/cjs/react.development';
import styled from './App.module.css';

const NomadApp = () => {
    const [index, setIndex] = useState('0');
    const onSelect = e => {
        setIndex(e.target.value);
    };
    return (
        <div>
            <h1>Super Converter</h1>
            <select value={index} onChange={onSelect}>
                <option value="0">Minutes & Hours</option>
                <option value="1">Km & Miles</option>
            </select>
            <hr />
            {index === '0' ? <MinutesToHours /> : null}
            {index === '0' ? <KmToMiles /> : null}
        </div>
        // <div>
        //     <h1 className={styled.title}>Welcom back!!!</h1>
        //     <button text={"Continue"} ></button>
        // </div>
    );
};

export default NomadApp;
