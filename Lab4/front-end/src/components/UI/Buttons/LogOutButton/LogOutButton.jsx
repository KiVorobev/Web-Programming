import React from 'react';
import classes from './LogOutButton.module.css';

const LogOutButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.log_out_button}>
            {children}
        </button>
    );
};

export default LogOutButton;