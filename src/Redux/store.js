import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import RootReducer from './Root-reducer';

const middleWares = [logger];
const store = createStore(RootReducer, applyMiddleware(...middleWares))

export default store;