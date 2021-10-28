document.getElementById('form').addEventListener("submit", checkForm);

var form = document.forms.form;
var xBoxes = form.elements.X;
var y = document.getElementById('Y');
var r = document.getElementById('R');

var xError = document.getElementById('X_error');
var yError = document.getElementById('Y_error');
var rError = document.getElementById('R_error');

var allRight = true;
var allRightX = true;
var allRightY = true;
var allRightR = true;

function checkForm() {
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

    if (y.value.trim() != null && y.value.trim() != "") {
        if (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/.test(y.value)) {
            if ((parseInt(y.value) > -5) && (parseInt(y.value) < 3)) {
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

    if (r.value.trim() != null && r.value.trim() != "") {
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


    if (allRightR && allRightY && allRightX){
        allRight = true;
    } else {
        allRight = false;
    }
    return (allRight);
}