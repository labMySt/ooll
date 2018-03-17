import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Router } from 'react-router-dom'
import App from './App';
import routes from './routes.js';

render(
    <div>
        <BrowserRouter routes={routes}>
            <App/>
        </BrowserRouter>
    </div>,
    document.getElementById('app')
);
