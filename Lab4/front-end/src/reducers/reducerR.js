const rReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_R":
            return action.value;
        default:
            return state;
    }
}

export default rReducer;