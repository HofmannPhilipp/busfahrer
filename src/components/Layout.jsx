import React from "react";
import PlayersInfo from "./PlayersInfo";

function Layout({ children }) {
  return (
    <div className="py-5">
      <PlayersInfo />
      {children}
    </div>
  );
}

export default Layout;
