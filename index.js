// The first dice
// Generate random number starting from 1 to 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// change the image to a random dice
let randomDice = "dice" + randomNumber1 + ".png";

// Get random images
let randomImageSource = "./images/" + randomDice;

// Select and change the attribute
let image = document.querySelectorAll("img")[0];

image.setAttribute("src", randomImageSource);


// The second dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDice2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "./images/" + randomDice2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🚩 player 2 Wins! ";
} else {
  document.querySelector("h1").innerHTML = "Draw! 🚩🚩";
}