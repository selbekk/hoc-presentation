import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from '../reducers';

export default function configureStore(initialState = {}) {
  const middleware = [
    thunk,
  ];
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware),
    ),
  );
}
