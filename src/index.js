import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FilterItemList from './FilterItemList';

ReactDOM.render(<FilterItemList />, document.getElementById('root'));
registerServiceWorker();
