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
