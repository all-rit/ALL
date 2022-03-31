import React from "react";
import { navigate } from "@reach/router";

const ImagineEnd = (props)=>{
    const handleNext= ()=>{
        navigate("/Imagine");
    }

    return(
        <div className="container bottomSpace center-div" >
            <h2 class="playthrough__title">Tic-Tac-Toe Bias: End</h2>
                <div className="playthrough__sentence">
                    Congratulations! You've played a game against an AI! Thanks for playing!
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

export default ImagineEnd;