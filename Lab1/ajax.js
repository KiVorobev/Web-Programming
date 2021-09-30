function receive(){
    if (checkForm(event)){
        let X_value = $('#X').val();
        let Y_value = $('#Y').val();
        let R_value = $('#R').val();

        $.ajax({
            type: 'POST',
            url: 'php/upload.php',
            data: {'x': X_value.trim(), 'y': Y_value, 'r': R_value},
            success: function (data) {
                if (data === "Data is incorrect!") alert("Error: " + data);
                else $('#results tr:last').after(data);
            },
            error: function (data) {
                alert("Error: " + data);
            }
        })
    }
}