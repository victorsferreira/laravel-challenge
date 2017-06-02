import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {renderRoutes} from './routing.js';

// import App from './App';

ReactDOM.render(renderRoutes(), document.getElementById('root'));
registerServiceWorker();
