/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Israel Oyeyemi",
  photo: "images/IMG_20221028_141537.jpg",
  favoriteFoods: [
    "Beans",
    "steak",
    "Grilled fish and fries",
    "Vanilla and strawberry icecream",
    "Semo and ewedu soup",
  ],
  hobbies: [
    "💡 Listening to music",
    "💡 Writing and debugging code",
    "💡 Soccer games",
    "💡 Watching movies",
  ],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
  place: "Ota, Ogun state. Nigeria",
  lenght: "4 years",
});

myProfile.placesLived.push({
  place: "ibadan, Nigeria",
  lenght: "2 weeks",
});

myProfile.placesLived.push({
  place: "Dopemu, Lagos.Nigeria",
  lenght: "6 months",
});
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

const imageElement = document.querySelector("#photo");
imageElement.setAttribute("src", myProfile.photo);
imageElement.setAttribute("alt", `Profile image of ${myProfile.name}`);
/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});
/* Hobbies List */

myProfile.hobbies.forEach((hobbies) => {
  let li = document.createElement("li");
  li.textContent = hobbies;
  document.querySelector("#hobbies").appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach((places) => {
  let dt = document.createElement("dt");
  dt.textContent = places.place;
  document.querySelector("#places-lived").appendChild(dt);

  //lenght

  let dd = document.createElement("dd");
  dd.textContent = places.lenght;
  document.querySelector("#places-lived").appendChild(dd);
});
//myProfile.placesLived.forEach((length) => {
