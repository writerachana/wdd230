// {
//     "prophets": [
//       {
//         "name": "Joseph",
//         "lastname": "Smith",
//         "birthdate": "23 December 1805",
//         "death": "27 June 1844",
//         "length": 14,
//         "order": 1,
//         "birthplace": "Vermont",
//         "numofchildren": 11,
//         "imageurl": "https://assets.churchofjesuschrist.org/ec/f8/ecf80a88e31429d0aa0eeec6e2c74851a4bf4235/nauvoo_temple_joseph_art_lds.jpeg"
//       }


const url = " https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

function displayProphets(prophets){
    prophets.forEach((prophet) => {
        let section = document.createElement("section")
        section.classList.add("card")
        let sectionHTML =`<h2>${prophet.name} ${prophet.lastname}<h2>
        <p>Date of Birth: ${prophet.birthdate}</p>
        <p>Place of Birth: ${prophet.birthplace}</p>
        <img src="${prophet.imageurl}" alt="Picture of ${prophet.name} ${prophet.lastname}">`
        section.innerHTML =sectionHTML;
        cards.appendChild(section);
        
    });
};

async function getProphetData(){
    const response = await fetch(url);
    if(response.ok){
        const data = await response.json();
        displayProphets(data.prophets);

    }
    else{
        console.error("No WORKIE!!!")

    }
}

getProphetData()