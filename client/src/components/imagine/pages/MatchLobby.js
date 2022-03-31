import React from "react";
import { navigate } from "@reach/router";
import PlayerBoard from "../components/PlayerBoard";


const MatchLobby = (props)=>{
    const {user} = props;

    const handleNext= ()=>{ 
        navigate("/Imagine/TicTacToe");
    }

    return(
        
        <div className="container bottomSpace" >

            <PlayerBoard user={user} handleNext={handleNext}/>
            
        </div>
    )
}

export default MatchLobby;