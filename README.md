# AI-Based Fertilizer Recommendation System
ai-fertilizer-system/
│
├── index.html        (Login Page)
├── home.html         (Home Page)
├── recommend.html    (Recommendation Page)
├── style.css
└── script.js
<!DOCTYPE html>
<html>
<head>
    <title>Login - AI Fertilizer System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="login-container">
    <h2>AI-Based Fertilizer Recommendation</h2>

    <form onsubmit="return loginUser()">
        <input type="text" id="username" placeholder="Enter Username" required>
        <input type="password" id="password" placeholder="Enter Password" required>
        <button type="submit">Login</button>
    </form>
</div>

<script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>Home - AI Fertilizer System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="home-container">
    <h1>Welcome to AI Fertilizer Recommendation System</h1>

    <a href="recommend.html">
        <button>Go to Fertilizer Recommendation</button>
    </a>
</div>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>Fertilizer Recommendation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="form-container">
    <h2>Enter Soil Details</h2>

    <form onsubmit="return recommendFertilizer()">
        <input type="number" id="nitrogen" placeholder="Nitrogen (N)" required>
        <input type="number" id="phosphorus" placeholder="Phosphorus (P)" required>
        <input type="number" id="potassium" placeholder="Potassium (K)" required>
        <button type="submit">Get Recommendation</button>
    </form>

    <h3 id="result"></h3>
</div>

<script src="script.js"></script>
</body>
</html>
body {
    font-family: Arial;
    background-color: #f0f8f5;
    text-align: center;
}

.login-container,
.home-container,
.form-container {
    width: 350px;
    margin: 100px auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px gray;
}

input {
    width: 90%;
    padding: 10px;
    margin: 10px;
}

button {
    padding: 10px 20px;
    background-color: green;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: darkgreen;
}
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
