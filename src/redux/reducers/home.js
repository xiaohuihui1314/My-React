import {AD_LIST, AD_SUCCESS, AD_Error} from '../actions/home';
export function adFetch (state = { fetched: false }, action) {
    switch (action.type) {
    case AD_LIST:
        return action.id;
        break;
    case AD_SUCCESS:
        return { ad: action.ad };
        break;
    case AD_Error:
        return action.error;
        break;
    default:
        return state;
    }
}