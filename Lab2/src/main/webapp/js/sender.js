function sendRequest(x, y, r) {
    $.ajax({
        url: "./processing",
        type: "GET",
        data: {'X': x, 'Y': y, 'R': r},
        success: function (response){
            drawDots(response.x, response.y, response.r, response.result)
            addBean(response.x, response.y, response.r, response.currentTime, response.executionTime,response.result);
        }
    });
}