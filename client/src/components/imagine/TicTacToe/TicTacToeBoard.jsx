/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import TicTacToeButton from "./TicTacToeButton";
import Model from "../TicTacToe/Model";

/**
 * TicTacToeBoard is a component for the user to be able to import both the view and logic
 * of a game of Tic Tac Toe. This component will display a GameBoard and allow for the player
 * to play with an automated AI player to play the game against.
 * @param {Object} props
 */
const TicTacToeBoard = (props) => {
  const { handleNext } = props;
  const [activePlayer, setActivePlayer] = useState(Model.Players[0]);
  const [gameInfo, setGameInfo] = useState(Model.createNewBoard());
  const [updateBoard, setUpdateBoard] = useState(false);

  useEffect(() => {
    setUpdateBoard(false);
  }, [gameInfo, updateBoard]);
  /**
   * callAImove is a function that is responsible for executing the behavior of an AI
   * making a move on the board.
   */
  const callAImove = () => {
    // performs wait
    setGameInfo({ ...Model.aIMove(gameInfo) });
    props.setGameState({ ...Model.checkWinner(gameInfo) });
  };

  /**
   * executeMove is responsible for executing a move for the player and handling
   * the re-rendering to display a new piece on the board
   * @param {Event} e passed in event to know when to trigger move call.
   * @param {Number} x integer to show the x location
   * @param {Number} y integer to show the y location
   */
  const executeMove = (e, x, y) => {
    e.preventDefault();
    // updates the gameInfo of the component
    setGameInfo({ ...Model.makeMove(gameInfo, activePlayer.piece, x, y) });
    // updates GameState
    const currentGameState = { ...Model.checkWinner(gameInfo) };
    props.setGameState({ ...Model.checkWinner(gameInfo) });
    if (!currentGameState.isGameOver) {
      // switches to the AI
      setActivePlayer(Model.Players[1]);
      // executes the AI move
      callAImove();
      // Sets the activePlayer back to the player
      setActivePlayer(Model.Players[0]);
    }
  };
  return (
    <>
      <div className="moduleContainer">
        {props.gameState.isGameOver === Model.GameState.isGameOver ? (
          <></>
        ) : props.gameState.isGameOver && props.gameState.winner !== "tie" ? (
          <div className="tw-container tw-content-center tw-p-1">
            <h2>
              {props.gameState.winner === "AI" ? (
                <>You've lost the match!</>
              ) : (
                <>You've won the match!</>
              )}
            </h2>
            <div className="tw-text-2xl tw-mt-5 tw-mb-3">
              Press the "Continue" button to proceed.
            </div>
          </div>
        ) : (
          <div className="tw-container tw-content-center tw-p-1">
            <h2>Match ended in a tie!</h2>
            <div className="tw-text-2xl tw-mt-5 tw-mb-3">
              Press the "Continue" button to proceed.
            </div>
          </div>
        )}
        <div className="moduleContainer tw-container tw-bg-dark tw-mx-auto tw-space-y-2 md:tw-space-y-0 md:tw-gap-2 md:tw-grid md:tw-grid-cols-3 lg:tw-grid-cols-3 tw-p-3">
          <TicTacToeButton
            piece={gameInfo.board[0][2]}
            moveMade={(e) => executeMove(e, 2, 0)}
            setUpdateBoard={setUpdateBoard}
          />

          <TicTacToeButton
            piece={gameInfo.board[1][2]}
            moveMade={(e) => executeMove(e, 2, 1)}
            setUpdateBoard={setUpdateBoard}
          />

          <TicTacToeButton
            piece={gameInfo.board[2][2]}
            moveMade={(e) => executeMove(e, 2, 2)}
            setUpdateBoard={setUpdateBoard}
          />

          <TicTacToeButton
            piece={gameInfo.board[0][1]}
            moveMade={(e) => executeMove(e, 1, 0)}
            setUpdateBoard={setUpdateBoard}
          />

          <TicTacToeButton
            piece={gameInfo.board[1][1]}
            moveMade={(e) => executeMove(e, 1, 1)}
            setUpdateBoard={setUpdateBoard}
          />

          <TicTacToeButton
            piece={gameInfo.board[2][1]}
            moveMade={(e) => executeMove(e, 1, 2)}
            setUpdateBoard={setUpdateBoard}
          />

          <TicTacToeButton
            piece={gameInfo.board[0][0]}
            moveMade={(e) => executeMove(e, 0, 0)}
            setUpdateBoard={setUpdateBoard}
          />

          <TicTacToeButton
            piece={gameInfo.board[1][0]}
            moveMade={(e) => executeMove(e, 0, 1)}
            setUpdateBoard={setUpdateBoard}
          />

          <TicTacToeButton
            piece={gameInfo.board[2][0]}
            moveMade={(e) => executeMove(e, 0, 2)}
            setUpdateBoard={setUpdateBoard}
          />
        </div>
      </div>
      {props.gameState.isGameOver === Model.GameState.isGameOver ? (
        <></>
      ) : (
        <button
          className="btn btn-primary text-black btn-xl text-uppercase tw-mt-5"
          onClick={handleNext}
          key="start"
        >
          Continue
        </button>
      )}
    </>
  );
};
export default TicTacToeBoard;
