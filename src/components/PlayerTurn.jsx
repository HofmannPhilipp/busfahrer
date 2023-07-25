import React, { useEffect, useState } from "react";
import Card from "./Card";
import { ACTIONS } from "../reducer/playersReducer";
import { useDeck } from "../context/DeckProvider";
import {
  useGameState,
  useGameStateDispatch,
} from "../context/GameStateProvider";
import { rigthOrWrong } from "../utils/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PlayerTurn({ playerName, ui, cards }) {
  const { nextPlayerTurn } = useGameState();
  const dispatch = useGameStateDispatch();
  const [card, setCard] = useState();
  const [flipCard, setflipCard] = useState(false);
  const { drawCardFromDeck } = useDeck();
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    setCard(drawCardFromDeck());
    dispatch({
      type: ACTIONS.SET_ACTIVE_PLAYER,
      payload: { name: playerName, active: true },
    });
    cards.sort((a, b) => a.rank - b.rank);
  }, []);

  function handleClick(type, value, cards, card) {
    if (flipCard) return;
    if (rigthOrWrong(cards, card, type, value))
      toast.success(`${playerName} richtig.`, {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    else {
      toast.error(`${playerName} falsch.`, {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    setflipCard(true);
    setShowNext(true);
  }

  function onNextPlayerTurn() {
    dispatch({
      type: ACTIONS.DRAW_CARD_FROM_DECK,
      payload: {
        name: playerName,
        card: card,
      },
    });
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
        <div className="flex flex-col items-center ">
          <p>{playerName}</p>
        </div>
        <p>{ui.info}</p>
      </div>

      <div className="h-[148px] my-5 flex justify-center gap-2">
        {cards.map((card) => (
          <Card key={card.src} src={card.src} isFlipped />
        ))}
        {card && <Card src={card.src} isFlipped={flipCard} />}
      </div>

      {showNext ? (
        <button
          className="bg-green-500 py-1 rounded-lg block mt-5 mx-auto w-[164px]"
          onClick={onNextPlayerTurn}
        >
          Weiter
        </button>
      ) : (
        <div className={`flex justify-center gap-2 font-semibold`}>
          {ui.buttons.map(({ text, value, style }) => (
            <button
              key={value}
              onClick={() => handleClick(ui.type, value, cards, card)}
              className={`w-[80px] py-1 rounded-lg ${style}`}
            >
              {text}
            </button>
          ))}
        </div>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
  );
}

export default PlayerTurn;
