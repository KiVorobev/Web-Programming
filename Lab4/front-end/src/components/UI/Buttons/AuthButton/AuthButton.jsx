import React from 'react';
import classes from './AuthButton.module.css';

const AuthButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.auth_button}>
            {children}
        </button>
    );
};

export default AuthButton;