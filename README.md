<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive JavaScript Mini Website</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>My Interactive JavaScript Website</h1>
    <button id="themeBtn">Switch Theme</button>
</header>

<main>

    <section class="card">
        <h2>Sign Up Form</h2>
        <form id="signupForm">
            <label>Name:</label>
            <input type="text" id="nameInput">

            <label>Email:</label>
            <input type="text" id="emailInput">

            <label>Password:</label>
            <input type="password" id="passwordInput">

            <button type="submit">Submit</button>
        </form>
        <p id="formMessage"></p>
    </section>

    <section class="card">
        <h2>Change Image on Click</h2>
        <img id="imageBox" src="https://via.placeholder.com/250" alt="Placeholder Image">

        <br><br>
        <button id="changeImgBtn">Change Image</button>
    </section>

</main>

<script src="script.js"></script>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: white;
    color: black;
}

.dark-mode {
    background-color: #222;
    color: white;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    text-align: left;
}

.card {
    background: #f4f4f4;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
}

.dark-mode .card {
    background: #333;
}

button {
    padding: 10px 15px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #555;
    color: white;
}

img {
    margin-top: 10px;
    width: 250px;
    border-radius: 10px;
}

document.getElementById("themeBtn").onclick = function () {
    document.body.classList.toggle("dark-mode");
};


document.getElementById("changeImgBtn").onclick = function () {
    let img = document.getElementById("imageBox");

    if (img.src.includes("placeholder")) {
        img.src = "https://picsum.photos/250";
    } else {
        img.src = "https://via.placeholder.com/250";
    }
};


document.getElementById("signupForm").onsubmit = function (event) {
    event.preventDefault();

    let name = document.getElementById("nameInput").value;
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passwordInput").value;

    if (name === "" || email === "" || password === "") {
        document.getElementById("formMessage").textContent = 
            "❌ All fields must be filled!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("formMessage").textContent = 
            "❌ Invalid email address!";
        return;
    }

    if (password.length < 6) {
        document.getElementById("formMessage").textContent = 
            "❌ Password must be at least 6 characters!";
        return;
    }

    document.getElementById("formMessage").textContent = 
        "✔ Form submitted successfully!";
};
