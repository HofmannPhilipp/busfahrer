import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDeck } from "../context/DeckProvider";
import Card from "./Card";
import { useGameState } from "../context/GameStateProvider";

function ThirdRound() {
  const [card, setCard] = useState();
  const { setPyramide } = useGameState();
  const { drawCardFromDeck } = useDeck();
  useEffect(() => {
    setCard(drawCardFromDeck());
  }, []);
  return (
    <div className="">
      {card && (
        <div className="h-[148px] my-5 flex justify-center">
          <Card rank={card.rank} suit={card.suit} isFlipped={true} />
        </div>
      )}
      <button
        className="bg-green-500 py-1 rounded-lg block mt-5 mx-auto w-[164px]"
        onClick={() => setCard(drawCardFromDeck())}
      >
        Neue Karte
      </button>
      <button
        className="bg-green-500 py-1 rounded-lg block mt-5 mx-auto w-[164px]"
        onClick={setPyramide}
      >
        Weiter zu Pyramide
      </button>
    </div>
  );
}

export default ThirdRound;
