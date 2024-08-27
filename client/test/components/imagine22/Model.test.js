/* eslint-disable no-undef */
const {
  Players,
  createNewBoard,
  makeMove,
  check3InARow,
  checkWinner,
} = require("../../../src/components/imagine22/TicTacToe/Model");

test("checks if 3 values are equal to each other", () => {
  // 3 values that are the same
  expect(check3InARow(0, 0, 0)).toBe(true);

  expect(check3InARow(1, 2, 3)).toBe(false);

  expect(check3InARow(1, 1, null)).toBe(false);

  expect(check3InARow(null, null, null)).toBe(false);

  expect(
    check3InARow(Players[0].piece, Players[0].piece, Players[0].piece),
  ).toBe(true);

  expect(
    check3InARow(Players[1].piece, Players[1].piece, Players[1].piece),
  ).toBe(true);

  expect(
    check3InARow(Players[1].piece, Players[0].piece, Players[1].piece),
  ).toBe(false);
});

test("Placing on a board.", () => {
  // board setup
  const TestBoard = { ...createNewBoard() };
  const FinalBoard = { ...createNewBoard() };
  // end setup
  FinalBoard.available.splice(6, 1);
  FinalBoard.board[2][0] = "X";
  // CUT
  const newval = { ...makeMove(TestBoard, "X", 0, 2) };
  expect(newval).toStrictEqual(FinalBoard);
});

test("to see if you can fill in the entire board", () => {
  const fillBoard = { ...createNewBoard() };
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      makeMove(fillBoard, "O", x, y);
    }
  }
  expect(fillBoard.available.length).toBe(0);
});

test("to see vertical win configuration", () => {
  const vertical = { ...createNewBoard() };
  const WinOutPut = { isGameOver: true, winner: "Player" };
  makeMove(vertical, "X", 0, 0);
  makeMove(vertical, "X", 0, 1);
  makeMove(vertical, "X", 0, 2);
  expect(checkWinner(vertical)).toStrictEqual(WinOutPut);
});

test("Horizontal Testing", () => {
  const horizontal = { ...createNewBoard() };
  const HWinOutPut = { isGameOver: true, winner: "AI" };
  makeMove(horizontal, Players[1].piece, 0, 1);
  makeMove(horizontal, Players[1].piece, 1, 1);
  makeMove(horizontal, Players[1].piece, 2, 1);

  expect(checkWinner(horizontal)).toStrictEqual(HWinOutPut);
});

test("Diagonal Testing", () => {
  const diagonal = { ...createNewBoard() };
  const DOuptTest = { isGameOver: true, winner: "Player" };
  makeMove(diagonal, Players[0].piece, 0, 0);
  makeMove(diagonal, Players[0].piece, 1, 1);
  makeMove(diagonal, Players[0].piece, 2, 2);
  expect(checkWinner(diagonal)).toStrictEqual(DOuptTest);
});

test("Tie Condition", () => {
  const Tie = { ...createNewBoard() };
  const outputTest = { isGameOver: true, winner: "tie" };
  makeMove(Tie, Players[1].piece, 0, 2);
  makeMove(Tie, Players[0].piece, 1, 2);
  makeMove(Tie, Players[0].piece, 2, 2);
  makeMove(Tie, Players[0].piece, 0, 1);
  makeMove(Tie, Players[0].piece, 1, 1);
  makeMove(Tie, Players[1].piece, 2, 1);
  makeMove(Tie, Players[1].piece, 0, 0);
  makeMove(Tie, Players[1].piece, 1, 0);
  makeMove(Tie, Players[0].piece, 2, 0);
  expect(checkWinner(Tie)).toStrictEqual(outputTest);
});

test("game Not over yet", () => {
  const notYet = { ...createNewBoard() };
  const output = { isGameOver: false, winner: null };
  makeMove(notYet, Players[1].piece, 0, 2);
  makeMove(notYet, Players[0].piece, 1, 2);
  makeMove(notYet, Players[0].piece, 2, 2);
  makeMove(notYet, Players[0].piece, 0, 1);
  makeMove(notYet, Players[0].piece, 1, 1);
  makeMove(notYet, Players[1].piece, 2, 1);
  makeMove(notYet, Players[1].piece, 0, 0);
  makeMove(notYet, Players[1].piece, 1, 0);
  expect(checkWinner(notYet)).toStrictEqual(output);
});
