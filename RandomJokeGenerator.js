<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Random Joke Generator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f0f0f0;
      padding: 40px;
      text-align: center;
    }

    h1 {
      color: #333;
    }

    #jokeBox {
      background: white;
      padding: 20px;
      margin: 20px auto;
      width: 400px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    #setup {
      font-size: 18px;
      font-weight: bold;
    }

    #punchline {
      font-size: 16px;
      margin-top: 10px;
      color: #555;
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

    button:disabled {
      background: #999;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <h1>😂 Random Joke Generator</h1>
  <div id="jokeBox">
    <p id="setup">Click the button for a joke!</p>
    <p id="punchline"></p>
  </div>
  <button id="nextBtn">Next Joke</button>

  <script>
    const setupEl = document.getElementById("setup");
    const punchlineEl = document.getElementById("punchline");
    const nextBtn = document.getElementById("nextBtn");

    function fetchJoke() {
      nextBtn.disabled = true;
      setupEl.textContent = "Loading joke...";
      punchlineEl.textContent = "";

      fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
          setupEl.textContent = data.setup;
          punchlineEl.textContent = data.punchline;
          nextBtn.disabled = false;
        })
        .catch(error => {
          setupEl.textContent = "Oops! Couldn't fetch a joke.";
          punchlineEl.textContent = "";
          console.error("Error:", error);
          nextBtn.disabled = false;
        });
    }

    // Initial joke
    fetchJoke();

    // Button click
    nextBtn.addEventListener("click", fetchJoke);
  </script>
</body>
</html>
