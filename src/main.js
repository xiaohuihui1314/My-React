import {Provider} from 'react-redux';
import Index from './index';
import './assets/style/index.css';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>, document.getElementById("app"),
    () => {
        console.log("success!!!");
    }
);
