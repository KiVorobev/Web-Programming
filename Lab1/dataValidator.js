document.getElementById('form').addEventListener("submit", checkForm);

var x = document.getElementById('X');
var y = document.getElementById('Y');
var r = document.getElementById('R');

var xError = document.getElementById('X_error');
var yError = document.getElementById('Y_error');
var rError = document.getElementById('R_error');

var allRight = true;
var allRightX = true;
var allRightY = true;
var allRightR = true;

function checkForm(event) {
    event.preventDefault();
    if (x.value.trim() != null && x.value.trim() != "") {
        if (/^(0$|-?[1-9]\d*(\.\d*[1-9]$)?|-?0\.\d*[1-9])$/.test(x.value)) {
            if ((parseInt(x.value) > -3) && (parseInt(x.value) < 3)) {
                xError.innerHTML = "";
                allRightX = true;
            } else {
                xError.innerHTML = "X can take value in the range (-3 ... 3)!";
                allRightX = false;
            }
        } else {
            xError.innerHTML = "Value must be a number!";
            allRightX = false;
        }
    } else {
        xError.innerHTML = "Value cannot be empty!";
        allRightX = false;
    }

    if (y.value == "Select Y coordinate") {
        yError.innerHTML = "Value cannot be empty!";
        allRightY = false;
    } else {
        yError.innerHTML = "";
        allRightY = true;
    }

    if (r.value == "Select R value") {
        rError.innerHTML = "Value cannot be empty!";
        allRightR = false;
    } else {
        rError.innerHTML = "";
        allRightR = true;
    }
    if (allRightR && allRightY && allRightX){
        allRight = true;
    } else {
        allRight = false;
    }
    return (allRight);
}