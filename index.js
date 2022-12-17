// Check player is 21 or older
let age = 22;

if (age < 21) {
  console.log("Sorry, you're too young to play.");
} else {
  console.log("Have a seat at the Black Jack table!");
}
// Get cards and play Black Jack
var firstCardEl = document.getElementById("firstCard")
var secondCardEl = document.getElementById("secondCard")
// var sum = firstCard + secondCard;
let sumEl = document.querySelector("#sum-el")

let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el")

function startGame() {
    firstCard = Math.floor(Math.random() * 11) + 2;
    secondCard = Math.floor(Math.random() * 11) + 2;
    var sum = firstCard + secondCard;
    firstCard.textContent = firstCard
    secondCard.textContent = secondCard
    firstCardEl.textContent = "First Card: " + firstCard
    secondCardEl.textContent = "; Second Card: " + secondCard
    sumEl.textContent = "You have: " + sum
  if (sum < 21) {
    message = "You have " + sum + "; draw another card?";
  } else if (sum === 21) {
    message = "21 is Black Jack! You win!";
    hasBlackJack = true;
  } else {
    message = "You busted with " + sum + "!";
    isAlive = false;
  }
  // Log out message
  messageEl.textContent = message
}

// CASH OUT: create a variable to keep track of state of game
console.log(hasBlackJack);
console.log(isAlive);
