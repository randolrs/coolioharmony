import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import reactDeviseReducers from 'react-devise/lib/reducers';
// import ReduxThunk from 'redux-thunk';
// import ReduxPromise from 'redux-promise';
import reducer from './reducer';

const composeEnhancers = (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
    traceLimit: 25,
  })
) || compose;

export default function configureStore(initialState) {
  const store = createStore(
    combineReducers({
      ...reducer,
      ...reactDeviseReducers
    })
  );

  return store;
}
