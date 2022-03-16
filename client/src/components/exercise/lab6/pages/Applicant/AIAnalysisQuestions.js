import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";

const AIAnalysisQuestions = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING);
    },[actions]);

    const handleContinue = () =>{
        navigate("/Lab6/Exercise/NegativeReasoning");
    }

    return(
        <div className="center-div">
            <h2 class="playthrough__title">Which of these attributes do you think that the AI was looking for in this exercise in order to deny someone?</h2>
            
            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleContinue}
                key="confirm"
            >
                Submit
            </button>
      </div>
    );
}

export default AIAnalysisQuestions;
