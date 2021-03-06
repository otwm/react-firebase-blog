import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router'
import getRoutes from './core/common/routes';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router routes={getRoutes()} history={hashHistory}>
    <App />
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
