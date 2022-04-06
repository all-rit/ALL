import { useEffect, useState } from "react";
import TicTacToeButton from "./TicTacToeButton";
import Model from "../TicTacToe/Model";

const TicTacToeBoard = (props)=> {
    const {handleNext}=props;
    const[activePlayer , setActivePlayer] = useState(Model.Players[0]);
    const[gameInfo , setGameInfo] = useState(Model.createNewBoard());
    const[gameState, setGameState] = useState({isGameOver:false , winner:null});
    
    const [updateBoard , setUpdateBoard] = useState(false);

    useEffect(()=>{
        setUpdateBoard(false);
    },[gameInfo, updateBoard]);
    
    const executeMove = (e,x, y) => { 
        e.preventDefault();
        //updates the gameInfo of the component
        setGameInfo({...Model.makeMove(gameInfo , activePlayer.piece, x, y)});
        //updates Gamestate
        setGameState({...Model.checkWinner(gameInfo)});
        // swaps to AI
        setActivePlayer(Model.Players[1]);
        // performs wait 
        
        // updates after AI 
        setGameInfo({...Model.aIMove(gameInfo)}); 
        setGameState({...Model.checkWinner(gameInfo)});
        // swaps players
        setActivePlayer(Model.Players[0]);
        };
    

    return(
        <div>
            <div className="tw-container tw-content-center tw-pb-5">
                {
                    gameState.isGameOver === Model.GameState.isGameOver ?// <h2> It's the {activePlayer.name}'s turn </h2>:
                    <></> : (gameState.isGameOver ? <h2>The {gameState.winner} is the winner</h2>:
                    <h2> The Game was a Tie</h2>)
                }
            </div>
            <div className="tw-container tw-bg-dark tw-mx-auto tw-space-y-2 md:tw-space-y-0 md:tw-gap-2 md:tw-grid md:tw-grid-cols-3 lg:tw-grid-cols-3 tw-p-3">
                <div>
                    <TicTacToeButton piece={gameInfo.board[0][2]} moveMade={(e) => executeMove(e,2,0)} setUpdateBoard={setUpdateBoard}/>
                </div>
                <div>
                    <TicTacToeButton piece={gameInfo.board[1][2]} moveMade={(e)=> executeMove(e,2,1)} setUpdateBoard={setUpdateBoard}/>
                </div>
                <div>
                    <TicTacToeButton piece={gameInfo.board[2][2]} moveMade={(e)=> executeMove(e,2,2)} setUpdateBoard={setUpdateBoard}/>
                </div>
                <div>
                    <TicTacToeButton piece={gameInfo.board[0][1]} moveMade={(e)=> executeMove(e,1,0)} setUpdateBoard={setUpdateBoard}/>
                </div>
                <div>
                    <TicTacToeButton piece={gameInfo.board[1][1]} moveMade={(e)=> executeMove(e,1,1)} setUpdateBoard={setUpdateBoard}/>
                </div>
                <div>
                    <TicTacToeButton piece={gameInfo.board[2][1]} moveMade={(e)=> executeMove(e,1,2)} setUpdateBoard={setUpdateBoard}/>
                </div>
                <div>
                    <TicTacToeButton piece={gameInfo.board[0][0]} moveMade={(e)=> executeMove(e,0,0)} setUpdateBoard={setUpdateBoard}/>
                </div>
                <div>
                    <TicTacToeButton piece={gameInfo.board[1][0]} moveMade={(e)=> executeMove(e,0,1)} setUpdateBoard={setUpdateBoard}/>
                </div>
                <div>
                    <TicTacToeButton piece={gameInfo.board[2][0]} moveMade={(e)=> executeMove(e,0,2)} setUpdateBoard={setUpdateBoard}/>
                </div>
                </div>
                {gameState.isGameOver === Model.GameState.isGameOver ?// <h2> It's the {activePlayer.name}'s turn </h2>:
                    <></> :
                    <button
                        className="btn btn-primary text-black btn-xl text-uppercase tw-mt-5"
                        onClick = {handleNext}
                        key="start"
                        >
                            Continue
                    </button>
                }
            </div>


    )
}
export default TicTacToeBoard;
