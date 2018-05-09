 //Create a list that holds all of your cards//
//definingcards by their class//
let card = document.getElementsByClassName("card");


//Add empty array of cards//
let cards = [...card];

console.log(cards); //testing it prints an array//



//Add empty array of opened cards//
var openedCards = [];


//defining deck from element//
const deck = document.getElementById("deckOfCards");


//Defining moves using query selector//
let moves= 0;
let movesCounter =document.querySelector('.moves');

//starsusing query selector//
let stars = "";
let starsCounter =document.querySelector('.stars');


//Defining restart using query selector//
let reset =document.querySelector('.restart');


//Defining retry button using query selector//
let retry =document.querySelector('.retry');

 // Display the cards on the page//
 //shuffle the list of cards using the provided "shuffle" method below//
// Shuffle function from http://stackoverflow.com/a/2450976//

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

    console.log("shuffle function working");
}



 //Begin the game function//
 function playGame(){

var shuffleDeck = shuffle(cards);

 //loop through each card and create its HTML//
 //add each card's HTML to the page//
var i;
for (var i = 0; i < shuffleDeck.length; i++) {
	deck.innerHTML = "";
 [].forEach.call(shuffleDeck, function(item){

deck.appendChild(item);

 });
cards[i].classList.remove("show", "open", "match", "disable");

}
 console.log("playGame function working");
 }

 window.onload = playGame();//on load of browser game should commence//


//set up the event listener for a card. If a card is clicked://
//will go to funtion showCard//
 for (var i = 0; i < cards.length; i++) {

 cards[i].addEventListener("click", showCard);
 cards[i].addEventListener("click", openCards);
 reset.addEventListener("click", restartGame);
 retry.addEventListener("click", restartGame);

   console.log("event listener working");

};


 //display the card's symbol (put this functionality in another function that you call from this one)//
function showCard(){
	 if(openCards.length < 2) {
this.classList.toggle("open");
this.classList.toggle("show");
this.classList.toggle("disable");
}else{
	return false;
}
};

 console.log("showCard function working");


//add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)//
function openCards() {
    openedCards.push(this);
    var num = openedCards.length;
    console.log(num);
    

if (num === 2) {
   countMoves();
if(openedCards[0].innerHTML === openedCards[1].innerHTML){
   cardsMatched();
}else {
	noMatch();
}
}

console.log("opecards function working");
};
 

 //increment the move counter and display it on the page (put this functionality in another function that you call from this one)
function countMoves(){

  moves  ++; //moves the counter up one after each 2 cards are clicked//
   movesCounter.innerHTML = moves; //displays the values of moves on the page//

//If staement for star colours to change based on the number of moves it takes the user to complete the game//
   if(moves == 16){
   document.querySelector('.stars').style.color = "green";
}else if 
(moves > 16 && moves <= 24){
  document.querySelector('.stars').style.color = "yellow";
}else if 
(moves > 24) {
  document.querySelector('.stars').style.color = "red";
}
}
   
 
 // if the list already has another card, check to see if the two cards match//
function cardsMatched(){
    openedCards[0].classList.add("match", "disable");
    openedCards[1].classList.add("match", "disable");
  openedCards = [];
 console.log("Match function working");

};

 // if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)//
function noMatch(){
    
    setTimeout(function(){ 
    openedCards[0].classList.remove("open", "show", "disable");
    openedCards[1].classList.remove("open", "show", "disable" );
    openedCards = [];
   
       }, 
       500);
     console.log("noMatch function working");
};

//if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)//

function disable(){
    Array.prototype.filter.call(cards, function(cards){
        card.classList.add("disable");
    });
}



 //if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)//
 

 //resets the game and clears all cards clicked
  function restartGame(){

    playGame();
     let moves = 0;
    let stars = "";

  }
