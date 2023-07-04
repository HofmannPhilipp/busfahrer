import React from "react";
import { useEffect } from "react";
import { useDeck } from "../context/DeckProvider";
import { useState } from "react";
import Card from "./Card";
import {
  useGameState,
  useGameStateDispatch,
} from "../context/GameStateProvider";
import { ACTIONS } from "../reducer/playersReducer";

function Pyramide() {
  const { createPyramide, getCardId, resetDeck } = useDeck();
  const { resetGameState } = useGameState();
  const dispatch = useGameStateDispatch();
  const [pyramide, setPyramide] = useState();

  useEffect(() => {
    setPyramide(createPyramide());
  }, []);

  function resetGame() {
    dispatch({ type: ACTIONS.RESET_PLAYERS_CARDS });
    resetDeck();
    resetGameState();
  }

  return (
    <div className=" py-5">
      <div className="space-y-1">
        {pyramide &&
          pyramide.map((level, idx) => (
            <div key={idx} className="flex justify-center gap-1">
              {level.map((card) => (
                <div
                  key={getCardId(card.rank, card.suit)}
                  className="h-[100px]"
                >
                  <Card
                    rank={card.rank}
                    suit={card.suit}
                    isFlipped={false}
                    enableOnClick
                  />
                </div>
              ))}
            </div>
          ))}
      </div>
      <button
        className="bg-green-500 py-1 rounded-lg block mt-10 mx-auto w-[164px]"
        onClick={() => setPyramide(createPyramide())}
      >
        Verkackt
      </button>
      <button
        className="bg-green-500 py-1 rounded-lg block mt-10 mx-auto w-[164px]"
        onClick={resetGame}
      >
        Neues Spiel
      </button>
    </div>
  );
}

export default Pyramide;
