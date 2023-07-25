import React, { createContext, useContext, useState } from "react";
import { Deck } from "../utils/standardDeck";

const DeckContext = createContext();
const deck = new Deck(32).shuffle();

function DeckProvider({ children }) {
  function drawCardFromDeck() {
    return deck.draw()[0];
  }

  function drawCardsForDrinkAndHandOut() {
    deck.shuffle();
    return {
      drinkCards: deck.draw(4),
      handOutCards: deck.draw(4),
    };
  }
  // function getCardId(rank, suit) {
  //   return `${suit}_${rank}`.toLocaleLowerCase();
  // }
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
    // const pyramide = [
    //   [pyramideDeck.draw()[0]],
    //   [pyramideDeck.draw()[0], pyramideDeck.draw()[0]],
    //   [pyramideDeck.draw()[0], pyramideDeck.draw()[0], pyramideDeck.draw()[0]],

    //   [
    //     pyramideDeck.draw()[0],
    //     pyramideDeck.draw()[0],
    //     pyramideDeck.draw()[0],
    //     pyramideDeck.draw()[0],
    //   ],
    // ];
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
