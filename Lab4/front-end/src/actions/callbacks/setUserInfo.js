const setUserInfo = (login, password) => {
    return {
        type: "SET_INFO",
        login: login,
        password: password
    }
}

export default setUserInfo;
