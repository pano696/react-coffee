import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
