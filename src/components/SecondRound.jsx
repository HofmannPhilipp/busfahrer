import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDeck } from "../context/DeckProvider";
import Card from "./Card";
import { useGameState } from "../context/GameStateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SecondRound() {
  const [cards, setCards] = useState();
  const { drawCardsForDrinkAndHandOut } = useDeck();
  const { setThirdRound } = useGameState();
  const { playersState } = useGameState();

  useEffect(() => {
    setCards(drawCardsForDrinkAndHandOut());
  }, []);

  function handleClick(rank, type, value) {
    playersState.players.map((player) => {
      const matchedCards = player.cards.filter(
        (card) => card.rank === rank
      ).length;
      if (matchedCards > 0) {
        if (type === "drink") {
          toast.error(
            `${player.name} trink ${value * matchedCards} ${
              value > 1 ? `schlücke` : `schluck`
            }!`,
            {
              position: "top-center",
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        }
        if (type === "handOut") {
          toast.success(
            `${player.name} verteil ${value * matchedCards} ${
              value > 1 ? `schlücke` : `schluck`
            }!`,
            {
              position: "top-center",
              autoClose: 10000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        }
      }
    });
  }

  return (
    <div className="py-10 text-white">
      {cards && (
        <div className="space-y-2">
          <p>Trinken</p>
          <div className="flex space-x-1">
            {cards.drinkCards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => handleClick(card.rank, "drink", idx + 1)}
              >
                <Card
                  key={idx}
                  src={card.src}
                  isFlipped={false}
                  enableOnClick
                />
              </div>
            ))}
          </div>
          <p>Verteilen</p>
          <div className="flex space-x-1">
            {cards.handOutCards.map((card, idx) => (
              <div
                key={idx}
                onClick={() => handleClick(card.rank, "handOut", idx + 1)}
              >
                <Card
                  key={idx}
                  src={card.src}
                  isFlipped={false}
                  enableOnClick
                />
              </div>
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

export default SecondRound;
