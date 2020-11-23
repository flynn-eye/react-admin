import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Store from './store/index';
import 'normalize.css/normalize.css';
import 'antd/dist/antd.css';
import initConfig from './util/config';
import su from './asserts/data/loupan/su.json';
initConfig();
console.log(su);
ReactDOM.render(
  <Provider store={Store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
