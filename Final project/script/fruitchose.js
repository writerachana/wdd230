// const fruitURL = "./data/fruityvice.json";
// const dropdowns = document.querySelectorAll(".choices");

// function populateDropdowns(data) {
//   fruitNames = data.map((fruit) => fruit.name);
//   console.log(fruitNames);
//   dropdowns.forEach((dropdown) => {
//     for (const fruitName of fruitNames) {
//       let option = document.createElement("option");
//       option.value = fruitName;
//       option.textContent = fruitName;
//       dropdown.appendChild(option);
//     }
//   });
// }

// async function getFruit() {
//   try {
//     const response = await fetch(fruitURL);
//     if (response.ok) {
//       const data = await response.json();
//       populateDropdowns(data);
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// getFruit();
function loadFruitOptions() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var data = JSON.parse(xhr.responseText);
          var selectOptions = '';
          data.forEach(function (fruit) {
              selectOptions += '<option value="' + fruit.name + '">' + fruit.name + '</option>';
          });

          // Populate select inputs with fruit options
          for (var i = 1; i <= 3; i++) {
              document.getElementById('selectOption' + i).innerHTML = selectOptions;
          }
      }
  };

  xhr.open('GET', './data/fruityvice.json', true);
  xhr.send();
}

document.addEventListener('DOMContentLoaded', function () {
  loadFruitOptions();

});