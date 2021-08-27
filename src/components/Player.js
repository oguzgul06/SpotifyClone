import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* Sidebar */}
        <Sidebar spotify={spotify} />
        {/* Body */}
        <Body />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Player;
