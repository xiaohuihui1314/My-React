import {AD_LIST,AD_SUCCESS,AD_Error} from '../actions/home';
export function adFetch (state = {}, action) {
    switch (action.type) {
    case AD_LIST:
        return action.data;
    case AD_SUCCESS:
        return action.data;
    case AD_Error:
        return action.data;
    default:
        return state;
    }
}