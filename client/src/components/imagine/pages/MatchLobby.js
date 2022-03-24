import React from "react";
import { navigate } from "@reach/router";

const MatchLobby = (props)=>{

    const handleNext= ()=>{
        navigate("/Imagine/TicTacToe");
    }

    return(
        
        <div className="container bottomSpace" >
            <div>
                MatchLobby
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