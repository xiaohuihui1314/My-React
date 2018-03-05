import {put, call, fork, select} from 'redux-saga/effects';
import {adSelector} from '../reducers/selectors';
import {get_AD_Success, get_AD_Error} from '../actions/home';
import fetch from '../../plugins/fetch';
function fetchPostsApi (data) {
    // return fetch('get', '/getAdList', { adsenseId: data })
    return new Promise(function(a) {
        setTimeout(function() {
            a(100);
        }, 3000);
    })
}
export function* getAd () {
    const adData = yield select(adSelector);
    const json = yield call(fetchPostsApi, adData);
    console.log(json);
    if (json) {
        yield  put(get_AD_Success(json))
    } else {
        yield  put(get_AD_Error(json))
    }
}

