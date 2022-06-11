// import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

// For the hamburger
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

// For displaying content from JSON
let recipeObj = [
  {
    title: "Au Gratin Potatoes",
    ingredients: ["100 mL Milk", "2 slices of Cheese"],
    steps: ["Cut potatoes", "Add cheese", "Add milk", "Heat for 3 degrees"]
  },
  {
    title: "Schnitzel",
    ingredients: [
      "1 piece of veal",
      "100 mL of crumbs"
      // { name: "veal", value: 1, unit: "piece" },
      // { name: "crumbs", value: 100, unit: "mL" }
    ],
    steps: ["Put crumbs on veal", "Chuck it in the fryer"]
  }
];
let recipeListData = document.getElementById("recipeListData");

// https://stackoverflow.com/questions/45812160/unexpected-comma-using-map

// Responsive cards: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_column_cards

let mappedData = recipeObj
  .map(function (o) {
    return `
    <div class="column">
    <div class="recipeCard">
      <h3 class="recipe-title">${o.title}</h3>
      <b class="recipe-ingredients">Ingredients</b>
      ${o.ingredients
        .map(function (ingredient) {
          return `<ul>${ingredient}</ul>`;
        })
        .join("")}
     <br/>
      <b>Steps</b>

      ${o.steps
        .map(function (step) {
          return `<ul>${step}</ul>`;
        })
        .join("")}
    </div>
  </div>
  `;
  })
  .join("");

recipeListData.insertAdjacentHTML("beforeend", mappedData);

// For form submition/additional JS
const form = document.forms[0];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const { title, ingredients, steps } = this.elements;

  const ingredientsDelimited = ingredients.value.split(";");
  console.log("ingredientsDelimited", ingredientsDelimited);
  const stepsDelimited = steps.value.split(";");
  let tempObj = {
    title: title,
    ingredients: ingredientsDelimited,
    steps: stepsDelimited
  };

  let recipeListData = document.getElementById("recipeListData");

  // https://stackoverflow.com/questions/45812160/unexpected-comma-using-map

  let mappedData = `
    <div class="column">
    <div class="recipeCard">
      <h3 class="recipe-title">${tempObj.title.value}</h3>
      <b class="recipe-ingredients">Ingredients</b>
      ${ingredientsDelimited
        .map(function (ingredient) {
          return `<ul>${ingredient}</ul>`;
        })
        .join("")}
     <br/>
      <b>Steps</b>

      ${stepsDelimited
        .map(function (step) {
          return `<ul>${step}</ul>`;
        })
        .join("")}
    </div>
  </div>
  `;

  recipeListData.insertAdjacentHTML("beforeend", mappedData);

  // or
  // const { title, ingredients, steps } = event.target.elements;
  // recipeObj.push({
  //   title: "Au Gratin Potatoes",
  //   ingredients: [
  //     { title: "milk", value: 100, unit: "mL" },
  //     { title: "pineapple", value: 2, unit: "slices" }
  //   ]
  // });
  console.log(title.value, ingredients.value, steps.value);
});

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

// For delete all button
const deleteButton = document.getElementById("deleteAllRecipesButton");

// Calling the function after click event occurs
// deleteButton.addEventListener("click", function () {
//   deleteAllRecipes();
// });

deleteButton.addEventListener("click", deleteAllRecipes);

function deleteAllRecipes() {
  const recipeCards = document.querySelectorAll(".recipeCard");

  for (const recipeCard of recipeCards) {
    console.log("Removing yeahhhh for loop");
    // ✅ Remove multiple classes from element
    recipeCard.remove();
  }
  console.log("Yeah, deleted");
  // document.getElementById("demo").innerHTML = "Hello World";
}

// Clear input button

const clearInputButton = document.getElementById("clearInputButton");

clearInputButton.addEventListener("click", clearInputFields);

function clearInputFields() {
  // Clear title
  document.getElementById("title").value = "";
  // Clear Ingredients
  document.getElementById("ingredients").value = "";
  // Clear Steps
  document.getElementById("steps").value = "";
}
