window.onload = function () {
    let form = document.forms.form;
    let xBoxes = form.elements.X;
    setBoxes(xBoxes);
    for (let box of xBoxes) {
        box.onclick = switchBox;
    }
}

    function switchBox(eventObj) {
        for (let box of checkbox) {
            if (box !== eventObj.target) {
                box.checked = false;
            }
        }
    }

    function setBoxes(arrayOfBoxes) {
        checkbox = arrayOfBoxes;
    }