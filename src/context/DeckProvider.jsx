import React, { createContext, useContext, useState } from "react";
import { Deck } from "../utils/Deck";
import { ACTIONS } from "../utils/firstRoundPlayStages";

const DeckContext = createContext();
const deck = new Deck(32).shuffle();

function DeckProvider({ children }) {
  function drawCardFromDeck() {
    return deck.draw()[0];
  }
  function firstRoundPlay(cards, card, type, value) {
    switch (type) {
      case ACTIONS.RED_OR_BLACK:
        if (value === "red") {
          return card.suit === "diamond" || card.suit === "heart";
        }
        if (value === "black") {
          return card.suit === "spade" || card.suit === "club";
        }
      case ACTIONS.UP_OR_DOWN:
        if (value === "equal") return cards[0].rank === card.rank;
        if (value === "up") return cards[0].rank < card.rank;
        if (value === "down") return cards[0].rank > card.rank;

      case ACTIONS.INSIDE_OR_OUTSIDE:
        if (value === "equal")
          return cards[0].rank === card.rank || cards[1].rank === card.rank;
        if (value === "inside")
          return cards[0].rank < card.rank && cards[1].rank > card.rank;
        if (value === "outside")
          return (
            (cards[0].rank > card.rank && cards[1].rank > card.rank) ||
            (cards[0].rank < card.rank && cards[1].rank < card.rank)
          );
      case ACTIONS.EQUAL_OR_DIFFRENT:
        return card.suit === value;
    }
  }

  function drawCardsForDrinkAndHandOut() {
    deck.shuffle();
    return {
      drinkCards: deck.getCards(0, 4),
      handOutCards: deck.getCards(4, 8),
    };
  }

  function createPyramide() {
    const pyramideDeck = new Deck(32).shuffle();
    const pyramide = [];
    for (let i = 1; i <= 4; i++) {
      let level = [];
      for (let j = 1; j <= i; j++) {
        level.push(pyramideDeck.draw()[0]);
      }
      pyramide.push(level);
    }
    return pyramide;
  }
  function resetDeck() {
    deck.reset();
  }

  return (
    <DeckContext.Provider
      value={{
        drawCardFromDeck,
        deck,
        firstRoundPlay,
        drawCardsForDrinkAndHandOut,
        createPyramide,
        resetDeck,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
}

export default DeckProvider;

export const useDeck = () => {
  return useContext(DeckContext);
};
