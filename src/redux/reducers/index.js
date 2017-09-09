import { combineReducers } from 'redux';
import {loginFetch} from './login';
import {registerFetch} from './register';
const rootReducer = combineReducers({
    loginFetch,
    registerFetch
});

export default rootReducer