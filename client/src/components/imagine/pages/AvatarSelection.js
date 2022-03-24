import React from "react";
import { navigate } from "@reach/router";

const AvatarSelection = (props)=>{
    const handleNext= ()=>{
        navigate("/Imagine/MatchLobby");
    }

    return(
        
        <div className="container bottomSpace" >
            <div>
                AvatarSelection
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

export default AvatarSelection;