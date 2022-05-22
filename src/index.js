// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
// Selection of HTML objects
const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");

// Defining a function
function toggleNav() {
  burger.classList.toggle("fa-bars");
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active");
}

// Calling the function after click event occurs
burger.addEventListener("click", function () {
  toggleNav();
});

function addRecipe() {}

let recipeObj = [
  {
    name: "Au Gratin Potatoes",
    ingredients: [
      { name: "milk", value: 100, unit: "mL" },
      { name: "pineapple", value: 2, unit: "slices" }
    ]
  },
  {
    name: "Schnitzel",
    ingredients: [
      { name: "milk", value: 100, unit: "mL" },
      { name: "pineapple", value: 2, unit: "slices" }
    ]
  }
];
let recipeListData = document.getElementById("recipeListData");

// https://stackoverflow.com/questions/45812160/unexpected-comma-using-map

let mappedData = recipeObj
  .map(function (o) {
    return `
  <div class="recipeCard">
  <p class="p-name"> Name: ${o.name} </p>
  <p class="p-ingredients"> Ingredients: </p>
  ${o.ingredients
    .map(function (i) {
      return `<p>${i.name} ${i.value} ${i.unit}</p>`;
    })
    .join("")}
  </div>
  `;
  })
  .join("");

recipeListData.insertAdjacentHTML("beforeend", mappedData);

// recipeObj.forEach(function (element) {
//   recipeListData.insertAdjacentHTML(
//     "beforeend",
//     "<li>" + element.name + " : " + element.price + " </li>",
//     element.ingredients.forEach(function (ingredient) {
//       recipeListData.insertAdjacentHTML(
//         "beforeend",
//         "<li>" + ingredient.name + " : " + ingredient.unit + " </li>"
//       );
//       // return ("<li>" + "blah" + " </li>")
//     })
//   );
// });
