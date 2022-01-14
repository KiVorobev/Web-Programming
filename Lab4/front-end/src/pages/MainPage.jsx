import React from 'react';
import InputBlock from "../components/MainPage/InputBlock/InputBlock";
import Picture from "../components/MainPage/Picture/Picture";
import ResultTable from "../components/MainPage/ResultTable/ResultTable";
import LogOutButton from "../components/UI/Buttons/LogOutButton/LogOutButton";
import CleanButton from "../components/UI/Buttons/CleanButton/CleanButton";
import "../styles/main_page.css"

const MainPage = () => {
    return (
        <div>
            <div className="up">
                <div className="log_out">
                    <LogOutButton>Log out</LogOutButton>
                </div>
                <div className="input_block">
                    <InputBlock/>
                </div>
                <div className="picture">
                    <Picture/>
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