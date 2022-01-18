import React, {useState} from 'react';
import InputBlock from "../components/MainPage/InputBlock/InputBlock";
import Picture from "../components/MainPage/Picture/Picture";
import ResultTable from "../components/MainPage/ResultTable/ResultTable";
import CleanButton from "../components/UI/Buttons/CleanButton/CleanButton";
import "../styles/main_page.css"
import {Link} from "react-router-dom";
import ResultDot from "../components/UI/Figures/Circles/ResultDot/ResultDot";
import AuthInput from "../components/UI/Inputs/AuthInput/AuthInput";

const MainPage = () => {

    const [rValue, setRValue] = useState(undefined);

    const createR = (r) => {
        setRValue(r);
    }

    return (
        <div>
            <div className="up">
                <div className="log_out">
                    <Link to="/" className="log_out_button">---------------------------------------Log out---------------------------------------</Link>
                </div>
                <div className="input_block">
                    <InputBlock createR={createR}/>
                </div>
                <div className="picture">
                    <Picture r={rValue}/>
                </div>
            </div>
            <div className="down">
                <div className="clean_button">
                    <CleanButton>Clean table</CleanButton>
                </div>
                <div className="result_table">
                    <ResultTable/>
                </div>
            </div>
        </div>
    );
}
export default MainPage;