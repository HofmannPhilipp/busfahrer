import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GameStateProvider from "./context/GameStateProvider.jsx";
import DeckProvider from "./context/DeckProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GameStateProvider>
    <DeckProvider>
      <App />
    </DeckProvider>
  </GameStateProvider>
);
