function validateLogin(username, errorId) {
    let usernameError = document.getElementById(errorId);
    if (username.length >= 6 && username.length <= 18) {
        usernameError.innerHTML = "";
        return true;
    } else {
        usernameError.innerHTML = "Login can contain 6-18 characters.";
        return false;
    }
}

function validatePassword(password, errorId) {
    let passwordError = document.getElementById(errorId);
    if (password.length >= 8 && password.length <= 16) {
        passwordError.innerHTML = "";
        return true;
    } else {
        passwordError.innerHTML = "Password can contain 8-16 characters.";
        return false;
    }
}

export function validation(username, usernameErr, password, passErr) {
    let usernameRes = validateLogin(username, usernameErr);
    let passwordRes = validatePassword(password, passErr);
    return usernameRes && passwordRes;
}