import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
import Spinner from "../../../../../common/Spinner/Spinner";

const AnalyzeData = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING);
    },[actions]);

    const handleContinue = () =>{
        navigate("/Lab6/Exercise/AIAnalysisQuestions");
    }

    return(
        <div className="center-div">
            <h2 class="playthrough__title">Analyzing your data, please be patient...</h2>
            <div className="landingpage__row">
                <Spinner />
            </div>
            <button
                className="btn btn-primary text-black btn-xl text-uppercase "
                onClick = {handleContinue}
                key="confirm"
            >
                Finished
            </button>
      </div>
    );
}

export default AnalyzeData;
