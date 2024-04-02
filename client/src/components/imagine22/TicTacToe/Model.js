/* eslint-disable valid-jsdoc */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/**
 * Model.js is a Javascript file that is responsible for holding the logic behind a game of
 * Tic Tack Toe. This file contains the behavior starting a game and checking the given
 * state of a playing game by the user
 */

// Board constant
const Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
// Player Game Piece.
const Players = [
  { name: "Player", piece: "X" },
  { name: "AI", piece: "O" },
];
// Dictionary format for game status
const GameStatus = { board: null, available: null };
const GameState = { isGameOver: false, winner: null };

/**
 * createNewBoard() is a function that is responsible for configuring a new board
 * for Tic Tac Toe.
 * @return An object storing both the board 2d array and the array of available locations.
 */
const createNewBoard = () => {
  const openSpots = [];
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      openSpots.push({ x: x, y: y });
    }
  }
  return {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    available: openSpots,
  };
};
/**
 * checkWinner is a function that checks the valid configurations that a player can
 * score a win in Tic Tac Toe.
 * @param {Object} GameInfo Object that stores a board and available array
 * @return an object that returns the current state of the game with winner and is game over
 */
const checkWinner = (GameInfo) => {
  let winner = null;
  const GameState = { ...GameInfo };
  // check vertical formations
  Players.forEach((Player) => {
    for (let y = 0; y < 3; y++) {
      if (
        check3InARow(
          GameState.board[y][0],
          GameState.board[y][1],
          GameState.board[y][2],
        ) &&
        Player.piece === GameState.board[y][0]
      ) {
        winner = Player;
      }
    }
    // check vertical
    for (let x = 0; x < 3; x++) {
      if (
        check3InARow(
          GameState.board[0][x],
          GameState.board[1][x],
          GameState.board[2][x],
        ) &&
        Player.piece === GameState.board[0][x]
      ) {
        winner = Player;
      }
    }
    // check diagonal formations
    if (
      (check3InARow(
        GameState?.board[0][0],
        GameState?.board[1][1],
        GameState?.board[2][2],
      ) ||
        check3InARow(
          GameState?.board[2][0],
          GameState?.board[1][1],
          GameState?.board[0][2],
        )) &&
      Player.piece === GameState.board[1][1]
    ) {
      winner = Player;
    }
  });
  if (winner !== null) {
    // win state
    return { isGameOver: true, winner: winner.name };
  } else if (winner === null && GameState.available.length === 0) {
    // tie
    return { isGameOver: true, winner: "tie" };
  } else {
    // game continue state
    return { isGameOver: false, winner: null };
  }
};
/**
 * MakeMove is a function that contains the logic for the player to be able to
 * place a piece on the game board. This will then remove a location from the available list if not
 * taken then placing the piece on the board.
 * @param {Object} GameInfo Object storing the state of the current game.
 * @param {string} piece string holding the piece of the player.
 * @param {Number} x x location on the board.
 * @param {Number} y y location on the board.
 * @return the updated gameState after a move could be successfully or unsuccessfully performedS
 */
const makeMove = (GameInfo, piece, x, y) => {
  const GameState = { ...GameInfo };
  GameState.available?.forEach((value, index) => {
    if (value.x === x && value.y === y) {
      GameState.available.splice(index, 1);
      GameState.board[y][x] = piece;
      return GameState;
    }
  });
  return GameState;
};
/**
 * check3InARow() is a function that checks the equality of three values
 * @param {number , string} first first value
 * @param {number , string} second second value
 * @param {number, string} third  third value
 * @returns boolean to represent if they are equal or not.
 */
const check3InARow = (first, second, third) => {
  return (
    first === second &&
    first === third &&
    second === third &&
    first !== null &&
    second !== null &&
    third !== null
  );
};

const aIMove = (GameInfo) => {
  const GameState = { ...GameInfo };
  const length = GameState.available.length - 1;
  const remove = Math.floor(Math.random() * length);
  const removeLocation = { ...GameState.available[remove] };
  makeMove(GameState, Players[1].piece, removeLocation.x, removeLocation.y);
  return GameState;
};

export {
  makeMove,
  check3InARow,
  createNewBoard,
  Players,
  checkWinner,
  GameState,
  aIMove,
};
// remind to change to updated syntax
/** module.exports = {
    Board: Board,
    check3InARow : check3InARow,
    checkWinner : checkWinner,
    createNewBoard : createNewBoard,
    makeMove: makeMove,
    Players : Players,
    Board: Board
}
**/
