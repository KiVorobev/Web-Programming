import React, {useState} from 'react'
import axios from "axios";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import Header from "./components/UI/Header/Header";
import ErrorPage from "./pages/ErrorPage";
import RegistrationPage from "./pages/RegistrationPage";

async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
}

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path={'/'} exact component={SignInPage}/>
                <Route path={'/register'} exact component={RegistrationPage}/>
                <Route path={'/main'} exact component={MainPage}/>
                <Route path={'/error'} exact component={ErrorPage}/>
                <Redirect to='/error'/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;