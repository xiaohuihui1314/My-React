import {put, call, fork, select} from 'redux-saga/effects';
import {registerSelector} from '../reducers/selectors';
import {registerSuccess,registerError} from '../actions/register';
import fetch from '../../plugins/fetch';
function fetchPostsApi(data) {
    return fetch('post', '/register',data)
}
export function* register() {
    const registerData = yield select(registerSelector);
    const json = yield call(fetchPostsApi, registerData);
    if (json.code === 200) {
        yield  put(registerSuccess(json))
    }else {
        yield  put(registerError(json))
    }
}

