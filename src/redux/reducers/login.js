import {combineReducers} from 'redux';
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, VERIFY_TOKEN} from '../actions/login';

export function loginFetch(state = {}, action) {
    switch (action.type) {
        case LOGIN_START:
            return action.data;
        case LOGIN_SUCCESS:
            return action.data;
        case LOGIN_ERROR:
            return action.data;
        case VERIFY_TOKEN:
            return action.data;
        default:
            return state;
    }

}

