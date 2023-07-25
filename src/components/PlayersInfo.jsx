import React, { useEffect } from "react";
import { CiBeerMugFull } from "react-icons/ci";
import { FaPlayCircle } from "react-icons/fa";
import Card from "./Card";
import { useGameState } from "../context/GameStateProvider";
import { useDeck } from "../context/DeckProvider";
function PlayersInfo() {
  const { playersState } = useGameState();
  const { getCardId } = useDeck();

  return (
    <div className="">
      <div className="flex justify-center bg-gradient-to-r from-indigo-700 via-purple-500 to-indigo-700">
        <CiBeerMugFull className="text-3xl text-white" />
      </div>
      <div className="px-2 divide-y bg-zinc-900">
        {playersState.players.map((player) => (
          <div key={player.name} className="flex items-center h-[70px]">
            <div className="flex items-center gap-2 w-[100px]">
              <FaPlayCircle
                className={`${
                  !player.activePlayer && `invisible`
                } text-purple-500 animate-pulse`}
              />
              <span className="text-white">{player.name}</span>
            </div>
            {player.cards.length > 0 && (
              <div className="flex gap-1">
                {player.cards.map((card, idx) => (
                  <div className="h-[64px]" key={idx}>
                    <Card src={card.src} isFlipped={true} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayersInfo;
