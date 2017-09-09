import {combineReducers} from 'redux';
import {REGINSTER_START, REGINSTER_SUCCESS, REGINSTER_ERROR} from '../actions/register';

export function registerFetch(state = {}, action) {
    switch (action.type) {
        case REGINSTER_START:
            return action.data;
        case REGINSTER_SUCCESS:
            return action.data;
        case REGINSTER_ERROR:
            return action.data;
        default:
            return state;
    }

}

