function drawDots(x, y, r, result) {
    let svg = document.querySelector('#picture');
    let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    (result === "true")
        ? circle.style.fill = "red"
        : circle.style.fill = "#302929"
    circle.style.r = "5";
    circle.style.cx = (x * 135 / r) + 175;
    circle.style.cy = -(y * 135 / r) + 175;
    svg.appendChild(circle);
}