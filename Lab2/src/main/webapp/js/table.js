function addBean (x, y, r, currentTime, executionTime, result) {
    let newRow = "<tr>";
    newRow += "<td style=\"max-width: 150px; word-wrap: break-word\";>" + x + "</td>";
    newRow += "<td style=\"max-width: 150px; word-wrap: break-word\";>" + y + "</td>";
    newRow += "<td style=\"max-width: 150px; word-wrap: break-word\";>" + r+ "</td>";
    newRow += "<td>" + currentTime + "</td>";
    newRow += "<td>" + executionTime + " ms</td>";
    newRow += (result === "false" || result === undefined)
        ? "<td><span style='color: red'>false</span></td>"
        : "<td><span style='color: #0fc40f'>true</span></td>";
    newRow += "</tr>";
    $('#results tr:last').after(newRow);
}