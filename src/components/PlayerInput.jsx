import React from "react";

function PlayerInput({ handlePlayerSubmit, playerName, setPlayerName }) {
  return (
    <form onSubmit={handlePlayerSubmit} className="flex gap-4">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Spieler:in Hinzufügen"
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
        className="flex-1 px-3 py-1 rounded-md outline-none focus:shadow-lg focus:shadow-green-700"
      />
      <button
        type="submit"
        className="px-4 py-1 text-white transition-colors duration-300 ease-in-out bg-green-500 rounded-md hover:bg-green-700"
      >
        +
      </button>
    </form>
  );
}

export default PlayerInput;
