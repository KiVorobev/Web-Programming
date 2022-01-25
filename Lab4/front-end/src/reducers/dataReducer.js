const dataReducer = (state = [{
    X: "X",
    Y: "Y",
    R: "R",
    result: "Result",
    date: "Date"
}], action) => {
    switch (action.type) {
        case "ADD_DATA":
            state.push(action.data);
            return [...state];
        case "SET_DATA":
            return [{
                X: "X",
                Y: "Y",
                R: "R",
                result: "Result",
                date: "Date"
            }].concat(action.data);
        default:
            return state;
    }
}

export default dataReducer;