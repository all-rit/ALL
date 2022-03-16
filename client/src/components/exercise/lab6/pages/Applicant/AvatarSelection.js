import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";



const AvatarSelection = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING);
    },[actions]);

    const confirmSelection = () =>{
        navigate("/Lab6/Exercise/QualificationQuestions");
    }

    return(
        <div className="center-div">
            <h2 class="playthrough__title">Welcome to “MegaCorp’s” hiring process!</h2>
            <p className="playthrough__sentence">
                To get you started with the hiring process, please pick an avatar you most identify with.
            </p>
            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {confirmSelection}
                key="confirm"
            >
                Confirm Selection
            </button>
      </div>
    );
}

export default AvatarSelection;
