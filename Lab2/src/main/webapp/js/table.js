function addBean(x, y, r, currentTime, executionTime, result) {
    let newElement = "<tr>";
    newElement += "<td style=\"max-width: 150px; word-wrap: break-word\";>" + x + "</td>";
    newElement += "<td style=\"max-width: 150px; word-wrap: break-word\";>" + y + "</td>";
    newElement += "<td style=\"max-width: 150px; word-wrap: break-word\";>" + r + "</td>";
    newElement += "<td>" + currentTime + "</td>";
    newElement += "<td>" + executionTime + " ms</td>";
    newElement += (result === "false" || result === undefined)
        ? "<td><span style='color: red'>false</span></td>"
        : "<td><span style='color: #0fc40f'>true</span></td>";
    newElement += "</tr>";
    $('#results tr:last').after(newElement);
}