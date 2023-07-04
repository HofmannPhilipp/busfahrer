import React, { useEffect, useState } from "react";
import Card from "./Card";
import { ACTIONS } from "../reducer/playersReducer";
import { useDeck } from "../context/DeckProvider";
import {
  useGameState,
  useGameStateDispatch,
} from "../context/GameStateProvider";

function PlayerTurn({ playerName, ui }) {
  const { nextPlayerTurn } = useGameState();
  const dispatch = useGameStateDispatch();
  const [card, setCard] = useState();
  const [flipCard, setflipCard] = useState(false);
  const { drawCardFromDeck, getCardId } = useDeck();
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    setCard(drawCardFromDeck());
    dispatch({
      type: ACTIONS.SET_ACTIVE_PLAYER,
      payload: { name: playerName, active: true },
    });
  }, []);

  function handleClick() {
    if (flipCard) return;
    setflipCard(true);
    dispatch({
      type: ACTIONS.DRAW_CARD_FROM_DECK,
      payload: {
        name: playerName,
        card: card,
      },
    });
    setShowNext(true);
  }

  function onNextPlayerTurn() {
    setflipCard(false);
    nextPlayerTurn();
    setShowNext(false);
    dispatch({
      type: ACTIONS.SET_ACTIVE_PLAYER,
      payload: { name: playerName, active: false },
    });
  }

  return (
    <div className="text-white">
      <div className="text-lg font-bold text-center">
        <p>{playerName}</p>
        <p>{ui.info}</p>
      </div>

      <div className="h-[148px] my-5 flex justify-center">
        {card && (
          <Card id={getCardId(card.rank, card.suit)} isFlipped={flipCard} />
        )}
      </div>
      <div className={`flex justify-center gap-2 font-semibold`}>
        {ui.buttons.map(({ text, value, style }) => (
          <button
            key={value}
            onClick={handleClick}
            className={`w-[80px] py-1 rounded-lg ${style}`}
          >
            {text}
          </button>
        ))}
      </div>
      {showNext && (
        <button
          className="bg-green-500 py-1 rounded-lg block mt-5 mx-auto w-[164px]"
          onClick={onNextPlayerTurn}
        >
          Weiter
        </button>
      )}
    </div>
  );
}

export default PlayerTurn;
