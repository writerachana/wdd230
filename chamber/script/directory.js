// Toggle active/not active buttons

var gridSelector = document.querySelector('#directory-grid');
var listSelector = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('active')){    
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('active')){
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
});


// Load JSON data and do stuff
const url = "./data/members.json";

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayMembers = (members) => {
  const cards = document.querySelector(".directory-cards"); // select the output container element

  members.forEach((member) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.innerHTML = `
    <img src="${member.imageURL}" alt="Picture of ${member.name}">
    <h3>${member.name}</h3>
    <p>${member.address}</p>
    <p>${member.phone}</p>
    <p>Membership Level: ${member.membershipLevel}</p>
    <p><a class="card-button" href="${member.websiteURL}">Website</a></p>
    `;
    if (member.membershipLevel=='gold'){
      card.classList.add('gold-member');
    }
    cards.appendChild(card);
  }); // end of forEach loop
  
}; // end of function expression



async function getBusinessData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayMembers(data.members);
    // displayBusinessesList(data.members);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}

getBusinessData();