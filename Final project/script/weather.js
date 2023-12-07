// WEATHER INFORMATION
const LAT = "33.1215196";
const LON = "-117.287802";
const APIKEY = "aa1c7343e4d0a433a1ecabbdda6699a1";
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
// CARLSBAD: https://api.openweathermap.org/data/2.5/weather?lat=33.1215196&lon=-117.287802&appid=f4e7eabc96c8e72dd2d715d4dea5f961&units=imperial
 
function displayWeather(weatherData) {
  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  // const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  const weatherTemp = weatherData.main.temp.toFixed(0);
  const desc = weatherData.weather[0].description;
  const humidity = weatherData.main.humidity.toFixed(0);
  const weatherWindSpeed = weatherData.wind.speed.toFixed(0);
 
 
  let skyIcon = document.querySelector("#weather-icon");
  skyIcon.setAttribute("src", iconsrc);
  skyIcon.setAttribute("alt", desc);
 
 
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let weatherDesc = document.querySelector("#w-description");
  weatherDesc.innerHTML = `${capitalizeFirstLetter(desc)}`;
 
 
  const tempSpan = document.querySelector("#temp-span");
  tempSpan.innerHTML = `${weatherTemp}`;
 
 
  let humidSpan = document.querySelector("#humid-span");
  humidSpan.innerHTML = `${humidity}`;
}
 
async function getTheWeather() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
 
getTheWeather();