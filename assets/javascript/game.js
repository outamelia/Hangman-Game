/// Declare varibles

var Santalist = ['list', 'reindeer', 'elves', 'sleigh bells', 'cookie', 
'sleigh', 'toys', 'Rudolph', 'holly', 'jolly', 'stocking stuffer', 
'coal', 'boots', 'gift paper', 'spirit of Christmas'];
var wordPicked = "";
var letterPicked = [];
var blanks = [];
var totalBlanks = 0;
var guesses = totalguesses, alreadyGuessed = []; 
var userGuess = 'a';

// Tracker
var win = 0;
var loss = 1;
var totalguesses = 15;
var incorrect = [];

//Setting up the game
function playgame() {
guesses = totalguesses;
alreadyGuessed = [];

wordPicked = Santalist[Math.floor(Math.random() * Santalist.length)];
letterPicked = wordPicked.split("");
totalBlanks = letterPicked.length;

console.log(wordPicked)
console.log(totalBlanks)

 var blanks = "_".repeat( letterPicked.length );
//for(var g = 0; g < totalBlanks; g++){
   // blanks.push("_");

console.log(blanks)

document.getElementById('alreadyGuessed').innerHTML = '';
document.getElementById('guesses').innerHTML = guesses + 'guesses';

console.log("User guess " + userGuess);

}

function checkWordforLetter(letter){
 if (wordPicked.indexOf(letter) > -1 )
  	
  if(letterPicked){
        for(l = 0; l < totalBlanks; l++){
            if(wordPicked[l] === letter){
            	blanks[l] = letter;
        }
    }

    }else{
        totalguesses --;
        incorrect.push(letter)
    }
} 

function selectIds(){
    document.getElementById('alreadyGuessed').innerHTML += userGuess;
    document.getElementById('guesses').innerHTML = totalguesses;
    document.getElementById('alreadyGuessed').innerHTML = incorrect.join(" ");
   
   console.log(letterPicked)
   console.log(blanks) 

if(letterPicked.join(" ") === blanks.join(" ")){
win++;
    alert("You are on Santa's Nice List!!");
    document.getElementById('win').innerHTML = win;
        playgame();
    }

    else if(totalguesses === 0){
    document.getElementById('loss').innerHTML  = loss ++;
    document.getElementById('incorrect').innerHTML = "";
    alert("You've been Naughty");        
        playgame();
    }
}

playgame ();
document.onkeyup = function(event){
  var guessAletter = String.fromCharCode(event.keyCode).toLowerCase();
  console.log("this is the letter we typed", guessAletter)
  checkWordforLetter(guessAletter)
  selectIds();
}