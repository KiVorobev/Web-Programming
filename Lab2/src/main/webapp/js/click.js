function checkClick(event) {
    let r = $('#R').val();
    let rError = document.getElementById('R_error');
    let yError = document.getElementById('Y_error');
    let xError = document.getElementById('X_error');
    let pictureError = document.getElementById('picture_error');

    yError.innerHTML = "";
    xError.innerHTML = "";
    if (checkR(rError)) {
        let coordinateX = event.pageX - 921;
        let coordinateY = event.pageY - 180;
        let x = (r * (coordinateX - 175) / 135)/1.2;
        let y = (r * (175 - coordinateY) / 135)/1.2;
        if (checkXY(x, y, pictureError)) {
            sendRequest(x, y, r, coordinateX, coordinateY);
        }
    }
}

function checkR(rError) {
    let allRightR = true;
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
    return allRightR;
}

function checkXY(x, y, pictureError) {
    if (x < -3 || x > 5 || y < -5 || y > 3) {
        pictureError.innerHTML = "Choose valid values on the picture.";
        return false;
    } else {
        pictureError.innerHTML = "";
        return true;
    }
}

function sendRequest(x, y, r) {
    $.ajax({
        url: "./processing",
        type: "GET",
        data: {'X': x, 'Y': y, 'R': r},
        success: function (response){
            console.log(response);
            drawDots(response.x, response.y, response.r, response.result)
            addBean(response.x, response.y, response.r, response.currentTime, response.executionTime,response.result);
        }
    });
}