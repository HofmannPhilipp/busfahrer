import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDeck } from "../context/DeckProvider";
import Card from "./Card";
import { useGameState } from "../context/GameStateProvider";

function SecondRound() {
  const [cards, setCards] = useState();
  const { drawCardsForDrinkAndHandOut, getCardId } = useDeck();
  const { setThirdRound } = useGameState();
  useEffect(() => {
    setCards(drawCardsForDrinkAndHandOut());
  }, []);

  return (
    <div className="py-10 text-white">
      {cards && (
        <div className="space-y-2">
          <p>Trinken</p>
          <div className="flex space-x-1">
            {cards.drinkCards.map((card, idx) => (
              <Card
                key={idx}
                id={getCardId(card.rank, card.suit)}
                isFlipped={false}
                enableOnClick
              />
            ))}
          </div>
          <p>Verteilen</p>
          <div className="flex space-x-1">
            {cards.handOutCards.map((card, idx) => (
              <Card
                key={idx}
                id={getCardId(card.rank, card.suit)}
                isFlipped={false}
                enableOnClick
              />
            ))}
          </div>
        </div>
      )}
      <button
        className="bg-green-500 py-1 rounded-lg block mt-5 mx-auto w-[164px]"
        onClick={setThirdRound}
      >
        Weiter
      </button>
    </div>
  );
}

export default SecondRound;
