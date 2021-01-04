"use strict";

import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './components/App/App';

// Accept HMR replacements
if (module.hot) {
    module.hot.accept();
}

const root = document.querySelector('#root');

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    root
);
