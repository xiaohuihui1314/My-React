import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import routes from './router';

const index = () => {
    return (
        <div>
            <div style={{display: 'flex'}}>
                <div style={{
                    padding: '10px',
                    width: '40%',
                    background: '#f0f0f0'
                }}>
                    <ul style={{listStyleType: 'none', padding: 0}}>
                        <li><Link to="/">首页1</Link></li>
                        <li><Link to="/login">登陆</Link></li>
                        <li><Link to="/register">注册</Link></li>
                    </ul>
                    <Route  exact path="/" component={routes.index} />
                    <Route path="/:id" component={Child}/>
                </div>
            </div>
        </div>
    )
};
const Child = ({ match }) => (
    <div>
        <Route  path="/:id" component={routes[match.params.id]} />
    </div>
);
export default index;