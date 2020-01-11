console.log("Up and running!");
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}
flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
		cardsInPlay.push(cards[cardId]);
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	checkForMatch();
}
}
	


