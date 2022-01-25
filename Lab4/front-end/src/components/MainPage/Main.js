import React from "react";
import "../../styles/main_page.css"
import {Button} from "react-toolbox/lib/button";
import Input from 'react-toolbox/lib/input';

import {useDispatch, useSelector} from "react-redux";
import setX from "../../actions/callbacks/setX";
import setY from "../../actions/callbacks/setY";
import setR from "../../actions/callbacks/setR";
import logOut from "../../actions/callbacks/logOut";
import clearData from "../../actions/callbacks/clearData";
import sendRequest from "../../actions/sendRequest";
import addData from "../../actions/callbacks/addData";
import setState from "../../actions/callbacks/setState";
import Header from "../Header/Header";
import {validateR, validation} from "../../actions/validators/formValidator";


function Main() {
    const dispatch = useDispatch();
    const X = useSelector(state => state.X)
    const Y = useSelector(state => state.Y)
    const R = useSelector(state => state.R)
    const data = useSelector(state => state.data)
    const userInfo = useSelector(state => state.userInfo)
    const message = useSelector(state => state.state)

    let val_40 = 175.0 - (135.0 * R / 2)
    let val_110 = 175.0 - (65.0 * R / 2)
    let val_310 = 175.0 + (135.0 * R / 2)
    let circ_val = 130 - (33.0 * 2 * (2 - R))

    let dots = data.map(function (hit) {
        let xCord = hit.X * 135 / 2 + 175
        let yCord = 175 - hit.Y * 135 / 2
        return <circle cx={xCord}
                       cy={yCord}
                       r={(2 + hit.R / 2)}
                       fill={hit.result.toString().toLowerCase() === 'true' ? "green" : "red"}/>
    });

    let results = data.map(function (hit) {
        return <tr>
            <th>{hit.X}</th>
            <th>{hit.Y}</th>
            <th>{hit.R}</th>
            <th>{hit.date.substring(0, 19)}</th>
            <th className={hit.result.toString() === 'Result' ? 'head' : hit.result.toString() === 'true' ? 'true' : 'false'}>{hit.result}</th>
        </tr>;
    });

    return (
        <div>

            <Header/>
            <Button id="logOut" label="Log out" className="log_out" onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("password");
                dispatch(clearData());
                dispatch(logOut());
            }}/>

            <div id="up">
                <div id="input_block">
                    <form>
                        <div id="x_input">
                            <text>Choose X coordinate:</text>
                            <div id="x_values">
                                <label><input type="radio" label="-2" name="X"
                                              onClick={() => dispatch(setX(-2))}/>-2</label>
                                <label><input type="radio" label="-1.5" name="X" onClick={() => dispatch(setX(-1.5))}/>-1.5</label>
                                <label><input type="radio" label="-1" name="X"
                                              onClick={() => dispatch(setX(-1))}/>-1</label>
                                <label><input type="radio" label="-0.5" name="X" onClick={() => dispatch(setX(-0.5))}/>-0.5</label>
                                <label><input type="radio" label="0" name="X"
                                              onClick={() => dispatch(setX(0))}/>0</label>
                                <label><input type="radio" label="0.5" name="X" onClick={() => dispatch(setX(0.5))}/>0.5</label>
                                <label><input type="radio" label="1" name="X"
                                              onClick={() => dispatch(setX(1))}/>1</label>
                                <label><input type="radio" label="1.5" name="X" onClick={() => dispatch(setX(1.5))}/>1.5</label>
                                <label><input type="radio" label="2" name="X"
                                              onClick={() => dispatch(setX(2))}/>2</label>
                            </div>
                            <div id="x_error"/>
                        </div>
                        <div id="y_input">
                            <text>Enter Y in range (-5 ... 5):</text>
                            <br/>
                            <Input id="Y" type="number" value={Y} onChange={(val) => {
                                dispatch(setY(val));
                            }}/>
                            <div id="y_error"/>
                        </div>
                        <div>
                            <div id="r_input">
                                <text>Value of R:</text>
                                <br/>
                                <div id="r_values">
                                    <label><input type="radio" label="-2" name="R" disabled/>-2</label>
                                    <label><input type="radio" label="-1.5" name="R" disabled/>-1.5</label>
                                    <label><input type="radio" label="-1" name="R" disabled/>-1</label>
                                    <label><input type="radio" label="-0.5" name="R" disabled/>-0.5</label>
                                    <label><input type="radio" label="0" name="R" disabled/>0</label>
                                    <label><input type="radio" label="0.5" name="R"
                                                  onClick={() => dispatch(setR(0.5))}/>0.5</label>
                                    <label><input type="radio" label="1" name="R"
                                                  onClick={() => dispatch(setR(1))}/>1</label>
                                    <label><input type="radio" label="1.5" name="R"
                                                  onClick={() => dispatch(setR(1.5))}/>1.5</label>
                                    <label><input type="radio" label="2" name="R"
                                                  onClick={() => dispatch(setR(2))}/>2</label>
                                </div>
                                <div id="r_error"/>
                            </div>
                        </div>
                        <div id="send_button_block">
                            <Button id="send_button" label="Check" onClick={() => {
                                if (validation(Y, R)) {
                                    let data = new FormData();
                                    data.set("X", X);
                                    data.set("Y", Y);
                                    data.set("R", R);
                                    console.log(localStorage.getItem("user"))
                                    console.log(localStorage.getItem("password"))
                                    data.set("login", localStorage.getItem("user"));
                                    data.set("password", localStorage.getItem("password"));
                                    sendRequest("/hits/add", data, dispatch).then(response => {
                                        if (response.ok) {
                                            return response.json().then(hit => {
                                                dispatch(addData(hit[0]));
                                                dispatch(setState())
                                            });
                                        } else {
                                            return response.text().then(text => dispatch(setState(text)));
                                        }
                                    }).catch(err => console.log(err));
                                }
                            }}/>
                        </div>
                    </form>
                </div>

                <div id="picture">
                    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" onClick={(e) => {
                        e.preventDefault();
                        if (validateR(R, "r_error")) {
                            const coordinateX = e.nativeEvent.offsetX;
                            const coordinateY = e.nativeEvent.offsetY;
                            const x = 2 * (coordinateX - 175) / 135;
                            const y = 2 * (175 - coordinateY) / 135;
                            let data = new FormData();
                            data.set("X", x.toFixed(6).toString());
                            data.set("Y", y.toFixed(6).toString());
                            data.set("R", R);
                            data.set("login", localStorage.getItem("user"));
                            data.set("password", localStorage.getItem("password"));
                            sendRequest("/hits/add", data, dispatch).then(response => {
                                if (response.ok) {
                                    return response.json().then(hit => {
                                        dispatch(addData(hit[0]));
                                        dispatch(setState())
                                    });
                                } else {
                                    return response.text().then(text => dispatch(setState(text)));
                                }
                            }).catch(err => console.log(err));
                        }
                    }}>

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

                        <polygon id="square" points={`${val_40},${val_310} ${val_40},175 175,175 175,${val_310}`}
                                 fill="blue" fillOpacity="0.4"/>

                        <polygon id="triangle" points={`175,175 175,${val_110} ${val_310},175`} fill="blue"
                                 fillOpacity="0.4"/>

                        <path id="circle"
                              d={`M${val_310},175 A${circ_val},${circ_val} 90 0,1 175,${val_310} L 175,175 Z`}
                              fill="blue" fillOpacity="0.4"/>

                        {dots}

                    </svg>
                </div>
            </div>

            <div id="down">
                <div id="results">
                    <table id="the-only-table">
                        <caption>Results:</caption>
                        {results}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Main;