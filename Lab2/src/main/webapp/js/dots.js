function drawDots(x, y, r, result) {
    let svg = document.querySelector('#picture');
    let circ = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    (result === "true")
        ? circ.style.fill = "red"
        : circ.style.fill = "#302929"
    circ.style.r = "5";
    circ.style.cx = (x * 135 / r) + 175;
    circ.style.cy = -(y * 135 / r) + 175;
    svg.appendChild(circ);
}