import {takeEvery, takeLatest} from 'redux-saga/effects';
import {getADList} from '../actions/home';
import {LOGIN_START, VERIFY_TOKEN} from '../actions/login';
import {REGINSTER_START} from '../actions/register';
import {getAd} from './home';
import {login, verifyToken} from './login';
import {register} from './register';
export default function* rootSaga () {
    yield [
        takeLatest(getADList, getAd),
        takeLatest(LOGIN_START, login),
        takeLatest(REGINSTER_START, register),
        takeLatest(VERIFY_TOKEN, verifyToken)
    ]
}
