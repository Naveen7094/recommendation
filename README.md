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
