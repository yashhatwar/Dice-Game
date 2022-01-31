var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage= "dice"+randomNumber1+".png";

var randomImageSource="images/"+randomDiceImage;

// var randomDiceImage=document.getElementsByTagName('images')
// if(randomDiceImage&randomDiceImagee.style){
//     randomDiceImage.style.height='3rem';
//     randomDiceImage.style.width='3rem';
// }

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2="dice"+randomNumber2+".png";

var randomImageSource2="images/"+randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


