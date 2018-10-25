import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppFrame from './AppFrame';

ReactDOM.render(<AppFrame />, document.getElementById('root'));
registerServiceWorker();
