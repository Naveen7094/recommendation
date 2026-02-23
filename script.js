function loginUser() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        alert("Login Successful!");
        window.location.href = "home.html";
        return false;
    } else {
        alert("Invalid Login");
        return false;
    }
}

function recommendFertilizer() {
    let n = parseInt(document.getElementById("nitrogen").value);
    let p = parseInt(document.getElementById("phosphorus").value);
    let k = parseInt(document.getElementById("potassium").value);

    let result = "";

    if (n < 50) {
        result = "Recommended: Urea Fertilizer";
    } else if (p < 50) {
        result = "Recommended: DAP Fertilizer";
    } else if (k < 50) {
        result = "Recommended: Potash Fertilizer";
    } else {
        result = "Soil is Fertile. No extra fertilizer needed.";
    }

    document.getElementById("result").innerText = result;

    return false;
}
