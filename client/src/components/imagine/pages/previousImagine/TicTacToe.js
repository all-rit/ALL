/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import { navigate } from "@reach/router";
import Spinner from "../../../../common/Spinner/Spinner";
import TicTacToeBoard from "../../TicTacToe/TicTacToeBoard";
const TicTacToe = (props) => {
  const { linkNum } = props;
  const [loading, setLoading] = react.useState(true);
  const [gameState, setGameState] = react.useState({
    isGameOver: false,
    winner: null,
  });

  const handleNext = () => {
    navigate("/Imagine" + linkNum + "/End");
  };

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <div className="container bottomSpace">
      {loading ? (
        <>
          <h2 className="playthrough__title">Entering Match...</h2>
          <div className="landingpage__row">
            <Spinner />
          </div>
        </>
      ) : (
        <>
          <h2 className="playthrough__title">Tic-Tac-Toe: Match</h2>
          <div className="tw-text-2xl tw-mt-5 tw-mb-5">
            Click an open space bellow to begin your match against the AI!
          </div>
          <TicTacToeBoard
            handleNext={handleNext}
            gameState={gameState}
            setGameState={setGameState}
          />
        </>
      )}
    </div>
  );
};

export default TicTacToe;
