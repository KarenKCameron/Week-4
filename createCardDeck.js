/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
      
  const suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
  let cards = [];

  for (let i = 0; i < suits.length; i++) {    
    
    for (let j = 1; j <= 13; j++) {
    
        let displayVal;
        let val;
      
        switch(j) {
          case 11:
            displayVal = "Jack";
            val = 10;
            break;
          case 12:
            displayVal = "Queen";
            val = 10;
            break;
          case 13:
            displayVal = "King";
            val = 10;
            break;
          case 1:
            displayVal = "Ace";
            val = 11;
            break;
          default:
            displayVal = j
            val = j;
            break;            
        }
        cards.push({
          val,
          displayVal,
          suit: suits[i] 
        })
      }
    }
    return cards;  
  }
// CHECKS
const deck = getDeck();
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal = randomCard && randomCard.val && typeof randomCard.val === 'number';
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit = randomCard && randomCard.suit && typeof randomCard.suit === 'string';
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal = randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string';
console.log(`Random card has display value? ${cardHasDisplayVal}`);
console.log(randomCard); //testing Random Card value is returning true/false accurately.