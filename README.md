# Challenge 10 - JavaScript Loops, Arrays and Functions

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 🌦️ Project Description <br>
  - ⚙️ Technologies Used <br>
  - 🌦️ Demo <br>
  - 🔨 Installation <br>
  - 🚀 Usage <br>
  - 📝 Credits <br>
  - 📞 Contact <br>
</details>
---

## 🌦️ Project Description

This project is a simple JavaScript-based weather forecast app that fetches and displays weather data using the [OpenWeatherMap API](https://openweathermap.org/forecast5). The user can search for a city and specify the number of days for the forecast (up to 16 days). It retrieves the data and dynamically renders daily weather forecasts along with corresponding weather icons.

---

### Instructions

- Search for a **city name**.
- Select the **number of forecast days**.
- Click the **"Search City"** button.
- The app will show the temperature, weather description, and a weather icon for each day.

Weather data is retrieved from:

- `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=${days}&APPID=YOUR_API_KEY`
- Weather icons from: `http://openweathermap.org/img/w/${weatherIcon}.png`

---

## Technologies Used ⚙️

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
- ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
- ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

---

## 🌦️ Demo

<a href="https://i.imghippo.com/files/V8997Nvs.png" target="_blank">🔗 Screenshot Preview</a>

---

## Installation 🔨

To run these exercises locally, follow these steps:

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/makedonkatochevska/weather_app.git
   ```
2. Open the index.html file in your browser.

---

## Usage 🚀

Once you have the project set up locally, follow these steps to interact with the exercises:

1. Open the application in your browser.

2. In the input fields, enter:

   - A **city name** (e.g., "Skopje")
   - The **number of days** for the forecast (e.g., "5")

3. Click the **Search City** button.

4. The app will fetch and display:

   - A weather forecast for the specified number of days
   - Each day will include:
     - Temperature
     - Description
     - Weather icon

5. The weather icons are retrieved from OpenWeatherMap's image API.

6. If invalid input is entered (e.g., empty city or invalid number), an error message will be shown.

---

## Credits 📝

This exercise was provided by **Brainster**.

---

## Contact 📞

📫 You can reach me through email at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or follow me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
