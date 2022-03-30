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

    return(
        
        <div className="container bottomSpace" >
            <div>
                Match Lobby 
            </div>
            <button
                className="btn btn-warning btn-lg btn-block "
                onClick={()=> throwAlert()}
                key="Start"
            >
                Continue
            </button>

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
            <Timer seconds={30}/>
            <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick = {handleNext}
              key="start"
            >
                Continue
            </button>
            </div>
    )
}

export default MatchLobby;