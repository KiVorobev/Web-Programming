import React, {useState} from 'react';
import AuthInput from "../components/UI/Inputs/AuthInput/AuthInput";
import AuthButton from "../components/UI/Buttons/AuthButton/AuthButton";
import {Link} from "react-router-dom";
import '../styles/start_page.css'
import {validation} from "../scripts/loginValidator";

const SignInPage = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        validation(login, "login_error", password, "password_error");
    }

    return (
        <div className="main-block">
            <h1>Authorization(sign in)</h1>
            <div className="change_block">
                <Link to="/register" className="change_button">Go to registration</Link>
            </div>
            <br/>
            <AuthInput type="text"
                       placeholder="login"
                       maxLength="18"
                       onChange={(e) => setLogin(e.target.value)}/>
            <div id="login_error" className="login_error"/>
            <br/>
            <AuthInput type="password"
                       placeholder="password"
                       maxLength="16"
                       onChange={(e) => setPassword(e.target.value)}/>
            <div id="password_error" className="login_error"/>
            <br/>
            <AuthButton onClick={handleLoginSubmit}>Sign in</AuthButton>
        </div>
    );
};

export default SignInPage;