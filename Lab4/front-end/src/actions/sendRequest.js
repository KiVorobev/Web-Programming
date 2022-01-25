const defaultAddress = "http://localhost:8080/lab4-ee-1.0/api"

function sendRequest(url, data = new FormData()) {
    return fetch(defaultAddress + url, {
        method: "POST",
        body: data
    }).then(response => {
        return response;
    }).catch(err => console.log(err))
}

function preparations(data) {
    localStorage.setItem("user", data.get("login").toString());
    localStorage.setItem("password", data.get("password").toString());

    let formData = new FormData();
    formData.set("login", data.get("login").toString());
    formData.set("password", data.get("password").toString());
    return sendRequest("/hits/get", formData);
}

export {preparations};
export default sendRequest;