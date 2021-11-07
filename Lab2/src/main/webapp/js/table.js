addBean = (x, y, r, currentTime, executionTime, result) => {
    let newRow = "<tr>";
    newRow += "<td>" + parseFloat(x).toFixed(2) + "</td>";
    newRow += "<td>" + parseFloat(y).toFixed(2) + "</td>";
    newRow += "<td>" + parseFloat(r).toFixed(2) + "</td>";
    newRow += "<td>" + currentTime + "</td>";
    newRow += "<td>" + executionTime + "</td>";
    newRow += (result === "false" || result === undefined)
        ? "<td><span style='color: red'>FALSE</span></td>"
        : "<td><span style='color: green'>TRUE</span></td>";
    newRow += "</tr>";
    $('#results tr:last').after(newRow);
}