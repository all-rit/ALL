//IMPORTS
import React, { useState, useEffect } from "react";

//VARIABLES
const playerIcon = "X"; // Icon for the player
const computerIcon = "O"; // Icon for the computer
const AIDelay = 500; // Delay for the computer's move
const resetDelay = 2000; // Delay before resetting the game after a win or draw

//GAME COMPLETION STUFF
const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

function calculateWinner(squares) {
    for (let i = 0; i < winningLines.length; i++) {
        const [a, b, c] = winningLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null; // Return null if there's no winner
}

//AI LOGIC
function minmax(squares, isAITurn, lookAhead){
    const winner = calculateWinner(squares);
    //Computer wins = positive
    if (winner == computerIcon){
        return 10 - lookAhead;
    }
    //Player wins = negative
    if (winner == playerIcon){
        return lookAhead - 10;
    }
    //Draw
    if (squares.every(square => square != null)){
        return 0;
    }

    const scores = [];
    for (let i=0; i < 9; i++){
        if (squares[i] === null){
            squares[i] = isAITurn ? computerIcon : playerIcon; //Attempt the move
            scores.push(minmax(squares, !isAITurn, lookAhead+1));
            squares[i] = null; //Undo
        }
    }

    //Computer picks highest score, assume player picks lowest
    return isAITurn ? Math.max(...scores) : Math.min(...scores);
}

function getAIMove(squares){
    //Have computer make a random 'uncalculated' move 25-45% of the time (might change depending on difficulty)
    if (Math.random() < 0.35) {
        const empty = squares.map((v, i) => (v === null ? i : null)).filter(i => i !== null);
        if (empty.length > 0){
            return empty[Math.floor(Math.random() * empty.length)];
        }
    }

    const gameBoard = squares.slice();
    let bestScore = -Infinity;
    let bestMoves = [];

    for (let i=0; i < 9; i++){
        if (gameBoard[i] === null){
            gameBoard[i] = computerIcon;
            const score = minmax(gameBoard, false, 1);
            gameBoard[i] = null;

            if (score > bestScore){
                bestScore = score;
                bestMoves = [i];
            } else if (score === bestScore) {
                bestMoves.push(i);
            }
        }
    }

    if (bestMoves.length === 0){
        return null;
    }
    //Pick random good moves so the patterns don't become repetitive
    return bestMoves[Math.floor(Math.random() * bestMoves.length)];
}


//SQUARE BUTTON
function Square({value, onSquareClick, disabled}) {      
    return <button className="tw-text-center tw-text-white tw-text-[90px] tw-font-bold tw-leading-[34px] tw-h-[120px] tw-w-[120px] tw-mr-[1px] tw-mt-[1px] tw-p-0" onClick={onSquareClick} disabled={disabled}> {value} </button>
}

//BOARD COMPONENT
export default function TicTacToeBoard(){
    const [squares, setSquares] = useState(Array(9).fill(null)); // Hold the values of all squares on the board
    const [playerTurn, setPlayerTurn] = useState(true);

    const winner = calculateWinner(squares);
    const draw = !winner && squares.every(square => square !== null);
    const gameOver = winner !== null || draw;

    function handleClick(i){
        if (!playerTurn || squares[i] || gameOver){
            return 0;
        }
        const nextSquares = squares.slice();
        nextSquares[i] = 'X';
        setSquares(nextSquares);
        setPlayerTurn(false);
    }

    useEffect(() => {
        if (gameOver) {
            const resetTimer = setTimeout(() => {
                setSquares(Array(9).fill(null));
                setPlayerTurn(true);
            }, resetDelay);
            return() => clearTimeout(resetTimer);
        }
        if (!playerTurn) {
                const AITimer = setTimeout(() => {
                    const move = getAIMove(squares);
                    if (move !== null){
                        const nextSquares = squares.slice();
                        nextSquares[move] = computerIcon;
                        setSquares(nextSquares);
                    }
                    setPlayerTurn(true);
                }, AIDelay);
                return() => clearTimeout(AITimer);
            }
    }, [squares, playerTurn, gameOver]);

    //Should square[i] be unclickable?
    const isLocked = (i) => !playerTurn || gameOver || squares[i] !== null;  

    function getGameStatus(){
        if (winner){
            return `${winner} wins!`;
        }
        if (squares.every((square) => square !== null)){
            return "It's a draw!";
        }
        return `${playerTurn ? "Your Turn (X)" : "Computer's Turn (O)" }`;
    }

    //ANIMATE WINNING LINE BY MAKING IT FLASH

    return(
        <div className="tw-flex tw-justify-center tw-items-center tw-pt-20">
            <div className="game-UI">
                <div className="game-title-container">
                    <h1 className="tw-text-white tw-font-bold tw-text-2xl">ALL's Tic Tac Toe Tournament</h1>
                </div>
                <div className="tw-text-[yellow] tw-mb-[15px] tw-text-lg tw-font-bold">{getGameStatus()}</div>
                <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
                    <div className="tw-flex">
                        <Square value={squares[0]} onSquareClick={() => handleClick(0)} disabled={isLocked(0)} />
                        <Square value={squares[1]} onSquareClick={() => handleClick(1)} disabled={isLocked(1)} />
                        <Square value={squares[2]} onSquareClick={() => handleClick(2)} disabled={isLocked(2)} />
                    </div>

                    <div className="tw-flex">
                        <Square value={squares[3]} onSquareClick={() => handleClick(3)} disabled={isLocked(3)} />
                        <Square value={squares[4]} onSquareClick={() => handleClick(4)} disabled={isLocked(4)} />
                        <Square value={squares[5]} onSquareClick={() => handleClick(5)} disabled={isLocked(5)} />
                    </div>

                    <div className="tw-flex">
                        <Square value={squares[6]} onSquareClick={() => handleClick(6)} disabled={isLocked(6)} />
                        <Square value={squares[7]} onSquareClick={() => handleClick(7)} disabled={isLocked(7)} />
                        <Square value={squares[8]} onSquareClick={() => handleClick(8)} disabled={isLocked(8)} />
                    </div>
                </div>
            </div>           
        </div>
    
    );
}