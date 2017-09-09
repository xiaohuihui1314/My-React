import split from './Splitting';

const routes =
    {
        a: split(() => import(/* webpackChunkName: "index" */"../Component/index")),
        index: split(() => import(/* webpackChunkName: "index" */"../Component/index")),
        register: split(() => import(/* webpackChunkName: "register" */"../Component/register")),
        login: split(() => import(/* webpackChunkName: "login" */"../Component/login")),
    };
export default routes;