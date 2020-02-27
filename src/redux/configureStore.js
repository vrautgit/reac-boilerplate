import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger({
});

const configureStore = (initialState = {}) => (
  createStore(
    combineReducers({}),
    initialState,
    applyMiddleware(logger)
  )
);

const store = configureStore();

export default store;
