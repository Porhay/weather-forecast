import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

import createSagaMiddleware from 'redux-saga'
import dataSaga from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware()


export default function configureStore() {
  let store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(dataSaga)
  return store
}

