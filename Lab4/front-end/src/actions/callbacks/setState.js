const setState = (state = "Ты крут!") => {
    return {
        type: "SET_STATE",
        state: state
    }
}

export default setState;