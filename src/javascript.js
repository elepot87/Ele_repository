let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentMonth = months[now.getMonth()];

let currentYear = now.getFullYear();

let date = now.getDate();

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dayHourInfo = document.querySelector(".day-info");
dayHourInfo.innerHTML = `${date} ${currentMonth} ${currentYear} - ${currentDay} ${hours}:${minutes}`;

function displayTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(response.data);
  let h2 = document.querySelector("#temp");
  h2.innerHTML = `${temperature} °C`;
  let weatherInfo = document.querySelector(".weather-info");
  weatherInfo.innerHTML = response.data.weather[0].main;
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = response.data.main.humidity;
  let speed = document.querySelector(".speed-wind");
  speed.innerHTML = response.data.wind.speed;
  let currentPosition = document.querySelector("h1");
  currentPosition.innerHTML = response.data.name;
  let iconElement = document.querySelector("#main-icon");
  if (response.data.weather[0].main == `Clear`) {
    iconElement.setAttribute("src", `images/sole_half.png`);
  }
  let iconElementMobile = document.querySelector("#main-icon-mobile");
  if (response.data.weather[0].main == `Clear`) {
    iconElementMobile.setAttribute("src", `images/sole_mobile.png`);

    let suggestionElement = document.querySelector("#suggestion");
    suggestionElement.innerHTML = "The sun is shine!";

    let suggestionElementMobile = document.querySelector("#suggestion-mobile");
    suggestionElementMobile.innerHTML = "The sun is shine!";
  }
}

function showCurrentCity(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  if (currentCity.value != "") {
    h1.innerHTML = `${currentCity.value}`;
  } else {
    alert("Type a city please 🤓");
  }

  let key = "5bace7f1eee03471e89a577a0405da30";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity.value}&appid=${key}&units=${units}`;
  axios.get(apiUrl).then(displayTemp);
}

let currentCity = document.querySelector(".fas.fa-search");
currentCity.addEventListener("click", showCurrentCity);

function showPosition(position) {
  let apiKey = "5bace7f1eee03471e89a577a0405da30";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}
function getCurrentLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentLocationButton = document.querySelector(".fas.fa-map-marker-alt");
currentLocationButton.addEventListener("click", getCurrentLocation);

/*function showFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = "36";
  let h2 = document.querySelector("#temp");
  h2.innerHTML = `${fahrenheitTemp}`;
}

let fahrenheit = document.querySelector(".fahrenheit");
fahrenheit.addEventListener("click", showFahrenheitTemp);

function showCelsiusTemp(event) {
  let celsiusTemp = "2";
  let h2 = document.querySelector("#temp");
  h2.innerHTML = `${celsiusTemp}`;
}

let celsius = document.querySelector(".celsius");
celsius.addEventListener("click", showCelsiusTemp); */
