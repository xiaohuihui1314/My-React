import {put, call, fork, select} from 'redux-saga/effects';
import {loginSelector} from '../reducers/selectors';
import {loginSuccess, loginError} from '../actions/login';
import fetch from '../../plugins/fetch';
function fetchPostsApi(data) {
    return fetch('post', '/login', data)
}
export function* login() {
    const loginData = yield select(loginSelector);
    const json = yield call(fetchPostsApi, loginData);
    if (json.id) {
        localStorage.setItem('userToken', json.token);
        yield  put(loginSuccess(json))
    } else {
        yield  put(loginError(json))

    }
}

function fetchVerify() {
    return fetch('get', '/verifyToken')
}
export function*  verifyToken() {
    console.log(5555)
    const loginData = yield select(loginSelector);
    const json = yield call(fetchVerify, loginData);
    console.log(json)
}
