/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Israel Oyeyemi Oyedepo";
const currentYear = 2024;
const profilePicture = "images/IMG_20221028_141537.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodELement = document.getElementById("food");
let yearElement = document.querySelector("#year");
const imageElement = document.querySelector("picture");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFood = [
  "KFC Chicken wings",
  "Fried rice",
  "Beans",
  "Nigerian Jollof rice",
  "Fries",
  "Coconut rice",
  "Grilled Fish",
];

foodELement.innerHTML += `<br>${favoriteFood}`;
let missingFood = "Burger";
favoriteFood.push(missingFood);
foodELement.innerHTML += `<br>${favoriteFood}`;
// removes first element
favoriteFood.shift();
foodELement.innerHTML += `<br>${favoriteFood}`;
//removes last element
favoriteFood.pop();
foodELement.innerHTML += `<br>${favoriteFood}`;
