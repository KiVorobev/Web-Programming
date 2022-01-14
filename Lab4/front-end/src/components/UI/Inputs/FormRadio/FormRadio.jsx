import React from 'react';
import classes from './FormRadio.module.css';

const FormRadio = React.forwardRef((props, ref) => {
    return (
        <input type="radio" ref={ref} className={classes.form_radio} {...props}/>
    );
});

export default FormRadio;