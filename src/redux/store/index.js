import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
// import rootReducer from '../reducers';
import {adFetch} from '../reducers/home';
import logger from 'redux-logger';
import rootSaga from '../saga'
const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];
const store = createStore(
    adFetch,
    applyMiddleware(...middlewares)
);
sagaMiddleware.run(rootSaga);
export default store;
