import React from 'react';
import MyInput from "../../UI/Inputs/MyInput/MyInput";
import FormInput from "../../UI/Inputs/FormInput/FormInput";
import FormRadio from "../../UI/Inputs/FormRadio/FormRadio";
import {validateX, validateY, validateR} from "../../../scripts/validator";
import "./input_block.css";

const InputBlock = () => {
    return (
        <form onSubmit={validation}>
            <div className="X_input">
                <label className="text">Choose X coordinate:</label>
                <div className="X_values">
                    <label><FormRadio name="X"/>-2</label>
                    <label><FormRadio name="X"/>-1.5</label>
                    <label><FormRadio name="X"/>-1</label>
                    <label><FormRadio name="X"/>-0.5</label>
                    <label><FormRadio name="X"/>0</label>
                    <label><FormRadio name="X"/>0.5</label>
                    <label><FormRadio name="X"/>1</label>
                    <label><FormRadio name="X"/>1.5</label>
                    <label><FormRadio name="X"/>2</label>
                </div>
                <div id="x_error" className="x_error"/>
            </div>
            <div className="Y_input">
                <label className="text">Enter Y coordinate:</label>
                <div className="Y_values">
                    <MyInput id="Y" type="text" placeholder="Value (-5 ... 5)"/>
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
                    <label><FormRadio name="R"/>0.5</label>
                    <label><FormRadio name="R"/>1</label>
                    <label><FormRadio name="R"/>1.5</label>
                    <label><FormRadio name="R"/>2</label>
                </div>
                <div id="r_error" className="r_error"/>
            </div>
            <div className="buttons">
                <FormInput type="submit" value="Submit" onClick={validation()}/>
                <FormInput type="reset" value="Reset"/>
            </div>
        </form>
    );
};

function validation() {
    return validateX() & validateY(), validateR();
}

export default InputBlock;