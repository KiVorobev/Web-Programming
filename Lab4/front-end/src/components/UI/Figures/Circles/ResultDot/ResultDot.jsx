import React from 'react';

const ResultDot = ({result}) => {
    return (
        <circle cx={175 + (result.x * 135 / 2)}
                cy={175 - (result.y * 135 / 2)}
                r={result.r * 2}
                fill={result.result === true ? "green" : "red"}/>
    );
};

export default ResultDot;