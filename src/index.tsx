import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import dotenv from 'dotenv';
import { createStore, applyMiddleware, compose , Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer';
import rootSaga from './store/sagas/rootSaga';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()

// mount saga on the Store
const store: Store = createStore(rootReducer(), composeEnhancer(applyMiddleware(sagaMiddleware)));
// Reload reducers
sagaMiddleware.run(rootSaga);

dotenv.config();
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById('root'));
