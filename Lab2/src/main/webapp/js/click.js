document.getElementById('picture').addEventListener('click', function (event) {
    checkClick(event);
});

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
        let x = (r * (coordinateX - 175) / 135) / 1.2;
        let y = (r * (175 - coordinateY) / 135) / 1.2;
        if (checkXY(x, y, pictureError)) {
            sendRequest(x, y, r, coordinateX, coordinateY);
        }
    }
}