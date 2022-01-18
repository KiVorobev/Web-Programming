function validateLogin(login, errorId) {
    let loginError = document.getElementById(errorId);
    if (login.length >= 6 && login.length <= 18) {
        loginError.innerHTML = "";
        return true;
    } else {
        loginError.innerHTML = "Login can contain 6-18 characters.";
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

export function validation(login, logErr, password, passErr) {
    validateLogin(login, logErr);
    validatePassword(password, passErr);
}

export function validationForRepeat(first_password, second_password, errorId) {
    let repeatPassError = document.getElementById(errorId);
    if (first_password === second_password) {
        console.log(1);
        repeatPassError.innerHTML = "";
        return true;
    } else {
        console.log(2);
        repeatPassError.innerHTML = "Password are not the same!";
        return false;
    }
}