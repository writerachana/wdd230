function showWindChill(temp, speed){
    const windspeedSpan = document.getElementById("windchill")
    let message = "N/A";
    if(temp <= 50 && speed >3){
        let chillfactor = Math.pow(speed, 0.16);
        let chill = 35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor);
        message = `${chill}`;
    }
    windspeedSpan.textContent = message;
}

const temparatureSpan = document.getElementById("temprature");
const windspeedSpan = document.getElementById("windspeed");
const temprature = parseInt(temparatureSpan.textContent);
const windspeed = parseInt(windspeedSpan.textContent);
showWindChill(temprature, windspeed);