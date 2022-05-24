import React, {useEffect } from "react";
import { navigate } from "@reach/router";
import {EXERCISE_PLAYING} from "../../../../../constants/lab6";
import Spinner from "../../../../../common/Spinner/Spinner";

const AnalyzeData = (props) =>{
    const {actions} = props;

    useEffect(()=>{
        actions.updateState(EXERCISE_PLAYING);
        setTimeout(function(){
            handleContinue();
        }, 5000);
    },[actions]);

    const handleContinue = () =>{
        navigate("/Lab6/Exercise/NegativeReasoning");
    }

    return(
        <div className="center-div">
            <h2 class="playthrough__title">Reviewing your application, please be patient...</h2>
            <div className="landingpage__row">
                <Spinner />
            </div>
      </div>
    );
}

export default AnalyzeData;
