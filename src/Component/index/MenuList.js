import {Link} from 'react-router-dom'
export default class MenuList extends React.Component {
    render() {
        return (
            <div className="index-nav-wrap">
                <section className="index-nav clear">
                    <div className="navbar-header">welcome to you!</div>
                    <ul className="navbar-ul">
                        <li>
                            <Link to="/login">登陆</Link>
                        </li>
                        <li>
                            <Link to="/register">注册</Link>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}