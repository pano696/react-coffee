import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router} from 'react-router-dom';
import {ServiceDb, ServiceContext} from './services';
import ErrorBoundry from './components/error-boundry';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

const serviceDb = new ServiceDb();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ServiceContext.Provider value={serviceDb}>
        <Router>
          <App />
        </Router>
      </ServiceContext.Provider>
    </ErrorBoundry>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
