/* eslint-disable react/prop-types */
import React from "react";

import { navigate } from "@reach/router";
import PlayerBoard from "../components/PlayerBoard";

const MatchLobby = (props) => {
  const { user, biasType, linkNum } = props;

  const handleNext = () => {
    navigate("/Imagine" + linkNum + "/TicTacToe");
  };

  return (
    <div className="container bottomSpace">
      <h2 className="playthrough__title">Tic-Tac-Toe: Pre-Match Lobby</h2>
      {/* bias types: user, team, none */}
      <PlayerBoard user={user} handleNext={handleNext} biasType={biasType} />
    </div>
  );
};

export default MatchLobby;
