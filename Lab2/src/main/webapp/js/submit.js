document.getElementById('form').addEventListener("submit", submit);

let pictureError = document.getElementById('picture_error');
let boxes = document.getElementsByName('X');

function getXValue() {
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].checked) {
            return boxes[i].value;
        }
    }
}

function checkForm() {
    pictureError.innerHTML = "";
    let xCond = checkX()
    let yCond = checkY()
    let rCond = checkR()
    return xCond && yCond && rCond;
}

function submit() {
    if (checkForm()) {
        sendRequest(getXValue(), y.value, r.value);
    }
}