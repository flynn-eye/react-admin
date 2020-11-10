import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Store from './store/index';
import 'normalize.css/normalize.css';
import 'antd/dist/antd.css';
ReactDOM.render(
  <Provider store={Store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
