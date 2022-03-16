import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";

const AIRepair = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING)
    },[actions]);

    const handleStart = () =>{
        navigate("/Lab6/Exercise/FixedHiringCandidate");
    }

    return(
        <div className="center-div">
            <h2 class="playthrough__title">Now let’s repair the problem in the AI</h2>

            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleStart}
                key="start"
            >
                Continue
            </button>
      </div>
    );
}

export default AIRepair;
