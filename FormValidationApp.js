<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Form Validation App</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>🧾 Registration Form</h1>
  <form id="registrationForm" novalidate>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" />
      <small class="error" id="nameError"></small>
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" />
      <small class="error" id="emailError"></small>
    </div>

    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" />
      <small class="error" id="passwordError"></small>
    </div>

    <button type="submit">Register</button>
  </form>

  <script src="script.js"></script>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  background: #f0f0f0;
  padding: 40px;
  text-align: center;
}

h1 {
  color: #333;
}

form {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  margin: auto;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

input.valid {
  border-color: green;
}

input.invalid {
  border-color: red;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  display: block;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    nameInput.classList.add("invalid");
    nameInput.classList.remove("valid");
    isValid = false;
  } else {
    nameError.textContent = "";
    nameInput.classList.add("valid");
    nameInput.classList.remove("invalid");
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required.";
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
    isValid = false;
  } else if (!emailInput.value.includes("@")) {
    emailError.textContent = "Email must contain '@'.";
    emailInput.classList.add("invalid");
    emailInput.classList.remove("valid");
    isValid = false;
  } else {
    emailError.textContent = "";
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
  }

  // Password validation
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password is required.";
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
    isValid = false;
  } else if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
    isValid = false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.add("valid");
    passwordInput.classList.remove("invalid");
  }

  if (isValid) {
    alert("Form submitted successfully! 🎉");
    form.reset();
    [nameInput, emailInput, passwordInput].forEach(input => {
      input.classList.remove("valid");
    });
  }
});
