export default class extends React.Component{
    render(){
        return(
            <div>
                <p>欢迎登陆</p>
                <form>
                    <div className="form-box">
                        <label>用户名：</label><input type="text"/>
                    </div>
                    <div className="form-box">
                        <label>密码：</label><input type="password"/>
                    </div>
                    <div className="form-box">
                       <button type="button">登陆</button>
                    </div>
                </form>
            </div>
        )
    }
}