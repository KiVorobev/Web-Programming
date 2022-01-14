import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1 style={{color: "red"}}>
                You have gone to a non-existent page!
            </h1>
            <Link to='/start'>Back to start page</Link>
        </div>
    );
};

export default ErrorPage;