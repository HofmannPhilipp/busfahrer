import React, { useEffect } from "react";
import { CiBeerMugFull } from "react-icons/ci";
import { FaPlayCircle } from "react-icons/fa";
import Card from "./Card";
import { useGameState } from "../context/GameStateProvider";
function PlayersInfo() {
  const { playersState } = useGameState();

  return (
    <div className="text-white">
      <div className="flex justify-center bg-purple-500">
        <CiBeerMugFull className="text-3xl" />
      </div>
      <div className="px-2 bg-zinc-900 divide-y">
        {playersState.players.map((player) => (
          <div key={player.name} className="flex items-center h-[60px]">
            <div className="flex items-center gap-2 w-[100px]">
              <FaPlayCircle
                className={`${
                  !player.activePlayer && `invisible`
                } text-purple-500 animate-pulse`}
              />
              <span className="text-white">{player.name}</span>
            </div>
            {player.cards.length > 0 && (
              <div className="flex gap-2">
                {player.cards.map((card, idx) => (
                  <div className="h-[48px]" key={idx}>
                    <Card rank={card.rank} suit={card.suit} isFlipped={true} />
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
