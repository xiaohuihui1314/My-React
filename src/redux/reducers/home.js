import {AD_LIST, AD_SUCCESS, AD_Error} from '../actions/home';
export function adFetch (state = { fetched: false }, action) {
    console.log(action);
    switch (action.type) {
    case AD_LIST: {
        return { message: '开始请求', state: 202 }
        break;
    }
    case AD_SUCCESS: {
        return { ...state, message: '请求结束', state: 200, fetched: true, ad: action.ad };
        break;
    }
    case AD_Error: {
        return { ...state, error: action.error };
        break;
    }
    }
    return state;
}