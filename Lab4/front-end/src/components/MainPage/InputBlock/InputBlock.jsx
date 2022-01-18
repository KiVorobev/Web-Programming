import React, {useState} from 'react';
import MyInput from "../../UI/Inputs/MyInput/MyInput";
import FormInput from "../../UI/Inputs/FormInput/FormInput";
import FormRadio from "../../UI/Inputs/FormRadio/FormRadio";
import {validateR, validation} from "../../../scripts/formValidator";
import "./input_block.css";

const InputBlock = ({createR}) => {

        const [xValue, setXValue] = useState(undefined);
        const [yValue, setYValue] = useState("");
        const [rValue, setRValue] = useState(undefined);

        const handleFormSubmit = (event) => {
            event.preventDefault();
            validation(yValue, rValue);
        }

        function pictureDrawing(r) {
            if (validateR()) {
                createR(r);
                let val_40 = 175.0 - (135.0 * r / 2);
                let val_110 = 175.0 - (65.0 * r / 2);
                let val_310 = 175.0 + (135.0 * r / 2);
                let circ_val = 130 - (33.0 * 2 * (2 - r));
                let square = document.getElementById("square");
                let circle = document.getElementById("circle");
                let triangle = document.getElementById("triangle");
                triangle.setAttribute("points", "175,175 175," + val_110 + " " + val_310 + ",175");
                square.setAttribute("points", val_40 + "," + val_310 + " " + val_40 + ",175 175,175 175," + val_310);
                circle.setAttribute("d", "M" + val_310 + ",175 A" + circ_val + "," + circ_val + " 90 0,1 175," + val_310 + " L 175,175 Z");
            }
        }

        function reset() {
            document.getElementById("x_error").innerHTML = "";
            document.getElementById("y_error").innerHTML = "";
            document.getElementById("r_error").innerHTML = "";
            let square = document.getElementById("square");
            let circle = document.getElementById("circle");
            let triangle = document.getElementById("triangle");
            triangle.removeAttribute("points");
            square.removeAttribute("points");
            circle.removeAttribute("d");
            setXValue(xValue + undefined);
            setRValue(rValue + undefined);
        }

        return (
            <form onSubmit={handleFormSubmit}>
                <div className="X_input">
                    <label className="text">Choose X coordinate:</label>
                    <div className="X_values">
                        <label><FormRadio name="X" onChange={(e) => setXValue(-2)}/>-2</label>
                        <label><FormRadio name="X" onChange={(e) => setXValue(-1.5)}/>-1.5</label>
                        <label><FormRadio name="X" onChange={(e) => setXValue(-1)}/>-1</label>
                        <label><FormRadio name="X" onChange={(e) => setXValue(-0.5)}/>-0.5</label>
                        <label><FormRadio name="X" onChange={(e) => setXValue(0)}/>0</label>
                        <label><FormRadio name="X" onChange={(e) => setXValue(0.5)}/>0.5</label>
                        <label><FormRadio name="X" onChange={(e) => setXValue(1)}/>1</label>
                        <label><FormRadio name="X" onChange={(e) => setXValue(1.5)}/>1.5</label>
                        <label><FormRadio name="X" onChange={(e) => setXValue(2)}/>2</label>
                    </div>
                    <div id="x_error" className="x_error"/>
                </div>
                <div className="Y_input">
                    <label className="text">Enter Y coordinate:</label>
                    <div className="Y_values">
                        <MyInput
                            id="Y"
                            type="text"
                            placeholder="Value (-5 ... 5)"
                            maxLength="8"
                            onChange={(e) => setYValue(e.target.value)}
                        />
                    </div>
                    <div id="y_error" className="y_error"/>
                </div>
                <div className="R_input">
                    <label className="text">Choose R value:</label>
                    <div className="R_values">
                        <label><FormRadio name="R" disabled/>-2</label>
                        <label><FormRadio name="R" disabled/>-1.5</label>
                        <label><FormRadio name="R" disabled/>-1</label>
                        <label><FormRadio name="R" disabled/>-0.5</label>
                        <label><FormRadio name="R" disabled/>0</label>
                        <label><FormRadio name="R" onChange={(e) => setRValue(0.5)}
                                          onClick={(e) => pictureDrawing(0.5)}/>0.5</label>
                        <label><FormRadio name="R" onChange={(e) => setRValue(1)}
                                          onClick={(e) => pictureDrawing(1)}/>1</label>
                        <label><FormRadio name="R" onChange={(e) => setRValue(1.5)}
                                          onClick={(e) => pictureDrawing(1.5)}/>1.5</label>
                        <label><FormRadio name="R" onChange={(e) => setRValue(2)}
                                          onClick={(e) => pictureDrawing(2)}/>2</label>
                    </div>
                    <div id="r_error" className="r_error"/>
                </div>
                <div className="buttons">
                    <FormInput type="submit" value="Submit"/>
                    <FormInput type="reset" value="Reset" onClick={reset}/>
                </div>
            </form>
        );
    }
;

export default InputBlock;