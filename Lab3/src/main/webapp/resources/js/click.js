function checkHit() {
    let coordinateX = event.pageX - 910;
    let coordinateY = event.pageY - 172;
    let xHidden = document.forms[0].elements[1].value = coordinateX;
    let yHidden = document.forms[0].elements[2].value = coordinateY;

    document.forms[0].elements[10].click();
}