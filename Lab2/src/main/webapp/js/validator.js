let form = document.forms.form;
let xBoxes = form.elements.X;
let y = document.getElementById('Y');
let r = document.getElementById('R');

let xError = document.getElementById('X_error');
let yError = document.getElementById('Y_error');
let rError = document.getElementById('R_error');

function checkX() {
    let allRightX = true;
    let xSelected = false;
    for (let xBox of xBoxes) {
        if (xBox.checked) {
            xSelected = true;
            allRightX = true;
            xError.innerHTML = "";
        }
    }
    if (!xSelected) {
        xError.innerHTML = "Choose X coordinate!";
        allRightX = false;
    }
    return allRightX;
}

function checkY() {
    let allRightY;
    if (y.value.trim() != null && y.value.trim() !== "") {
        if (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/.test(y.value)) {
            if ((Number(y.value) > -5) && (Number(y.value) < 3)) {
                yError.innerHTML = "";
                allRightY = true;
            } else {
                yError.innerHTML = "Y can take value in the range (-5 ... 3)!";
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

function checkR() {
    let allRightR;
    if (r.value.trim() != null && r.value.trim() !== "") {
        if (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/.test(r.value)) {
            if ((Number(r.value) > 2) && (Number(r.value) < 5)) {
                rError.innerHTML = "";
                allRightR = true;
            } else {
                rError.innerHTML = "R can take value in the range (2 ... 5)!";
                allRightR = false;
            }
        } else {
            rError.innerHTML = "Value must be a number!";
            allRightR = false;
        }
    } else {
        rError.innerHTML = "Value cannot be empty!";
        allRightR = false;
    }
    return allRightR;
}

function checkXY(x, y, pictureError) {
    if (x < -3 || x > 5 || y <= -5 || y >= 3) {
        pictureError.innerHTML = "Choose valid values on the picture.";
        return false;
    } else {
        pictureError.innerHTML = "";
        return true;
    }
}