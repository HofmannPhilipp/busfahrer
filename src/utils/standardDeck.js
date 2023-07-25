const standardDeck = [
  { rank: "2", suit: "heart", src: "/hearts_2.png" },
  { rank: "2", suit: "diamond", src: "/diamonds_2.png" },
  { rank: "2", suit: "club", src: "/clubs_2.png" },
  { rank: "2", suit: "spade", src: "/spades_2.png" },

  { rank: "3", suit: "heart", src: "/hearts_3.png" },
  { rank: "3", suit: "diamond", src: "/diamonds_3.png" },
  { rank: "3", suit: "club", src: "/clubs_3.png" },
  { rank: "3", suit: "spade", src: "/spades_3.png" },

  { rank: "4", suit: "heart", src: "/hearts_4.png" },
  { rank: "4", suit: "diamond", src: "/diamonds_4.png" },
  { rank: "4", suit: "club", src: "/clubs_4.png" },
  { rank: "4", suit: "spade", src: "/spades_4.png" },

  { rank: "5", suit: "heart", src: "/hearts_5.png" },
  { rank: "5", suit: "diamond", src: "/diamonds_5.png" },
  { rank: "5", suit: "club", src: "/clubs_5.png" },
  { rank: "5", suit: "spade", src: "/spades_5.png" },

  { rank: "6", suit: "heart", src: "/hearts_6.png" },
  { rank: "6", suit: "diamond", src: "/diamonds_6.png" },
  { rank: "6", suit: "club", src: "/clubs_6.png" },
  { rank: "6", suit: "spade", src: "/spades_6.png" },

  { rank: "7", suit: "heart", src: "/hearts_7.png" },
  { rank: "7", suit: "diamond", src: "/diamonds_7.png" },
  { rank: "7", suit: "club", src: "/clubs_7.png" },
  { rank: "7", suit: "spade", src: "/spades_7.png" },

  { rank: "8", suit: "heart", src: "/hearts_8.png" },
  { rank: "8", suit: "diamond", src: "/diamonds_8.png" },
  { rank: "8", suit: "club", src: "/clubs_8.png" },
  { rank: "8", suit: "spade", src: "/spades_8.png" },

  { rank: "9", suit: "heart", src: "/hearts_9.png" },
  { rank: "9", suit: "diamond", src: "/diamonds_9.png" },
  { rank: "9", suit: "club", src: "/clubs_9.png" },
  { rank: "9", suit: "spade", src: "/spades_9.png" },

  { rank: "10", suit: "heart", src: "/hearts_10.png" },
  { rank: "10", suit: "diamond", src: "/diamonds_10.png" },
  { rank: "10", suit: "club", src: "/clubs_10.png" },
  { rank: "10", suit: "spade", src: "/spades_10.png" },

  { rank: "jack", suit: "heart", src: "/hearts_jack.png" },
  { rank: "jack", suit: "diamond", src: "/diamonds_jack.png" },
  { rank: "jack", suit: "club", src: "/clubs_jack.png" },
  { rank: "jack", suit: "spade", src: "/spades_jack.png" },

  { rank: "queen", suit: "heart", src: "/hearts_queen.png" },
  { rank: "queen", suit: "diamond", src: "/diamonds_queen.png" },
  { rank: "queen", suit: "club", src: "/clubs_queen.png" },
  { rank: "queen", suit: "spade", src: "/spades_queen.png" },

  { rank: "king", suit: "heart", src: "/hearts_king.png" },
  { rank: "king", suit: "diamond", src: "/diamonds_king.png" },
  { rank: "king", suit: "club", src: "/clubs_king.png" },
  { rank: "king", suit: "spade", src: "/spades_king.png" },

  { rank: "ace", suit: "heart", src: "/hearts_ace.png" },
  { rank: "ace", suit: "diamond", src: "/diamonds_ace.png" },
  { rank: "ace", suit: "club", src: "/clubs_ace.png" },
  { rank: "ace", suit: "spade", src: "/spades_ace.png" },
];

export class Deck {
  constructor(deckSize) {
    this.deckSize = deckSize;
    if (deckSize == 32) this.cards = standardDeck.slice(16);
    else this.cards = standardDeck;
  }

  shuffle() {
    let i = this.cards.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [this.cards[randIndex], this.cards[i]] = [
        this.cards[i],
        this.cards[randIndex],
      ];
    }
    return this;
  }
  draw(amount = 1) {
    if (this.cards.length <= 0) return;
    return this.cards.splice(0, amount);
  }
  reset() {
    if (this.deckSize == 32) this.cards = standardDeck.slice(16);
    else this.cards = standardDeck;
  }
}
