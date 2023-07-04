import React, { createContext, useContext, useReducer, useState } from "react";
import {
  ACTIONS,
  initialState,
  playersReducer,
} from "../reducer/playersReducer";
let playersTurnIndex = 0;
const GameStateConetxt = createContext();
const GameStateDispatchContext = createContext();
function GameStateProvider({ children }) {
  const [playersState, dispatch] = useReducer(playersReducer, initialState);
  const [gameState, setGameState] = useState("welcome");
  const [gameRound, setGameRound] = useState(0);
  function nextPlayerTurn() {
    if (playersTurnIndex < playersState.players.length - 1) {
      playersTurnIndex++;
    } else {
      playersTurnIndex = 0;
      if (gameRound == 3) return setSecondRound();
      setGameRound((prev) => prev + 1);
    }
  }
  function setFirstRound() {
    setGameState("first-round");
  }
  function setSecondRound() {
    setGameState("second-round");
  }
  function setThirdRound() {
    setGameState("third-round");
  }
  function setPyramide() {
    setGameState("pyramide");
  }
  function resetGameState() {
    setFirstRound();
    setGameRound(0);
    playersTurnIndex = 0;
  }

  return (
    <GameStateConetxt.Provider
      value={{
        playersState,
        nextPlayerTurn,
        setFirstRound,
        setSecondRound,
        setThirdRound,
        setPyramide,
        playersTurnIndex,
        gameRound,
        gameState,
        resetGameState,
      }}
    >
      <GameStateDispatchContext.Provider value={dispatch}>
        {children}
      </GameStateDispatchContext.Provider>
    </GameStateConetxt.Provider>
  );
}

export default GameStateProvider;

export const useGameState = () => {
  return useContext(GameStateConetxt);
};
export const useGameStateDispatch = () => {
  return useContext(GameStateDispatchContext);
};
