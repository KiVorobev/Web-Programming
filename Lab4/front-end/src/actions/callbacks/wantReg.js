const wantReg = (state = true) => {
    if (state) {
        return {
            type: "WANT"
        }
    } else {
        return {
            type: "DON'T_WANT"
        }
    }
}

export default wantReg;