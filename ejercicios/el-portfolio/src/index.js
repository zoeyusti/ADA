import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/App.js';
import registerServiceWorker from './js/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();