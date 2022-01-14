import React from 'react';
import classes from './AuthInput.module.css';

const AuthInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.auth_input} {...props}/>
    );
});

export default AuthInput;