import React from "react";
import { navigate } from "@reach/router";

const TicTacToe = (props)=>{
    const handleNext= ()=>{
        navigate("/Imagine/End");
    }

    return(
        
        <div className="container bottomSpace" >
            <div>
                TicTacToe
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

export default TicTacToe;