const wantToReg = (state = false, action) => {
    switch (action.type) {
        case "WANT":
            return true;
        case "DON'T_WANT":
            return false;
        default:
            return state;
    }
}

export default wantToReg;