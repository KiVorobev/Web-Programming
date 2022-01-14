import MainPage from "../pages/MainPage";
import StartPage from "../pages/StartPage";


export const privateRoutes = [
    {path: '/main', component: MainPage, exact: true},
]

export const publicRoutes = [
    {path: '/start', component: StartPage, exact: true},
]