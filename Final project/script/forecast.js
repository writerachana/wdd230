// FORECAST
// const forecastDays = 3;
 
// for (i in forecastDays) {
//   let section = document.createElement("section");
//   section.classList.add("forecast");
//   let sectionHTML = `<img src="${forecastIcon}" alt="Weather Icon"/>
//   <p>${forecastDescription}</p>"`;
// }
 
// Update this URL to your API call URL to openweather
 
const forecastLAT = "33.1215196";
const forecastLON = "-117.287802";
const forecastAPIKEY = "aa1c7343e4d0a433a1ecabbdda6699a1";
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${forecastLAT}&lon=${forecastLON}&appid=${forecastAPIKEY}&units=imperial`;
// CARLSBAD: https://api.openweathermap.org/data/2.5/forecast?lat=33.1215196&lon=-117.287802&appid=f4e7eabc96c8e72dd2d715d4dea5f961&units=imperial
 
const ONE_DAY = 24 * 60 * 60 * 1000;
 
function forecast(forecastData) {
  let dates = [];
  let mydate = new Date();
  const ONE_DAY = 24 * 60 * 60 * 1000; // milliseconds in a day
 
  // Get the next three days' dates
  for (let i = 0; i < 3; i++) {
    mydate = new Date(mydate.getTime() + ONE_DAY);
    nextdate = mydate.toISOString().slice(0, 10);
    dates.push(nextdate);
  }
 
  const weatherList = forecastData;
 
  // Create an array to store the weather descriptions for the next three days
  const threeDaysat9AM = [];
 
  // Iterate through the weather list
  for (const weather of weatherList) {
    // Get the date from the "dt_txt" property
    const weatherDateTime = new Date(weather.dt_txt);
    const weatherDate = weatherDateTime.toISOString().slice(0, 10);
    const weatherTime = weatherDateTime.getHours();
 
    // Check if the weather date is one of the next three days
    if (dates.includes(weatherDate) && weatherTime === 9) {
      // Extract the weather description
      const weatherDescription = weather.weather[0].description;
      const weatherIcon = weather.weather[0].icon;
 
      // Add the weather description to the array
      threeDaysat9AM.push({
        date: weatherDate,
        time: "9:00 AM",
        description: weatherDescription,
        icon: weatherIcon,
      });
    }
  }
 
  const forecastSection = document.querySelector("#forecastSection");
 
  for (i in threeDaysat9AM) {
    const iconsrc = `https://openweathermap.org/img/wn/${threeDaysat9AM[i].icon}.png`;
 
    let section = document.createElement("section");
    section.classList.add("forecast");
    let sectionHTML = `<p>${threeDaysat9AM[i].date}</p><img src="${iconsrc}" alt="Weather Icon"/>
      <p>${threeDaysat9AM[i].description}</p>`;
    section.innerHTML = sectionHTML;
    forecastSection.appendChild(section);
  }
}
 
async function getTheForecast() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      const listInfo = data.list;
      forecast(listInfo);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
 
getTheForecast();