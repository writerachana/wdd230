const fruitURL = "./data/fruityvice.json";
const dropdowns = document.querySelectorAll(".choices");

function populateDropdowns(data) {
  fruitNames = data.map((fruit) => fruit.name);
  console.log(fruitNames);
  dropdowns.forEach((dropdown) => {
    for (const fruitName of fruitNames) {
      let option = document.createElement("option");
      option.value = fruitName;
      option.textContent = fruitName;
      dropdown.appendChild(option);
    }
  });
}

async function getFruit() {
  try {
    const response = await fetch(fruitURL);
    if (response.ok) {
      const data = await response.json();
      populateDropdowns(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getFruit();