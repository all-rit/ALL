import React from "react";
import { navigate } from "@reach/router";
import PlayerBoard from "../components/PlayerBoard";


const MatchLobby = (props)=>{
    const {user,biasType,linkNum} = props;

    const handleNext= ()=>{ 
        navigate("/Imagine"+linkNum+"/TicTacToe");
    }


    return(
        
        <div className="container bottomSpace" >
            {/*bias types: user, team, none */ }
            <PlayerBoard user={user} handleNext={handleNext} biasType={biasType}/>
            
        </div>

    )
}

export default MatchLobby;