import { combineReducers } from 'redux';
import {adFetch} from './home';
import {loginFetch} from './login';
import {registerFetch} from './register';
const rootReducer = combineReducers({
    adFetch,
    loginFetch,
    registerFetch
});

export default rootReducer