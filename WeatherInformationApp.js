<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Weather Info App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #e0f7fa;
      padding: 40px;
      text-align: center;
    }

    h1 {
      color: #00796b;
    }

    input {
      padding: 10px;
      font-size: 16px;
      width: 200px;
      margin-right: 10px;
    }

    button {
      padding: 10px 15px;
      font-size: 16px;
      background: #00796b;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background: #004d40;
    }

    #weatherBox {
      margin-top: 30px;
      background: white;
      padding: 20px;
      border-radius: 10px;
      width: 300px;
      margin-left: auto;
      margin-right: auto;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .error {
      color: red;
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <h1>🌦️ Weather Info App</h1>
  <input type="text" id="cityInput" placeholder="Enter city name" />
  <button id="getWeatherBtn">Get Weather</button>

  <div id="weatherBox"></div>
  <p class="error" id="errorMsg"></p>

  <script>
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
    const cityInput = document.getElementById("cityInput");
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const weatherBox = document.getElementById("weatherBox");
    const errorMsg = document.getElementById("errorMsg");

    getWeatherBtn.addEventListener("click", async () => {
      const city = cityInput.value.trim();
      if (!city) {
        errorMsg.textContent = "Please enter a city name.";
        weatherBox.innerHTML = "";
        return;
      }

      errorMsg.textContent = "Loading...";
      weatherBox.innerHTML = "";

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error("City not found");
        }

        const data = await response.json();
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const condition = data.weather[0].description;

        weatherBox.innerHTML = `
          <h3>${data.name}</h3>
          <p>Temperature: ${temp}°C</p>
          <p>Humidity: ${humidity}%</p>
          <p>Condition: ${condition}</p>
        `;
        errorMsg.textContent = "";
      } catch (error) {
        errorMsg.textContent = "❌ Error: " + error.message;
      }
    });
  </script>
</body>
</html>
