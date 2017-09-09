import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Index from './index';
import './assets/style/index.css';
import store from './redux/store';
const Main = () => (
    <Router>
        <Index/>
    </Router>
);
ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>, document.getElementById("app"),
    () => {
        console.log("success!!!");
    }
);