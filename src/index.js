import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppFrame from './AppFrame';

ReactDOM.render(<AppFrame />, document.getElementById('root'));
registerServiceWorker();
