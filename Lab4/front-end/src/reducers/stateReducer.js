const stateReducer = (state = "Ты крутой!", action) => {
    switch (action.type) {
        case "SET_STATE":
            return action.state;
        default:
            return state;
    }
}

export default stateReducer;