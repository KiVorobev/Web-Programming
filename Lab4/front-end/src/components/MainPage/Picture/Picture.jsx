import React, {useState} from 'react';
import './picture.css';
import {validateR} from "../../../scripts/formValidator";
import ResultDot from "../../UI/Figures/Circles/ResultDot/ResultDot"

const Picture = ({r}) => {

    const [dots, setDots] = useState([]);

    const handleCLick = (e) => {
        if (validateR()) {
            const coordinateX = e.nativeEvent.offsetX;
            const coordinateY = e.nativeEvent.offsetY;
            const x = 2 * (coordinateX - 175) / 135;
            const y = 2 * (175 - coordinateY) / 135;
            // Отправка точек
            console.log(dots);
        }
    }

    return (
        <svg onClick={handleCLick} xmlns="http://www.w3.org/2000/svg" width="350" height="350">

            <line stroke="black" x1="0" y1="175" x2="350" y2="175"/>
            <line stroke="black" x1="175" y1="0" x2="175" y2="350"/>

            <polygon points="175,0 170,15 180,15" stroke="black"/>
            <polygon points="350,175 335,170 335,180" stroke="black"/>

            <text x="335" y="165" fontSize="25">x</text>
            <text x="185" y="15" fontSize="25">y</text>

            <line stroke="black" x1="40" y1="170" x2="40" y2="180"/>
            <line stroke="black" x1="107.5" y1="170" x2="107.5" y2="180"/>
            <line stroke="black" x1="242.5" y1="170" x2="242.5" y2="180"/>
            <line stroke="black" x1="310" y1="170" x2="310" y2="180"/>

            <line stroke="black" x1="170" y1="40" x2="180" y2="40"/>
            <line stroke="black" x1="170" y1="107.5" x2="180" y2="107.5"/>
            <line stroke="black" x1="170" y1="242.5" x2="180" y2="242.5"/>
            <line stroke="black" x1="170" y1="310" x2="180" y2="310"/>

            <text x="30" y="160" fontSize="20">-2</text>
            <text x="97.5" y="160" fontSize="20">-1</text>
            <text x="237.5" y="160" fontSize="20">1</text>
            <text x="305" y="160" fontSize="20">2</text>

            <text x="185" y="45" fontSize="20">2</text>
            <text x="185" y="112" fontSize="20">1</text>
            <text x="185" y="247" fontSize="20">-1</text>
            <text x="185" y="314.5" fontSize="20">-2</text>

            <polygon id="square" fill="blue" fillOpacity="0.4"/>

            <path id="circle" fill="blue" fillOpacity="0.4"/>

            <polygon id="triangle" fill="blue" fillOpacity="0.4"/>

            {dots.map((dot) =>
                <ResultDot key={dot.id}
                           result={dot}
                />
            )}

        </svg>
    );
};

export default Picture;