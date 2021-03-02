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
  celsiusTemp = response.data.main.temp;
  let temperature = Math.round(celsiusTemp);
  console.log(response.data);
  let h2 = document.querySelector("#temp");
  h2.innerHTML = `${temperature}`;
  let weatherInfo = document.querySelector(".weather-info");
  weatherInfo.innerHTML = response.data.weather[0].main;
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = response.data.main.humidity;
  let speed = document.querySelector(".speed-wind");
  speed.innerHTML = response.data.wind.speed;
  let currentPosition = document.querySelector("h1");
  currentPosition.innerHTML = response.data.name;

  //Use custom icon for desktop
  let iconElement = document.querySelector("#main-icon");
  if (response.data.weather[0].description == `clear sky`) {
    iconElement.setAttribute("src", `images/sole_half.png`);
    let suggestionElement = document.querySelector("#suggestion");
    suggestionElement.innerHTML = "The sun is shine!";
  } else if (response.data.weather[0].description == `few clouds`) {
    iconElement.setAttribute("src", `images/sole_nuvola_half.png`);
    let suggestionElement = document.querySelector("#suggestion");
    suggestionElement.innerHTML = "Not bad, but it could be better!";
  } else if (
    response.data.weather[0].description == `light snow` ||
    response.data.weather[0].description == `Snow` ||
    response.data.weather[0].description == `Heavy snow` ||
    response.data.weather[0].description == `Sleet` ||
    response.data.weather[0].description == `Light shower sleet` ||
    response.data.weather[0].description == `Shower sleet` ||
    response.data.weather[0].description == `Light rain and snow` ||
    response.data.weather[0].description == `Rain and snow` ||
    response.data.weather[0].description == `Light shower snow` ||
    response.data.weather[0].description == `Shower snow` ||
    response.data.weather[0].description == `Heavy shower snow`
  ) {
    iconElement.setAttribute("src", `images/fiocco_neve_half.png`);
    let suggestionElement = document.querySelector("#suggestion");
    suggestionElement.innerHTML = "Oh, it's cold! Get a jacket!";
  } else if (response.data.weather[0].main == `Rain`) {
    iconElement.setAttribute("src", `images/pioggia_half.png`);
    let suggestionElement = document.querySelector("#suggestion");
    suggestionElement.innerHTML = "You need an umbrella!";
  } else if (response.data.weather[0].main == `Drizzle`) {
    iconElement.setAttribute("src", `images/pioviggine_half.png`);
    let suggestionElement = document.querySelector("#suggestion");
    suggestionElement.innerHTML = "Oh, that's a boring weather!";
  } else if (response.data.weather[0].main == `Thunderstorm`) {
    iconElement.setAttribute("src", `images/temporale_half.png`);
    let suggestionElement = document.querySelector("#suggestion");
    suggestionElement.innerHTML = "It's better staying at home!";
  } else if (
    response.data.weather[0].main == `Mist` ||
    response.data.weather[0].main == `Smoke` ||
    response.data.weather[0].main == `Haze` ||
    response.data.weather[0].main == `Dust` ||
    response.data.weather[0].main == `Fog` ||
    response.data.weather[0].main == `Squall` ||
    response.data.weather[0].main == `Tornado`
  ) {
    iconElement.setAttribute("src", `images/nebbia_half.png`);
    let suggestionElement = document.querySelector("#suggestion");
    suggestionElement.innerHTML = "It seems to be in Sleepy Hollow!";
  } else {
    if (
      response.data.weather[0].description == `overcast clouds` ||
      response.data.weather[0].description == `broken clouds` ||
      response.data.weather[0].description == `scattered clouds`
    ) {
      iconElement.setAttribute("src", `images/nuvola_half.png`);
      let suggestionElement = document.querySelector("#suggestion");
      suggestionElement.innerHTML = "Uff, where are you sun?";
    }
  }

  //Use custom icon for mobile
  let iconElementMobile = document.querySelector("#main-icon-mobile");
  if (response.data.weather[0].description == `clear sky`) {
    iconElementMobile.setAttribute("src", `images/sole_mobile.png`);
    let suggestionElementMobile = document.querySelector("#suggestion-mobile");
    suggestionElementMobile.innerHTML = "The sun is shine!";
  } else if (response.data.weather[0].description == `few clouds`) {
    iconElementMobile.setAttribute("src", `images/sole__nuvola_mobile.png`);
    let suggestionElementMobile = document.querySelector("#suggestion-mobile");
    suggestionElementMobile.innerHTML = "Not bad, but it could be better!";
  } else if (
    response.data.weather[0].description == `light snow` ||
    response.data.weather[0].description == `Snow` ||
    response.data.weather[0].description == `Heavy snow` ||
    response.data.weather[0].description == `Sleet` ||
    response.data.weather[0].description == `Light shower sleet` ||
    response.data.weather[0].description == `Shower sleet` ||
    response.data.weather[0].description == `Light rain and snow` ||
    response.data.weather[0].description == `Rain and snow` ||
    response.data.weather[0].description == `Light shower snow` ||
    response.data.weather[0].description == `Shower snow` ||
    response.data.weather[0].description == `Heavy shower snow`
  ) {
    iconElementMobile.setAttribute("src", `images/fiocco_neve.png`);
    let suggestionElementMobile = document.querySelector("#suggestion-mobile");
    suggestionElementMobile.innerHTML = "Oh, it's cold! Get a jacket!";
  } else if (response.data.weather[0].main == `Rain`) {
    iconElementMobile.setAttribute("src", `images/pioggia_mobile.png`);
    let suggestionElementMobile = document.querySelector("#suggestion-mobile");
    suggestionElementMobile.innerHTML = "You need an umbrella!";
  } else if (response.data.weather[0].main == `Drizzle`) {
    iconElementMobile.setAttribute("src", `images/pioviggine_mobile.png`);
    let suggestionElementMobile = document.querySelector("#suggestion-mobile");
    suggestionElementMobile.innerHTML = "Oh, that's a boring weather!";
  } else if (
    response.data.weather[0].main == `Mist` ||
    response.data.weather[0].main == `Smoke` ||
    response.data.weather[0].main == `Haze` ||
    response.data.weather[0].main == `Dust` ||
    response.data.weather[0].main == `Fog` ||
    response.data.weather[0].main == `Squall` ||
    response.data.weather[0].main == `Tornado`
  ) {
    iconElementMobile.setAttribute("src", `images/nebbia_mobile.png`);
    let suggestionElementMobile = document.querySelector("#suggestion-mobile");
    suggestionElementMobile.innerHTML = "It seems to be in Sleepy Hollow!";
  } else {
    if (
      response.data.weather[0].description == `overcast clouds` ||
      response.data.weather[0].description == `broken clouds` ||
      response.data.weather[0].description == `scattered clouds`
    ) {
      iconElementMobile.setAttribute("src", `images/nuvola_mobile.png`);
      let suggestionElementMobile = document.querySelector(
        "#suggestion-mobile"
      );
      suggestionElementMobile.innerHTML = "Uff, where are you sun?";
    }
  }
}

function showCurrentCity(event) {
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

let celsiusTemp = null;

function showFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = Math.round(celsiusTemp * 9) / 5 + 32;
  let h2 = document.querySelector("#temp");
  h2.innerHTML = Math.round(`${fahrenheitTemp}`);
}

function showCelsiusTemp(event) {
  event.preventDefault();
  let h2 = document.querySelector("#temp");
  h2.innerHTML = Math.round(celsiusTemp);
}

let fahrenheit = document.querySelector(".fahrenheit");
fahrenheit.addEventListener("click", showFahrenheitTemp);

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", showCelsiusTemp);

function showCityOnLoad(event) {
  let cityOnLoad = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Turin`;

  let key = "5bace7f1eee03471e89a577a0405da30";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Province of Turin&appid=${key}&units=${units}`;
  axios.get(apiUrl).then(displayTemp);
}

showCityOnLoad();
