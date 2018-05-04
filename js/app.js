/*
 * Create a list that holds all of your cards
 */

/*definingcards*/
let card = document.getElementsByClassName("card");
/*
 * Add empty array of cards
 */
let cards = [...card];

console.log(cards); /*testing it prints an array*/


/*
 * Add empty array of opened cards
 */
var openedCards = [];


/*defining deck*/
const deck = document.getElementById("deckOfCards");


/*moves*/
let moves= 0;
let movesCounter =document.querySelector('.moves');

/*stars*/
let stars = "";
let starsCounter =document.querySelector('.stars');




/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
// Shuffle function from http://stackoverflow.com/a/2450976*/
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


/*
 * Begin the game function
 */



 function playGame(){

var shuffleDeck = shuffle(cards);

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

 window.onload = playGame();

/*
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 


/*
 * set up the event listener for a card. If a card is clicked:
 will go to funtion showCard
 */

 
 for (var i = 0; i < cards.length; i++) {

 cards[i].addEventListener("click", showCard);
 cards[i].addEventListener("click", openCards);

   console.log("event listener working");

};


 /*
 *  - display the card's symbol (put this functionality in another function that you call from this one)
  */


function showCard(){
this.classList.toggle("open");
this.classList.toggle("show");
this.classList.toggle("disable");

 console.log("showCard function working");


};

 /*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 */
function openCards() {
    openedCards.push(this);
    var num = openedCards.length;
    console.log(num);
    countMoves();

if (num === 2) {
   
if(openedCards[0].type === openedCards[1].type){
   cardsMatched();
}else {
	noMatch();
}
}

console.log("opecards function working");
};
 


function countMoves(){

  moves ++; //moves the counter up one after each card is clicked
   movesCounter.innerHTML = moves; //displays the values of moves on the page

//If staement for star colours to change based on the number of moves it takes the user to complete the game
   if(moves == 16){
   document.querySelector('.stars').style.color = "green";
}else if 
(moves > 2 && moves < 8){
  document.querySelector('.stars').style.color = "yellow";
}else if 
(moves > 8  && moves < 16){
  document.querySelector('.stars').style.color = "red";
}else
    document.querySelector('.stars').style.color = "black";
}




  /*
 
 *  - if the list already has another card, check to see if the two cards match
*/

function cardsMatched(){
    openedCards[0].classList.add("match", "disable");
    openedCards[1].classList.add("match", "disable");
  
  
 console.log("Match function working");

};


  /*
function noMatch(){
    
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openCards[0].classList.remove("unmatched");
    openCards[1].classList.remove("unmatched");
        enable();
        openedCards = [];
    },1100);
     console.log("noMatch function working");
};

*/

function disable(){
    Array.prototype.filter.call(cards, function(card){
        card.classList.add('disable');
    });
}

function enable(){



}





    










 /*
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 
