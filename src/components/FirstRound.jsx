import React from "react";
import { useGameState } from "../context/GameStateProvider";
import PlayersInfo from "./PlayersInfo";
import PlayerTurn from "./PlayerTurn";
import { playStages } from "../utils/helper";
function FirstRound() {
  const { playersState, playersTurnIndex, gameRound } = useGameState();

  return (
    <div className="py-10 text-white">
      {playersState.players.map(
        (player, index) =>
          index === playersTurnIndex && (
            <PlayerTurn
              key={index}
              playerName={player.name}
              ui={playStages[gameRound]}
            />
          )
      )}
    </div>
  );
}

export default FirstRound;
