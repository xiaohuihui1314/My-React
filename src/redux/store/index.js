import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
// import logger from 'redux-logger';
import rootSaga from '../saga'
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
// const middlewares = [logger, sagaMiddleware];
console.log(createStore.toString());
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);
export default store;
