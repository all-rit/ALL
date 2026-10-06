import React, { useState } from "react";
import "./TicTacToeGameStylesheet.css";

//PLAYER AND COMPUTER COMPONENTS-----------------------------------------------------------------------------------------------------
var playerIcon = "X"; // Icon for the player.
var computerIcon = "O"; // Icon for the computer.

//BOARD LOGIC & UI-----------------------------------------------------------------------------------------------------
var winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Single square button component for the Tic Tac Toe game board.
function Square({value, onSquareClick}) {
    return <button className="tic-tac-toe-square" onClick={onSquareClick}> {value} </button>
}
// Component of the Tic Tac Toe game board; 3x3 grid of buttons.
// Each button represents a square on the board and can be clicked to make a move.
export default function TicTacToeBoard(){
    const [xIsNext, setXIsNext] = useState(true); // State to track which player's turn it is (X or O).
    const [squares, setSquares] = useState(Array(9).fill(null)); // State to hold the values of all squares on the board.
    
//     // Function to handle a click on a square.
//     function handleClick(i) {
//         //Stops the player from clicking a filled in square.
//         if(squares[i] || calculateWinner(squares)) {
//             return;
//         }
//         const nextSquares = squares.slice(); // Create a copy of the current squares array.

//         if (xIsNext){
//             nextSquares[i] = playerIcon; //If it's Player's turn, set value to 'X'.
//         } else {
//             nextSquares[i] = computerIcon; //If it's Computer's turn, set value to 'O'.
//         }
//         setSquares(nextSquares); // Update the state with the new squares array.
//         setXIsNext(!xIsNext); // Switch turns.
//     }


//     //Inform players the current status of the game is over when won.
//     const winner = calculateWinner(squares);
//     let status;
//     if (winner) {
//         status = "Winner: " + winner; // If there is a winner, display the winner.
//     } 

//     //BOARD RENDERING-----------------------------------------------------------------------------------------------------
    return (
    <>
    <div className="tic-tac-toe-status">{status}</div>
    <div className="tic-tac-toe-board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>

    <div className="tic-tac-toe-board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>

    <div className="tic-tac-toe-board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    </>);
// }

// //BOARD LOGIC-----------------------------------------------------------------------------------------------------
// function calculateWinner(squares) {
//     const winningLines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6]
//     ];
//     for (let i = 0; i < winningLines.length; i++) {
//         const [a, b, c] = winningLines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a]; // Return the winner ('X' or 'O') if a winning line is found.
//         }
//     }
//     return null; // Return null if there is no winner.
}

