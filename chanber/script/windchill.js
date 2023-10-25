// function showWindChill(temp, speed){
//     const windspeedSpan = document.getElementById("windchill")
//     let message = "wather";
//     if(temp <= 50 && speed >3){
//         let chillfactor = Math.pow(speed, 0.16);
//         let chill = 35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor);
//         message = `${chill}`;
//     }
//     windspeedSpan.textContent = message;
// }

// const temparatureSpan = document.getElementById("temprature");
// const windspeedSpan = document.getElementById("windspeed");
// const temprature = parseInt(temparatureSpan.textContent);
// const windspeed = parseInt(windspeedSpan.textContent);
// showWindChill(temprature, windspeed);

function getTime() {
    let today = new Date();
    let time = today.getHours();
    return time;
  }
  function convertToJson(response) {
    if (response.ok) {
      return response.json();
    } else {
      console.log("error: ", response);
    }
  }
  
  function newSearch() {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/guayaquil?unitGroup=us&key=EWQF52DJKF9B9NEMA45J3VZGW&contentType=json`;
    fetch(url).then(convertToJson).then(displayCurrentTemp);
  }
  
  function displayCurrentTemp(data) {
    let img = data.days[0].hours[getTime() - 1].icon;
    let f = (document.querySelector(".temp").innerHTML =
      data.days[0].hours[getTime() - 1].temp);
    let c = f
  
    document.querySelector(
      ".imgweather"
    ).src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${img}.png`;
  
    document.querySelector(".desc").innerHTML = data.days[0].hours[getTime() - 1].conditions;
  
    document.querySelector(".temp").innerHTML = c + " <span>°F</span>";
    let wind = document.querySelector(".windvalue").innerHTML = data.days[0].hours[getTime() - 1].windspeed;
  
  
  
    
      let windChillSpan = document.querySelector(".windchill");
  
      // Set up the wind chill content
      let windchill = 'N/A';
      if (wind >= 3.0 && c <= 50){
          let chill = Math.round((35.74 + (0.6215 * c))-(35.75 * Math.pow(wind,0.16)) + (0.4275*c*Math.pow(wind,0.16)));
          windchill = `${chill}`;
      }
  
      // Write out the dynamic content
      windChillSpan.innerHTML = windchill;
  }
  
  newSearch();
  