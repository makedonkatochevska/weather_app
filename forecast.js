let days = 1;
let city;
const submitBtn = document.getElementById("submitForecast");
const currentCityHeading = document.getElementById("header");
const forecastWeatherContainer = document.getElementById("forecastWeather");

async function fetchWeatherData() {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=${days}&APPID=c10bb3bd22f90d636baa008b1529ee25`
    );
    const data = await response.json();
    renderCityWeather(data);
    console.log("WEATHER", data);
  } catch (error) {
    forecastWeatherContainer.innerHTML = "ERROR";
  }
}

function userSearchInfo() {
  const cityInput = document.getElementById("city").value;
  const cityInfo =
    cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();
  const daysInfo = document.getElementById("days").value;

  if (isNaN(daysInfo)) {
    alert("Please enter valid number for days");
    document.getElementById("days").value = "";
    return;
  }

  days = daysInfo;
  city = cityInfo;

  fetchWeatherData();

  document.getElementById("city").value = "";
  document.getElementById("days").value = "";

  console.log(cityInfo, daysInfo);
}

function renderCityWeather(data) {
  currentCityHeading.innerHTML = `${data.list.length} days forecast for ${data.city.name}`;

  forecastWeatherContainer.innerHTML = "";

  data.list.forEach((day) => {
    const iconCode = day.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    const timestamp = day.dt;
    const date = new Date(timestamp * 1000);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);

    forecastWeatherContainer.innerHTML += `
    <tr>
      <td><img src="${iconUrl}" alt="weather icon"></td>
      <td>${day.weather[0].main}</td>
       <td>${day.weather[0].description}</td>
       <td>${day.temp.morn}°C</td>
       <td>${day.temp.night}°C</td>
       <td>${day.temp.min}°C</td>
       <td>${day.temp.max}°C</td>
       <td>${day.pressure}p</td>
       <td>${day.humidity}</td>
       <td>${day.speed}</td>
       <td>${formattedDate}</td>
    </tr>
  `;
  });
}

submitBtn.addEventListener("click", userSearchInfo);
