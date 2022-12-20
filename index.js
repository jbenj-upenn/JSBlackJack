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



let cards = [firstCardEl, secondCardEl] //array: ordered list of items
let card = 7;

var sum = cards[0] + cards[1];

let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el")

let newCardEl = document.querySelector("#new-card-el");

function startGame() {
    renderGame()
}

function renderGame() {
    // render first two cards
    cards[0] = Math.floor(Math.random() * 11) + 2;
    cards[1] = Math.floor(Math.random() * 11) + 2;

    firstCardEl.textContent = "First Card: " + cards[0]
    secondCardEl.textContent = "; Second Card: " + cards[1]
    
    //render all cards we have
    var sum = cards[0] + cards[1];
    sumEl.textContent = "You have: " + sum

  if (sum < 21) {
    message = "Draw another card with " + sum + "?";
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

function newCard(){
    console.log("new card drawn");
    newCardEl.textContent = "Hit? "
    card = Math.floor(Math.random() * 11) + 2;
    
    sum += card;
    cards.push(card)

    renderGame()
    
    console.log(cards)
    

  }

// CASH OUT: create a variable to keep track of state of game
console.log(hasBlackJack);
console.log(isAlive);
