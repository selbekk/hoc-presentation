import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './containers/App';

import './index.css';

const store = configureStore();

const render = Component => ReactDOM.render(
  <Provider store={store}>
    <Component />
  </Provider>,
  document.getElementById('root'),
);

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(NextApp);
  })
}
