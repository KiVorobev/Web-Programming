import React from 'react';
import Auth from "../components/StartPage/Auth/Auth";
import '../styles/start_page.css'

const StartPage = () => {
    return (
        <div className="main-block">
            <h1>Authorization</h1>
            <Auth/>
        </div>
    );
};

export default StartPage;