import React from "react";
import { navigate } from "@reach/router";

const AvatarSelection = (props)=>{
    const handleNext= ()=>{
        navigate("/Imagine/MatchLobby");
    }

    return(
        
        <div className="container bottomSpace center-div" >
            <h2 class="playthrough__title">Choose Your Squad</h2>
            <div className="playthrough__sentence">
                Make a group of players that will work together to achieve your goal. You’ll also be choosing your avatar!
            </div>

            <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick = {handleNext}
              key="start"
            >
                Confirm Selection
            </button>
        </div>
    )
}

export default AvatarSelection;