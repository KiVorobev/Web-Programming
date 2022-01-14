import React from 'react';
import '../../../styles/start_page.css'
import AuthInput from "../../UI/Inputs/AuthInput/AuthInput";
import AuthButton from "../../UI/Buttons/AuthButton/AuthButton";
import router from "react-router-dom/Router";

const Auth = () => {
    return (
        <div>
            <AuthInput type="text" placeholder="Enter login"/>
            <br/>
            <AuthInput type="password" placeholder="Enter password"/>
            <br/>
            <AuthButton onClick={() => router.push('/main')}>Sign in</AuthButton>
            <AuthButton onClick={() => router.push('/main')}>Sign up</AuthButton>
        </div>
    );
};

export default Auth;