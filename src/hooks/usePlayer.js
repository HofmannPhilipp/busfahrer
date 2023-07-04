import React, { useEffect, useState } from "react";
import { useGameState } from "../context/GameStateProvider";

function usePlayer() {
  const [playerIndex, setPlayerIndex] = useState(0);
  const { playersState } = useGameState();

  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_ACTIVE_PLAYER,
      payload: {
        name: playersState.players[playerIndex]?.name,
        active: true,
      },
    });
  }, [playerIndex]);
}

export default usePlayer;
