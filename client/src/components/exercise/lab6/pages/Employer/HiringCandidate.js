import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";



const HiringCandidate = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING);
    },[actions]);

    const handleContinue = () =>{
        navigate("/Lab6/Exercise/AIReasoningQuestions");
    }

    return(
        <div className="center-div">
            <h2 class="playthrough__title">Choose A Candidate</h2>
            <h2 class="cognitive_instructions">Click on a candidates picture to select</h2>
            <h2 class="cognitive_instructions">Hiring for the job of “EMPLOYEE” at “MegaCorp Inc.”</h2>

            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleContinue}
                key="confirm"
            >
                Continue
            </button>
      </div>
    );
}

export default HiringCandidate;
