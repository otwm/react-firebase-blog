import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import getRoutes from './core/common/routes';
import configureStore from './core/common/store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const { store, history } = configureStore(
  browserHistory,
  window.INITIAL_STATE,
);

ReactDOM.render(
  <Provider store={store} key="provider" >
    <Router routes={getRoutes()} history={history} >
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
