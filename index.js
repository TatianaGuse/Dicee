var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumber2 = Math.floor(Math.random()*6)+1;

var image1 = "images/dice" + randomNumber1 +".png";
var image2 = "images/dice" + randomNumber2 +".png";


document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);

if (randomNumber1 > randomNumber2) {
 document.querySelector("h1").innerHTML = "Player 1 Wins!",
 document.querySelector(".header img").style.visibility = "visible";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!",
  document.querySelector(".header img").style.marginLeft = "80%",
  document.querySelector(".header img").style.visibility = "visible";
}

else if (randomNumber1 = randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
