import {connect} from 'react-redux';
import {registerStart}  from '../redux/actions/register';
import {Form, Icon, Input, Button} from 'antd';
import {Link} from 'react-router-dom'


const FormItem = Form.Item;

class registerFrom extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {
            loading: false
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.registerFetch.code===200) {
            this.setState({loading: false})
        }else {
            console.log(nextProps.registerFetch)
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.dispatch(registerStart(values));
                this.setState({loading: true})
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    {this.state.loading ? <h1>注册中~~~</h1> : ''}
                    <h2>请注册</h2>
                    <FormItem >
                        {getFieldDecorator('userName', {
                            rules: [{required: true, message: '请输入用户名!'}],
                        })(
                            <Input type="text" placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('passWord', {
                            rules: [{required: true, message: '请输入密码!'}],
                        })(
                            <Input type="password" placeholder="Password"/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Register
                        </Button>
                        <p>已有账号？ <Link to="login">请登录</Link></p>
                    </FormItem>
                </Form>
            </div>
        );
    }
}
const Register = Form.create()(registerFrom);

function mapStateToProps(state) {
    const {registerFetch} = state;
    return {
        registerFetch
    }
}
export default connect(mapStateToProps)(Register);