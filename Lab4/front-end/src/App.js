import React, {useState} from 'react'
import axios from "axios";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"
import MainPage from "./pages/MainPage";
import StartPage from "./pages/StartPage";
import Header from "./components/UI/Header/Header";
import ErrorPage from "./pages/ErrorPage";

async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
}

function App() {
    const [value, setValue] = useState('Текст')

    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path={'/start'} exact component={StartPage}/>
                <Route path={'/main'} exact component={MainPage}/>
                <Route path={'/error'} exact component={ErrorPage}/>
                <Redirect to='/error'/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
