const setData = (data = [{
    X: "X",
    Y: "Y",
    R: "R",
    result: "Result",
    date: "Date"
}]) => {
    return {
        type: "SET_DATA",
        data: data
    }
}

export default setData;