import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { thunk } from 'redux-thunk';
import RootReducer from './Root-reducer';
import { persistStore } from 'redux-persist';

const middleWares = [thunk, logger];
const store = createStore(RootReducer, applyMiddleware(...middleWares))
const persistor = persistStore(store)

export {store, persistor};