import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";

const FavorableHiringCandidate = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING)
    },[actions]);

    const handleStart = () =>{
        navigate("/Lab6/Exercise/HiringCandidate");
    }
    
    return(
        <div className="center-div">
            <h2 class="playthrough__title">Favorable Candidate:</h2>
            <div className="playthrough__sentence">
        Here’s what MegaCorp is looking for in new employees 
            </div>

            <h2 class = "Prime candidate ex.">This is an example of a prime candidate that should be hired!</h2>
            <div className="playthrough__sentence">Click the “Continue” button to begin the second half of this exercise!</div>
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

export default FavorableHiringCandidate;