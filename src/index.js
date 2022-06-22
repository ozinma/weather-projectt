function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "d802976f477570e48bb8e76c26f9538d";
  let units = "metric";
  let apiWeb = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiWeb}?lat==${latitude}&lon=${longitude}&apiid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayCurrentTemperatur);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
function displayCurrentTemperature(response) {
  console.log();
  let temperature = Math.round(response.data.main.temp);
  let humidity = response.data.main.humidity;
  let weather = response.data.weather.description;
  let wind = response.data.wind.speed;
  let tempSpecial = document.querySelector("#temp-special");
  tempSpecial.innerHTML = temperature;
  let hum = document.querySelector(".hum");
  hum.innerHTML = humidity;
  let breeze = document.querySelector(".breeze");
  breeze.innerHTML = wind;
  let description = document.querySelector(".description");
  description.innerHTML = weather;
}
function showTemperature(city) {
  let apiKey = "2cecc497980f715ab7706e9851e428bb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityType}&apiid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentTemperature);
}
function formatDate(now) {
  let day = now.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0 ${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0 ${minutes}`;
  }
  return `${days[day]} ${hours} ${minutes}`;
}
function overWrite(event) {
  event.preventDefault();
  let citi = document.querySelector("#city-cast");
  citi.innerHTML = cityType.value;
  showCurrentTemperature(citi);
}

let dateToday = document.querySelector("#day-time");
let now = new Date();
dateToday.innerHTML = formatDate(now);

let cityType = document.querySelector("#city-type");

let discoverCity = document.querySelector(".discover");
discoverCity.addEventListener("submit", overWrite, showTemperature);

showCurrentTemperature(Paris);
let navigate = document.querySelector(".navigate");
navigate.addEventListener("click", getCurrentPosition);
