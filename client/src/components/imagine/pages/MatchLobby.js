import React from "react";
import "./App.css"
import { navigate } from "@reach/router";
import { Form, Row } from "reactstrap";


const MatchLobby = (props)=>{

    const handleNext= ()=>{
        navigate("/Imagine/TicTacToe");
    }

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
                    <div className="PlayerBoard2">
                <table>
                    <tbody>
                        <tr>
                            <td>Opponent</td>
                            <td>2/5/5</td>
                            <td>Waiting</td>
                            <td>None</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Opponent</td>
                            <td>2/8/2</td>
                            <td>In Game</td>
                            <td>None</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Opponent</td>
                            <td>2/3/3</td>
                            <td>In Game</td>
                            <td>None</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>Opponent</td>
                            <td>3/5/0</td>
                            <td>Waiting</td>
                            <td>Bias</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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