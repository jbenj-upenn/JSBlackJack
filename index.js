var firstCard = Math.floor(Math.random() * 11) + 2;
var secondCard = Math.floor(Math.random() * 11) + 2;

var sum = firstCard + secondCard;

if(sum < 21){
    console.log("You have " + sum + "; draw another card? 🙂");
}else if(sum === 21){
    console.log("Black Jack! You win! 🥳")
}else{
    console.log("You busted with " + sum + "! 😭");
}