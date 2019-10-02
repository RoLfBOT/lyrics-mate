import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from './context';

const app = (
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
// HI Kaustabh for hacktoberfest 19
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
