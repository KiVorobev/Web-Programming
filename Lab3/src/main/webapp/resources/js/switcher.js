window.onload = function () {
    let xBoxes = document.forms[0].elements.X;
    for (let box of xBoxes) {
        box.onclick = (event) => {
            xBoxes.forEach(box => {
                if (box !== event.target) box.checked = false;
            })
        }
    }
}