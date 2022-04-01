import React from "react";
import { navigate } from "@reach/router";

const ImagineStart = (props)=>{
    const {linkNum} = props;
    const handleNext= ()=>{
        navigate("/Imagine"+linkNum+"/AvatarSelection");
    }

    return(
        
        <div className="container bottomSpace center-div" >
            <h2 class="playthrough__title">Tic-Tac-Toe Bias: Start</h2>
            <div className="playthrough__sentence">
            You are going to be competing against an AI opponent in a game of Tic-Tac-Toe and try your best beat the AI in competition. 
            There will be other people playing the same game concurrently with you.
            </div>
            <div className="playthrough__sentence">
                Click the “Start” button to begin this activity!
            </div>
            <button
              className="btn btn-primary text-black btn-xl text-uppercase "
              onClick = {handleNext}
              key="start"
            >
                Start
            </button>
        </div>
    )
}

export default ImagineStart;