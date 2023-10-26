//Creat a Key //
const VISITS_KEY = 'site-visits'

function getSitevisits(){
// Check to see if key exists in local storage //
let currentValue = localStorage.getItem(VISITS_KEY)

//If the key doesnt exists incilise the key to 1//
let siteVisits = 1

if (currentValue != null){
// It the key does existsa add one to the current value //
    siteVisits = parseInt(currentValue) + 1
}
//save the new value for current visits//
localStorage.setItem(VISITS_KEY, `${siteVisits}`)
return siteVisits

}
// update the html page with current visits//
document.getElementById("visitcount").textContent = `${getSitevisits()}`

//document.getElementById("visitcount").innerHTML = "It's 100&dog; outside"