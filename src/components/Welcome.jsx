import React, { useState } from "react";
import {
  useGameState,
  useGameStateDispatch,
} from "../context/GameStateProvider";
import { ACTIONS } from "../reducer/playersReducer";
import PlayerInput from "./PlayerInput";
import { FaTrashAlt } from "react-icons/fa";
import Logo from "./Logo";

function Welcome() {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState("");
  const { setFirstRound } = useGameState();
  const dispatch = useGameStateDispatch();

  function handlePlayerSubmit(event) {
    event.preventDefault();
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
  function handlePlay() {
    dispatch({ type: ACTIONS.SET_PlAYERS, payload: players });
    setFirstRound();
  }

  function handlePlayerDelete(name) {
    const filterdPlayers = players.filter((player) => player.name !== name);
    setPlayers(filterdPlayers);
  }
  return (
    <div className="flex flex-col py-10 space-y-10 ">
      <Logo />
      {/* <img src="/busdriver.png" alt="logo" className="h-[264px]" /> */}
      <h1 className="text-6xl font-extrabold text-center text-transparent animate-pulse bg-clip-text bg-gradient-to-r from-sky-500 via-cyan-200 to-green-500">
        Busfahrer
      </h1>
      <PlayerInput
        handlePlayerSubmit={handlePlayerSubmit}
        playerName={playerName}
        setPlayerName={setPlayerName}
      />
      {players.length > 0 && (
        <div className="text-white">
          <div className="px-1">
            <h2 className="text-lg font-semibold">Spieler : </h2>

            <ul className="space-y-2">
              {players.map((player) => (
                <li key={player.name} className="flex justify-between">
                  {player.name}
                  <button onClick={() => handlePlayerDelete(player.name)}>
                    <FaTrashAlt className="text-red-600" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {players.length > 1 ? (
            <button
              onClick={handlePlay}
              className="justify-start px-3 py-2 mx-1 my-4 transition-colors duration-300 ease-in-out bg-blue-500 rounded-md hover:bg-blue-700"
            >
              Spiel beginnen
            </button>
          ) : (
            <p className="px-1 py-2 text-red-600">
              Mindestend 2 Personen hinzufügen.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Welcome;
