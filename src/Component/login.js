import {connect} from  'react-redux';
import {loginStart,verifyToken}  from '../redux/actions/login';
import {Form, Icon, Input, Button} from 'antd';
import {Link} from 'react-router-dom'

const FormItem = Form.Item;
class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.loginSubmit = this.loginSubmit.bind(this);
        this.verifyToken = this.verifyToken.bind(this);
        this.state = {
            loading: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loginFetch.id) {
            this.setState({loading: false})
            this.props.history.push('/')
        }else {
            console.log(nextProps.loginFetch)
        }
    }
    verifyToken(){
        console.log(44)
        this.props.dispatch(verifyToken({a:1}));
    }
    loginSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(loginStart(values));
                this.setState({loading: true})
            }

        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>

                <Form onSubmit={this.loginSubmit} className="login-form">
                    {this.state.loading ? <h1>登录中~~~</h1> : ''}
                    <h2>欢迎登陆</h2>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: '请输入用户名!'}],
                        })(
                            <Input type="text" placeholder="用户名"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('passWord', {
                            rules: [{required: true, message: '请输入密码!'}],
                        })(
                            <Input type="password" placeholder="密码"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" className="login-form-button" htmlType="submit">登录</Button>
                        <Button type="primary" className="login-form-button" htmlType="button" style={{'marginTop':'25px'}} onClick={this.verifyToken}>验证token</Button>
                        <p>还没有帐号？ <Link to="register">立即注册</Link></p>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const Login = Form.create()(LoginForm);
function mapStateToProps(state) {
    const {loginFetch} = state;
    return {
        loginFetch
    }
}
export default connect(mapStateToProps)(Login);