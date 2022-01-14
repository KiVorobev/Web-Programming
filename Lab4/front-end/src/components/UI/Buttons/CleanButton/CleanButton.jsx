import React from 'react';
import classes from './CleanButton.module.css';

const CleanButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.clean_button}>
            {children}
        </button>
    );
};

export default CleanButton;