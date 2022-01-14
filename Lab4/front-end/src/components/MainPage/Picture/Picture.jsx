import React from 'react';
import './picture.css';

const Picture = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg">

            <line stroke="black" x1="0" y1="175" x2="350" y2="175"></line>
            <line stroke="black" x1="175" y1="0" x2="175" y2="350"></line>

            <polygon points="175,0 170,15 180,15" stroke="black"></polygon>
            <polygon points="350,175 335,170 335,180" stroke="black"></polygon>

            <text x="335" y="165" fontSize="25">x</text>
            <text x="185" y="15" fontSize="25">y</text>

            <line stroke="black" x1="40" y1="170" x2="40" y2="180"></line>
            <line stroke="black" x1="110" y1="170" x2="110" y2="180"></line>
            <line stroke="black" x1="240" y1="170" x2="240" y2="180"></line>
            <line stroke="black" x1="310" y1="170" x2="310" y2="180"></line>

            <line stroke="black" x1="170" y1="40" x2="180" y2="40"></line>
            <line stroke="black" x1="170" y1="110" x2="180" y2="110"></line>
            <line stroke="black" x1="170" y1="240" x2="180" y2="240"></line>
            <line stroke="black" x1="170" y1="310" x2="180" y2="310"></line>

            <text x="35" y="160" fontSize="20">-R</text>
            <text x="90" y="160" fontSize="20">-R/2</text>
            <text x="225" y="160" fontSize="20">R/2</text>
            <text x="305" y="160" fontSize="20">R</text>

            <text x="185" y="45" fontSize="20">R</text>
            <text x="185" y="115" fontSize="20">R/2</text>
            <text x="185" y="245" fontSize="20">-R/2</text>
            <text x="185" y="315" fontSize="20">-R</text>

            <polygon points="110,175 175,175 175,40 110,40" fill="blue" fillOpacity="0.4"></polygon>

            <polygon points="40,175 175,175 175,240" fill="blue" fillOpacity="0.4"></polygon>

            <path fill="blue" fillOpacity="0.4"
                  d="M240,175 A80,110 90 0,1 175,240 L 175,175 Z"></path>
        </svg>
    );
};

export default Picture;