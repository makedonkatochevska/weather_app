# Challenge 10 - JavaScript Loops, Arrays and Functions

## Table of Contents

<details>
  <summary>Click to expand</summary>
  - 🌦️ Project Description <br>
  - ⚙️ Technologies Used <br>
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

## Installation 🔨

To run these exercises locally, follow these steps:

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://git.brainster.co/Makedonka.Tochevska-FE21/brainsterchallenges_makedonkatochevskafe21.git
   ```
2. Open the index.html file in your browser.

---

## Usage 🚀

Once you have the project set up locally, follow these steps to interact with the exercises:

1. **Exercise 1: Array Transformation**:

   - Open the `exercise1.html` file in your browser.
   - The array of numbers will be processed based on the transformation rules:
     - Numbers less than 10 will be multiplied by 2.
     - Numbers 10 or greater will be multiplied by 4.
   - The transformed array will be displayed in the output.

2. **Exercise 2: Password Checker**:

   - Open the `exercise2.html` file in your browser.
   - Enter a password when prompted.
   - The system will validate the password based on the following criteria:
     - It must be at least 8 characters long.
     - It must contain at least one number and one uppercase letter.
   - If the password is valid, a success message will appear. If it's invalid, an error message will be displayed.

3. **Exercise 3: Dynamic Table Generator**:
   - Open the `exercise3.html` file in your browser.
   - Enter the number of rows and columns for the table.
   - The program will generate a dynamic table with the specified number of rows and columns:
     - The header cells will display "Header" followed by the column number.
     - The body cells will display "Row" followed by the row number and "Col" followed by the column number.

---

## Credits 📝

This exercise was provided by **Brainster**.

---

## Contact 📞

📫 You can reach me through email at [makedonkatochevska@gmail.com](mailto:makedonkatochevska@gmail.com) or follow me on:

- [LinkedIn](https://www.linkedin.com/in/makedonka-tochevska)
- [GitHub](https://github.com/makedonkatochevska)
