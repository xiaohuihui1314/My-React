import {put, call, fork, select} from 'redux-saga/effects';
import {adSelector} from '../reducers/selectors';
import {ADSuccess, ADError} from '../actions/home';
import fetch from '../../plugins/fetch';
function fetchPostsApi (data) {
    return fetch('get', '/getAdList', { adsenseId: data })
}
export function* getAd () {
    const adData = yield select(adSelector);
    const json = yield call(fetchPostsApi, adData);
    if (json.length > 1) {
        console.log(2);
        yield  put(ADSuccess(json))
    } else {
        // yield  put(ADError(json))
    }
}

