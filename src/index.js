import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import View from './userListExample/View';
import reportWebVitals from './reportWebVitals';
import NomadApp from './react-with-nomad/NomadApp';

ReactDOM.render(
    <React.StrictMode>
        <NomadApp />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
