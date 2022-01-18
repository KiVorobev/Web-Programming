import MainPage from "../pages/MainPage";
import SignInPage from "../pages/SignInPage";


export const privateRoutes = [
    {path: '/main', component: MainPage, exact: true},
]

export const publicRoutes = [
    {path: '/start', component: SignInPage, exact: true},
]