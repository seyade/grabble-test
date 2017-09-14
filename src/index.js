import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './bower_components/components-font-awesome/css/font-awesome.min.css';
import './bower_components/bootstrap/dist/css/bootstrap.min.css';

import './index.scss';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('root'));
registerServiceWorker();
