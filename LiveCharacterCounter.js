<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Live Character Counter</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>🧮 Live Character Counter</h1>
  <textarea id="textInput" placeholder="Type your message..." maxlength="100"></textarea>
  <p id="charCount">Characters left: 100</p>

  <script src="script.js"></script>
</body>
</html>
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const maxChars = 100;

textInput.addEventListener("input", () => {
  const remaining = maxChars - textInput.value.length;
  charCount.textContent = `Characters left: ${remaining}`;

  // Color change logic
  if (remaining > 50) {
    charCount.style.color = "green";
  } else if (remaining > 20) {
    charCount.style.color = "orange";
  } else {
    charCount.style.color = "red";
  }

  // Prevent typing beyond limit (extra safety)
  if (remaining <= 0) {
    textInput.value = textInput.value.substring(0, maxChars);
  }
});
body {
  font-family: Arial, sans-serif;
  background: #f0f0f0;
  padding: 40px;
  text-align: center;
}

h1 {
  color: #333;
}

textarea {
  width: 300px;
  height: 100px;
  font-size: 16px;
  padding: 10px;
  resize: none;
}

#charCount {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: green;
}
