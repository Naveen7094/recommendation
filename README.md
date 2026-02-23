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
