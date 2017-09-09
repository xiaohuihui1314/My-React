import {Route, Link} from 'react-router-dom';

import routes from './router';

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={routes.index}/>
                <Route path="/:id" component={Child}/>
            </div>
        )
    }
};
const Child = ({match}) => (
    <div>
        <Route path="/:id" component={routes[match.params.id]}/>
    </div>
);
