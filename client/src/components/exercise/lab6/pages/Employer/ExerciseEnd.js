import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_IDLE} from "../../../../../constants/lab6";

const ExerciseEnd = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_IDLE)
    },[actions]);

    const handleFinish = () =>{
        navigate("/Lab6/Reinforcement");
    }

    return(
        <div className="center-div">
            <div className="playthrough__sentence">
                You have completed the exercise! Hopefully you have a better understanding of the ethics behind AI!
            </div>
            <div className="playthrough__sentence">
                Click the "Finish Exercise" button to complete this exercise!
            </div>
            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleFinish}
                key="start"
            >
                Finish Exercise
            </button>
      </div>
    );
}

export default ExerciseEnd;
