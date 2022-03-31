import React, { useState } from "react";
import "./App.css"
import { navigate } from "@reach/router";
import Timer from "./Timer";

const MatchLobby = (props)=>{
    const [ startDelay , setStartDelay] = useState(false);
    const handleNext= ()=>{
        navigate("/Imagine/TicTacToe");
    }

    const throwAlert = ()=>{
        alert("Error: Bias Detected.");
    }

    const doWhenTimerFinished = () => {
        alert("Now Joining Game...");//Notifies the user when they can join game
    }

    const [clicked, setClicked] = useState(false);

    return(
        
        <div className="container bottomSpace" >
            <div>
                Match Lobby 
            </div>

            <div className="PlayerBoard">
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>SCORE</th>
                            <th>STATUS</th>
                            <th>BIAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>User</td>
                            <td>5/3/2</td>
                            <td>Waiting</td>
                            <td>None</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Teammate</td>
                            <td>5/2/3</td>
                            <td>In Game</td>
                            <td>None</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Teammate</td>
                            <td>9/0/1</td>
                            <td>Waiting</td>
                            <td>Bias</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Teammate</td>
                            <td>2/4/4</td>
                            <td>In Game</td>
                            <td>None</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {clicked 
                ? <Timer seconds={5} finished={doWhenTimerFinished} />
                : <button onClick={() => setClicked(true)}>Start</button>
            }
            {/* change to any number */}
            <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick = {handleNext}//{()=> throwAlert()}{handleNext}
              key="start"
            >
                Continue
            </button>
            </div>
    )
}

export default MatchLobby;