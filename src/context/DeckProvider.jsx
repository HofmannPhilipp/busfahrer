import { Dealer, standardDeck } from "card-dealer";
import React, { createContext, useContext, useState } from "react";

const DeckContext = createContext();
const deck = new Dealer(standardDeck).shuffle();
function DeckProvider({ children }) {
  function drawCardFromDeck() {
    return deck.draw()[0];
  }

  function drawCardsForDrinkAndHandOut() {
    deck.shuffle();
    return {
      drinkCards: deck._drawPile.slice(0, 4),
      handOutCards: deck._drawPile.slice(4, 8),
    };
  }
  function getCardId(rank, suit) {
    return `cards/${suit}_${rank}`.toLocaleLowerCase();
  }
  function createPyramide() {
    deck.reset().shuffle();
    return [
      [drawCardFromDeck()],
      [drawCardFromDeck(), drawCardFromDeck()],
      [drawCardFromDeck(), drawCardFromDeck(), drawCardFromDeck()],
      [
        drawCardFromDeck(),
        drawCardFromDeck(),
        drawCardFromDeck(),
        drawCardFromDeck(),
      ],
    ];
  }
  function resetDeck() {
    deck.reset().shuffle();
  }

  return (
    <DeckContext.Provider
      value={{
        drawCardFromDeck,
        deck,
        drawCardsForDrinkAndHandOut,
        createPyramide,
        getCardId,
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
