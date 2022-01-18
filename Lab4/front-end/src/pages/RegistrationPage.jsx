import React, {useState} from 'react';
import '../styles/start_page.css'
import AuthInput from "../components/UI/Inputs/AuthInput/AuthInput";
import AuthButton from "../components/UI/Buttons/AuthButton/AuthButton";
import {Link} from "react-router-dom";
import {validation, validationForRepeat} from "../scripts/loginValidator";

const RegistrationPage = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        validation(login, "login_reg_error", password, "password_reg_error");
        validationForRepeat(password, repeatPassword, "password_repeat_error");
    }

    return (
        <div className="main-block">
            <h1>Authorization(register)</h1>
            <div className="change_block">
                <Link to="/" className="change_button">Go to sign in</Link>
            </div>
            <br/>
            <AuthInput type="text"
                       placeholder="login"
                       maxLength="18"
                       onChange={(e) => setLogin(e.target.value)}/>
            <div id="login_reg_error" className="login_error"/>
            <br/>
            <AuthInput type="password"
                       placeholder="password"
                       maxLength="16"
                       onChange={(e) => setPassword(e.target.value)}/>
            <div id="password_reg_error" className="login_error"/>
            <br/>
            <AuthInput type="password"
                       placeholder="password again"
                       maxLength="16"
                       onChange={(e) => setRepeatPassword(e.target.value)}/>
            <div id="password_repeat_error" className="login_error"/>
            <br/>
            <AuthButton onClick={handleLoginSubmit}>Register</AuthButton>
        </div>
    );
};

export default RegistrationPage;