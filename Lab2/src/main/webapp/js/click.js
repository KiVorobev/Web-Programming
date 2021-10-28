function checkClick(event) {
    let r = $('#R').val();
    let rError = document.getElementById('R_error');
    let yError = document.getElementById('Y_error');
    let xError = document.getElementById('X_error');

    yError.innerHTML = "";
    xError.innerHTML = "";
    if (checkR(rError)) {
        let coordinateX = event.pageX - 925;
        let coordinateY = event.pageY - 180;
        let x = r * (coordinateX - 175) / 135 ;
        let y = r * (175 - coordinateY) / 135;
        sendRequest(x, y, r);
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

function sendRequest(x, y, r) {
   $.ajax({
       url: "./processing",
       type: "GET",
       data: {'X': x, 'Y': y, 'R': r},
       success: function () {
           window.location.reload(true);
       },
       error: function (response) {
           if (x < -3 || x > 5 || y < -5 || y > 3) {
               alert("Invalid x and y values. Please choose valid values.");
           }
       }
   });
}