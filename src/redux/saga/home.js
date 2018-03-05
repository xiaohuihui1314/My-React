import {put, call, fork, select} from 'redux-saga/effects';
import {adSelector} from '../reducers/selectors';
import {get_AD_Success, get_AD_Error} from '../actions/home';
import fetch from '../../plugins/fetch';
function fetchPostsApi (id) {
    return fetch('get', '/getAdList', { adsenseId: id });
}
export function* getAd () {
    const id = yield select(adSelector);
    const json = yield call(fetchPostsApi, id);
    if (json.length > 0) {
        yield  put(get_AD_Success(json))
    } else {
        yield  put(get_AD_Error(json))
    }
}

