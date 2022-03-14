import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_IDLE} from "../../../../constants/lab6";



const ExerciseStart = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_IDLE)
    },[actions]);

    const handleStart = () =>{
        navigate("/Lab6/Exercise/");
    }

    return(
        <div className="center-div">
            <div id="Header">
                <p class="mainTitle">Part 1: Applicant</p>
            </div>
            <div className="guidance margin-bottom-2">
                In this exercise you will be applying to the company “MegaCorp.” 
                During the process you will experience AI-based bias, and be asked to make changes to the AI. 
                Click the “Start” button to begin this exercise!
            </div>
            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleStart}
                key="start"
            >
                Start
            </button>
      </div>
    );
}

export default ExerciseStart;
