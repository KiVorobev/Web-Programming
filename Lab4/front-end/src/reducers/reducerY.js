const yReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_Y":
            if (!isNumber(action.value) || action.value === "") {
                return "";
            } else if (action.value.toString().length > 17) {
                return action.value.toString().substring(0, 17);
            }
            return +action.value;
        default:
            return state;
    }
}

function isNumber(value) {
    return !isNaN(value) && isFinite(+value);
}

export default yReducer;