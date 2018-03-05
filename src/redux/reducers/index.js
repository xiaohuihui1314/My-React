import {combineReducers} from 'redux';
import {adFetch} from './home';
import {loginFetch} from './login';
import {registerFetch} from './register';
// combineReducers的作用：
// 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数。
// 然后就可以对这个 reducer 调用 createStore方法。
const rootReducer = combineReducers({
    adFetch,
    loginFetch,
    registerFetch
});
export default rootReducer