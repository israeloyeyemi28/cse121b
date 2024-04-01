const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessField = document.getElementById("guessField");
const message = document.getElementById("message");
const button = document.getElementById("check");
let box = document.querySelector(".box");
let guessCount = 0;

// function checkGuess() {
button.addEventListener("click", () => {
  const userGuess = parseInt(guessField.value);
  guessCount++;

  if (userGuess === randomNumber) {
    message.textContent = `Congrats! You guessed the correct number(${randomNumber}) and it took you ${guessCount} guesses`;
    message.style.color = "#81c784";
    box.style.backgroundColor = "green";
    guessField.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = `Too Low!😕😒😔`;
    message.style.color = "white";
    box.style.backgroundColor = "red";
  } else {
    message.textContent = `Too High Naaa! Oya try Again`;
    message.style.color = "white";
  }
  guessField.value = "";
});
// }
