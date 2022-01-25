import {useDispatch, useSelector} from "react-redux";
import Auth from "./components/StartPage/Auth";
import Reg from "./components/StartPage/Reg"
import Main from "./components/MainPage/Main";
import sendRequest, {preparations} from "./actions/sendRequest";
import logIn from "./actions/callbacks/logIn";
import setData from "./actions/callbacks/setData";
import setState from "./actions/callbacks/setState";


function App() {
    const isLogged = useSelector(state => state.isLogged);
    const doesWantReg = useSelector(state => state.wantReg);
    const dispatch = useDispatch();
    if (!isLogged) {
        let login = localStorage.getItem("user");
        let password = localStorage.getItem("password");
        if (!login || !password) {
            if (!doesWantReg) {
                return (
                    <div>
                        {Auth()}
                    </div>
                );
            } else {
                return (
                    <div>
                        {Reg()}
                    </div>
                );
            }
        }
        let data = new FormData();
        data.set("login", login);
        data.set("password", password);
        sendRequest("/login", data).then(response => {
            if (response.ok) {
                preparations(data).then(response => {
                    if (response.ok) {
                        return response.json().then(taken => {
                            dispatch(setData(taken));
                        });
                    } else {
                        return response.text().then(text => dispatch(setState(text)));
                    }
                });
                dispatch(setState());
                dispatch(logIn());
            } else {
                return response.text().then(text => dispatch(setState(text)))
            }
        }).catch(err => console.log(err));

        return (
            <div>
                {Auth()}
            </div>
        );
    } else {
        return (
            <div>
                {Main()}
            </div>
        );
    }
}

export default App;
