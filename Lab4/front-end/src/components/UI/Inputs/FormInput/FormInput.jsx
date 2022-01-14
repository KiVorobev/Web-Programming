import React from 'react';
import classes from './FormInput.module.css';

const AuthInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.form_input} {...props}/>
    );
});

export default AuthInput;