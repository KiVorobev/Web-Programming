import {useDispatch, useSelector} from "react-redux";
import sendRequest, {preparations} from "../../actions/sendRequest";
import setData from "../../actions/callbacks/setData";
import setState from "../../actions/callbacks/setState";
import logIn from "../../actions/callbacks/logIn";
import {Button} from "react-toolbox/lib/button";
import wantReg from "../../actions/callbacks/wantReg";
import setUserInfo from "../../actions/callbacks/setUserInfo";
import Header from "../Header/Header";
import {validation} from "../../actions/validators/loginValidator"
import '../../styles/start_page.css';


function Auth() {
    const dispatch = useDispatch();
    const X = useSelector(state => state.X);
    const Y = useSelector(state => state.Y);
    const R = useSelector(state => state.R);
    const data = useSelector(state => state.data);
    const userInfo = useSelector(state => state.userInfo);
    const message = useSelector(state => state.state)

    function signIn() {
        if (validation(userInfo.login, "login_error", userInfo.password, "password_error")) {
            let data = new FormData();
            data.set("login", userInfo.login);
            data.set("password", userInfo.password);
            sendRequest("/login", data).then(response => {
                if (response.ok) {
                    preparations(data).then(response => {
                        if (response.ok) {
                            return response.json().then(taken => {
                                dispatch(setData(taken));
                            });
                        } else {
                            return response.text().then(text => dispatch(setState(text)));
                        }
                    });
                    dispatch(setState());
                    dispatch(logIn());
                } else {
                    document.getElementById("password_error").innerHTML = "Wrong password or such user does not exist!"
                    return response.text().then(text => dispatch(setState(text)))
                }
            }).catch(err => console.log(err));
        }
    }

    return (
        <div>
            <Header/>
            <div id="page" className="main-block">
                <h1>Authorization(sign in)</h1>
                <Button label="Go to registration" className="change_button" onClick={() => dispatch(wantReg(true))}/>
                <form>
                    <label htmlFor="login">Login<br/></label>
                    <input id="login" className="auth_input" onChange={(val) => {
                        dispatch(setUserInfo(val.target.value, userInfo.password))
                    }}/>
                    <div id="login_error" className="login_error"/>
                    <label htmlFor="password">Password<br/></label>
                    <input id="password" className="auth_input" type="password" onChange={(val) => {
                        dispatch(setUserInfo(userInfo.login, val.target.value))
                    }}/>
                    <div id="password_error" className="login_error"/>
                </form>
                <Button label="Sign In" className="auth_button" onClick={signIn}/>
            </div>
        </div>
    );
}


export default Auth;