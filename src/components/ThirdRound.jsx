import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDeck } from "../context/DeckProvider";
import Card from "./Card";
import { useGameState } from "../context/GameStateProvider";
import TestCard from "./TestCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ThirdRound() {
  const [card, setCard] = useState();
  const { setPyramide } = useGameState();
  const { drawCardFromDeck } = useDeck();
  const { playersState } = useGameState();
  const [players, setPlayers] = useState(playersState.players);
  useEffect(() => {
    if (!card) return;
    playersState.players.map((player) => {
      const matchedCards = player.cards.filter(
        (tempCard) => tempCard.rank === card.rank
      ).length;
      if (matchedCards > 0) {
        toast.success(`${player.name} ist raus.`, {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        const tempPlayers = players.filter(({ name }) => name !== player.name);
        setPlayers(tempPlayers);
      }
    });
  }, [card]);

  function handleClick() {
    setCard(drawCardFromDeck());
  }

  return (
    <div className="text-white">
      {card && (
        <div className="h-[148px] my-5 flex justify-center">
          <Card src={card.src} isFlipped={true} />
        </div>
      )}

      <button
        className="bg-green-500 py-1 rounded-lg block mt-5 mx-auto w-[164px]"
        onClick={handleClick}
      >
        Zieh Karte
      </button>

      <button
        className="bg-green-500 py-1 rounded-lg block mt-5 mx-auto w-[164px]"
        onClick={setPyramide}
      >
        Weiter zu Pyramide
      </button>

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

export default ThirdRound;
