import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {BrowserRouter as Router} from 'react-router-dom';
import {ServiceDb, ServiceContext} from './services';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

const serviceDb = new ServiceDb();

ReactDOM.render(
  <ServiceContext.Provider value={serviceDb}>
    <Router>
      <App />
    </Router>
  </ServiceContext.Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
