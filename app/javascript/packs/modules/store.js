import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';

import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import reducer from './reducer';

const composeEnhancers = (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 25,
  })
) || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(ReduxPromise, ReduxThunk)
  )
);

export default store;
