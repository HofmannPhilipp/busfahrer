import { Dealer, standardDeck } from "card-dealer";

const dealer = new Dealer(standardDeck);
dealer.shuffle();
const draw = dealer.draw(1);
console.log(draw);
console.log(dealer._drawPile.length, dealer._deck.length);
dealer.draw(1);
console.log(dealer._drawPile.length, dealer._deck.length);
