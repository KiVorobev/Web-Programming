import loggedReducer from "./isLogged"
import xReducer from "./reducerX"
import yReducer from "./reducerY"
import rReducer from "./reducerR"
import dataReducer from "./dataReducer"
import wantToRegReducer from "./wantToRegReducer";
import userInfoReducer from "./userInfoReducer";
import {combineReducers} from "redux"
import stateReducer from "./stateReducer";

const combinedReducer = combineReducers({
    isLogged: loggedReducer,
    X: xReducer,
    Y: yReducer,
    R: rReducer,
    data: dataReducer,
    wantReg: wantToRegReducer,
    userInfo: userInfoReducer,
    state: stateReducer
})

export default combinedReducer;