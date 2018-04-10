import { createStore, applyMiddleware } from 'redux';
import logger  from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './../reducers';

const devCompose = applyMiddleware(thunk, logger);
const prodCompose = applyMiddleware(thunk);
const shouldCompose = process.env.NODE_ENV === 'development'
  ? devCompose : prodCompose;

const store = createStore(
  rootReducer,
  shouldCompose,
);

export default store;