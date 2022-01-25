function validateX() {
    let x;
    let xInputs = document.getElementsByName("X");
    let xError = document.getElementById("x_error");
    for (let i = 0; i < xInputs.length; i++) {
        if (xInputs[i].checked) {
            x = xInputs[i].value;
        }
    }
    if (x === undefined) {
        xError.innerHTML = "You need to choose the value X!";
        return false;
    } else {
        xError.innerHTML = "";
        return true;
    }
}

function validateY(y) {
    let yError = document.getElementById('y_error');
    let allRightY;
    if (y !== null && y !== "") {
        if (/^(0$|-?[0-9]\d*(\.\d*[0-9]$)?|-?0\.\d*[0-9])$/.test(y)) {
            if ((Number(y) > -5) && (Number(y) < 5)) {
                yError.innerHTML = "";
                allRightY = true;
            } else {
                yError.innerHTML = "Y can take value in the range (-5 ... 5)!";
                allRightY = false;
            }
        } else {
            yError.innerHTML = "Value must be a number!";
            allRightY = false;
        }
    } else {
        yError.innerHTML = "Value cannot be empty!";
        allRightY = false;
    }
    return allRightY;
}

export function validateR(rValue) {
    let r;
    let rInputs = document.getElementsByName("R");
    let rError = document.getElementById("r_error");
    for (let i = 0; i < rInputs.length; i++) {
        if (rInputs[i].checked) {
            r = rInputs[i].value;
        }
    }
    if (r === undefined) {
        rError.innerHTML = "You need to choose the value R!";
        return false;
    } else {
        if (rValue <= 0) {
            rError.innerHTML = "R cannot be less than 0!";
            return false;
        } else {
            rError.innerHTML = "";
            return true;
        }
    }
}

export function validation(yValue, rValue) {
    let xRes = validateX();
    let yRes = validateY(yValue);
    let rRes = validateR(rValue);
    return xRes && yRes && rRes;
}