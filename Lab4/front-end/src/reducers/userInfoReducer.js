const userInfoReducer = (state = {
    login: "",
    password: ""
}, action) => {
    switch (action.type) {
        case "SET_INFO":
            return {
                login: action.login,
                password: action.password
            }
        default:
            return state;
    }
}

export default userInfoReducer;