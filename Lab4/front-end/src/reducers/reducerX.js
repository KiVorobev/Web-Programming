const xReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_X":
            return action.value;
        default:
            return state;
    }
}

export default xReducer;