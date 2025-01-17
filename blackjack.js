const blackjackDeck = getDeck();

/**
 * Represents a card player (including dealer).
 * @constructor
 * @param {string} name - The name of the player
 */
class CardPlayer {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.drawCard = function () {
      let cardGenerator = Math.floor(Math.random() * 52);
      this.hand.push(blackjackDeck[cardGenerator])
    };
  }
}; //TODO

// CREATE TWO NEW CardPlayers
const dealer = new CardPlayer('Dealer'); // TODO
const player = new CardPlayer('Player'); // TODO

/**
 * Calculates the score of a Blackjack hand
 * @param {Array} hand - Array of card objects with val, displayVal, suit properties
 * @returns {Object} blackJackScore
 * @returns {number} blackJackScore.total
 * @returns {boolean} blackJackScore.isSoft
 */

// CREATE FUNCTION HERE
const calcPoints = (hand) => {
  let aceCount = 0;
  let total = 0;
  let isSoft = true;
  for (let i = 0; i < hand.length; i++) {

    if (hand[i].displayVal === "Ace") {
      aceCount += 1
          }
    if (hand[i].displayVal === "Ace" && aceCount > 1) {
      aceCount += 1
      total += 1
    }
    else {
      total += hand[i].val
    }

  }
  if (aceCount < 0) { isSoft = false }
  return { total: total, isSoft: isSoft }
}

/**
* Determines whether the dealer should draw another card.
* 
* @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
* @returns {boolean} whether dealer should draw another card
*/
const dealerShouldDraw = (dealerHand) => {
  // CREATE FUNCTION HERE
  if (calcPoints(dealerHand.total) <= 16) {
    return true;
  } else if (calcPoints(dealerHand.isSoft) && calcPoints(dealerHand.total) === 17) {
    return true;
  } else
    return false;
}

/**
 * Determines the winner if both player and dealer stand
 * @param {number} playerScore 
 * @param {number} dealerScore 
 * @returns {string} Shows the player's score, the dealer's score, and who wins
 */
const determineWinner = (playerScore, dealerScore) => {
  // CREATE FUNCTION HERE
  let winner = ""
  if (playerScore > dealerScore) {
    winner = "Player";
  } else if (dealerScore > playerScore) {
    winner = "Dealer";
  } else if (playerScore === dealerScore) {
    winner = "Tie"
  }
  return `Player:  ${playerScore} Dealer:  ${dealerScore}, Winner is:  ${winner}`
}


/**
 * Creates user prompt to ask if they'd like to draw a card
 * @param {number} count 
 * @param {string} dealerCard 
 */
const getMessage = (count, dealerCard) => {
  return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}

/**
 * Logs the player's hand to the console
 * @param {CardPlayer} player 
 */
const showHand = (player) => {
  const displayHand = player.hand.map((card) => card.displayVal);
  console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
}

/**
 * Runs Blackjack Game
 */
const startGame = function () {
  player.drawCard();
  dealer.drawCard();
  player.drawCard();
  dealer.drawCard();

  let playerScore = calcPoints(player.hand).total;
  showHand(player);
  while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
    player.drawCard();
    playerScore = calcPoints(player.hand).total;
    showHand(player);
  }
  if (playerScore > 21) {
    return 'You went over 21 - you lose!';
  }
  console.log(`Player stands at ${playerScore}`);

  let dealerScore = calcPoints(dealer.hand).total;
  while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
    dealer.drawCard();
    dealerScore = calcPoints(dealer.hand).total;
    showHand(dealer);
  }
  if (dealerScore > 21) {
    return 'Dealer went over 21 - you win!';
  }
  console.log(`Dealer stands at ${dealerScore}`);

  return determineWinner(playerScore, dealerScore);
}
console.log(startGame());