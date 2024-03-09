
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];
let player1Hand = [];
let player2Hand = [];
let player1Points = 0;
let player2Points = 0;
let roundNumber = 0;
// Setting up arrays and some verables before getting started
function createDeck() {
    for (const suit of suits) {
      for (const rank of ranks) {
        deck.push({ suit, rank });
      }
    }
}

function shuffleDeck() {// loop thur the cards array to creat a shuffle that replaces each card with an othe card.
for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}
function dealCards() {// making sure each player has equal cards in there hand by creating new arrays from the deck of cards array
        player1Hand = deck.slice(0, deck.length / 2);
        player2Hand = deck.slice(deck.length / 2);
}
    
function playRound() {
    roundNumber++;
    console.log(`Round ${roundNumber}`);
    
    const card1 = player1Hand.pop();// card is being played
    const card2 = player2Hand.pop();
    
    console.log(`Player 1 plays: ${card1.rank} of ${card1.suit}`);
    console.log(`Player 2 plays: ${card2.rank} of ${card2.suit}`);// informs us of what card is being played
    
    if (ranks.indexOf(card1.rank) > ranks.indexOf(card2.rank)) {//used indexOf so dont have to give each card face a value, 
                                                                //uses its place in the arrays to compare between the two cards
        console.log('Player 1 wins the round!');//compars the cards to see who wins
        player1Points++;// hads a point for everywhen
    } else if (ranks.indexOf(card1.rank) < ranks.indexOf(card2.rank)) {
        console.log('Player 2 wins the round!');
        player2Points++;
    } else {
        console.log('It\'s a tie!');
    }
    
    console.log(`Player 1 has ${player1Points} points`);
    console.log(`Player 2 has ${player2Points} points`);
}
    
function startGame() {// startes each game with new cards, new shuffle and new cards for each player
    deck = [];
    player1Hand = [];
    player2Hand = [];
    player1Points = 0;
    player2Points = 0;
    roundNumber = 0;
    
    createDeck();
    shuffleDeck();
    dealCards();
    
    console.log('Game started!');
    
    while (player1Hand.length > 0 && player2Hand.length > 0) {
        playRound();// loops thur rounds intill players have no cards left 
    }
    
    if (player1Points > player2Points) {//compars points made by each player to see who wins 
        console.log(`Player 1 wins the game with ${player1Points} points!`);
      } else if (player1Points < player2Points) {
        console.log(`Player 2 wins the game with ${player2Points} points!`);
      } else {
        console.log('It\'s a tie!')
    }
}

startGame()
 

