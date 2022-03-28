import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import '../src/bootstrap/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
