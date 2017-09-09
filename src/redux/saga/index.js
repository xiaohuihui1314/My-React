import {takeEvery, takeLatest} from 'redux-saga/effects';
import {LOGIN_START, VERIFY_TOKEN} from '../actions/login';
import {REGINSTER_START} from '../actions/register';
import {login,verifyToken} from './login';
import {register} from './register';


export default function* rootSaga() {
    yield [
        takeLatest(LOGIN_START, login),
        takeLatest(REGINSTER_START, register),
        takeLatest(VERIFY_TOKEN, verifyToken)
    ]
}
