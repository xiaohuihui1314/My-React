import Index from './index';
import {HashRouter as Router} from 'react-router-dom';
const Main = () => (
    <Router>
        <Index/>
    </Router>
);
ReactDOM.render(
    <Main/>,
    document.getElementById("app"), () => {
        console.log("SUCCESSS!!!");
    });