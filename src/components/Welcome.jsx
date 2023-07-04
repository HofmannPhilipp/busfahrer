import React, { useState } from "react";
import {
  useGameState,
  useGameStateDispatch,
} from "../context/GameStateProvider";
import { ACTIONS } from "../reducer/playersReducer";

function Welcome() {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const { setFirstRound } = useGameState();
  const dispatch = useGameStateDispatch();

  function onPlayerSubmit() {
    if (playerName === "") return; // TODO: Error message
    //TODO: Add remove player
    if (players.length === 0) {
      // set the first player as activeplayer true
      setPlayers((prev) => [
        ...prev,
        { name: playerName, cards: [], activePlayer: true },
      ]);
    } else {
      setPlayers((prev) => [
        ...prev,
        { name: playerName, cards: [], activePlayer: false },
      ]);
    }

    setPlayerName("");
  }
  function onPlaySubmit() {
    dispatch({ type: ACTIONS.SET_PlAYERS, payload: players });
    setFirstRound();
  }
  return (
    <div className="flex flex-col py-10 space-y-10 text-center">
      <h1 className="text-2xl text-white">Busfahrer</h1>
      <img src="/busdriver.png" alt="logo" className="" />
      <div className="flex justify-center rounded-full">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={playerName}
          onChange={(event) => setPlayerName(event.target.value)}
          className="flex-1 px-1 py-1 rounded-l-full outline-none "
        />
        <button
          className="px-4 py-1 text-white bg-green-500 rounded-r-full"
          onClick={onPlayerSubmit}
        >
          Hinzufügen
        </button>
      </div>
      {players.length > 0 && (
        <div className="text-white">
          <div className="text-left">
            <h2>Spieler : </h2>

            <ul>
              {players.map((player) => (
                <li key={player.name}>{player.name}</li>
              ))}
            </ul>
          </div>
          {players.length > 1 && (
            <button
              onClick={onPlaySubmit}
              className="px-3 py-2 bg-blue-500 rounded-full "
            >
              Spiel beginnen
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Welcome;
