import React from "react";
import { useGameState } from "../context/GameStateProvider";
import PlayerTurn from "./PlayerTurn";
import { playStages } from "../utils/firstRoundPlayStages";
function FirstRound() {
  const { playersState, playersTurnIndex, gameRound } = useGameState();

  return (
    <div className="py-10 ">
      {playersState.players.map(
        (player, index) =>
          index === playersTurnIndex && (
            <PlayerTurn
              key={index}
              playerName={player.name}
              ui={playStages[gameRound]}
              cards={player.cards}
            />
          )
      )}
    </div>
  );
}

export default FirstRound;
